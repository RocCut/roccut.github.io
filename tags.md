---
layout: page
title: "Temas de estudio"
permalink: /tags/
---

<div class="tags-page">
  <p class="tags-intro">Explora los apuntes y lecturas organizados por etiqueta:</p>

  <!-- Índice rápido de etiquetas al inicio -->
  <div class="tags-nav">
    {% for tag in site.tags %}
      {% assign tag_name = tag | first %}
      {% assign tag_slug = tag_name | slugify %}
      {% assign posts = tag[1] %}
      <a href="#{{ tag_slug }}" class="tag-pill-nav">#{{ tag_name }} ({{ posts.size }})</a>
    {% endfor %}
  </div>

  <hr />

  <!-- Listado de entradas agrupadas por cada etiqueta -->
  {% for tag in site.tags %}
    {% assign tag_name = tag[0] %}
    {% assign tag_slug = tag_name | slugify %}
    {% assign posts = tag[1] %}
    
    <div class="tag-group" id="{{ tag_slug }}">
      <h2 class="tag-heading">#{{ tag_name }}</h2>
      <ul class="tag-post-list">
        {% for post in posts %}
          <li>
            <span class="post-date">{{ post.date | date: "%d/%m/%Y" }}</span> — 
            <a href="{{ post.url | relative_url }}" class="post-link">{{ post.title }}</a>
          </li>
        {% endfor %}
      </ul>
    </div>
  {% endfor %}
</div>

<style>
  .tags-intro {
    color: #6272a4 !important;
    font-size: 0.95rem !important;
    margin-bottom: 15px !important;
  }

  .tags-nav {
    display: flex !important;
    flex-wrap: wrap !important;
    gap: 8px !important;
    margin-bottom: 20px !important;
  }

  .tag-pill-nav {
    background-color: #44475a !important;
    color: #ff79c6 !important;
    padding: 4px 10px !important;
    border-radius: 6px !important;
    font-size: 0.9rem !important;
    text-decoration: none !important;
    border: 1px solid #bd93f9 !important;
    transition: all 0.2s ease !important;
  }

  .tag-pill-nav:hover {
    background-color: #bd93f9 !important;
    color: #282a36 !important;
  }

  .tag-group {
    margin-top: 30px !important;
    padding-bottom: 15px !important;
    border-bottom: 1px solid #44475a !important;
  }

  .tag-heading {
    color: #bd93f9 !important;
    font-size: 1.5rem !important;
    margin-bottom: 12px !important;
  }

  .tag-post-list {
    list-style-type: none !important;
    padding-left: 0 !important;
  }

  .tag-post-list li {
    margin-bottom: 8px !important;
    font-size: 1rem !important;
  }

  .post-date {
    color: #6272a4 !important;
    font-size: 0.85rem !important;
  }
</style>
