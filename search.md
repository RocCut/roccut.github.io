---
layout: page
title: Buscar
permalink: /search/
---

<div class="search-container">
  <h2>Buscar en Blog de RocCut</h2>

  <input
    type="search"
    id="search-input"
    placeholder="Escribí una palabra o tema..."
    autocomplete="off"
  >

  <div id="search-results">
    <p>Escribí algo para comenzar a buscar.</p>
  </div>
</div>

<script
  src="{{ '/assets/js/search.js' | relative_url }}"
  data-index="{{ '/search.json' | relative_url }}">
</script>
