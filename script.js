// Ejemplo simple: mensaje en consola
console.log("Bienvenida al blog RocCut - estilo Drácula activo");

// Podés agregar efectos, como cambiar color de títulos al hacer clic
document.querySelectorAll("h2").forEach(h2 => {
  h2.addEventListener("click", () => {
    h2.style.color = "#ffb86c"; // naranja Drácula
  });
});
