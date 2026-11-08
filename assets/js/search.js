
document.addEventListener("DOMContentLoaded", async () => {
  const input = document.getElementById("search-input");
  const results = document.getElementById("search-results");

  if (!input || !results) return;

  try {
    const script = 
      document.querySelector('script[src*="search.js"]');
    const response = await 
      fetch(script.dataset.index);

    if (!response.ok) {
      throw new Error("No se pudo cargar el índice");
    }

    const posts = await response.json();

    input.addEventListener("input", () => {
      const query = input.value.trim().toLowerCase();

      if (!query) {
        results.innerHTML = "<p>Escribí algo para comenzar a buscar.</p>";
        return;
      }

      const matches = posts.filter(post => {
        const searchableText = [
          post.title,
          post.content,
          ...(post.tags || [])
        ].join(" ").toLowerCase();

        return searchableText.includes(query);
      });

      if (matches.length === 0) {
        results.innerHTML = "<p>No encontramos publicaciones con esa búsqueda.</p>";
        return;
      }

      results.innerHTML = matches.map(post => `
        <article class="search-result">
          <h3><a href="${post.url}">${escapeHTML(post.title)}</a></h3>
          <small>${escapeHTML(post.date)}</small>
          <p>${escapeHTML(post.content.slice(0, 180))}...</p>
        </article>
      `).join("");
    });

  } catch (error) {
    results.innerHTML = "<p>Hubo un problema al cargar el buscador.</p>";
    console.error(error);
  }
});

function escapeHTML(text) {
  return String(text).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[character]);
}
