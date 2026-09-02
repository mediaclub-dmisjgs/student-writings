document.addEventListener("DOMContentLoaded", () => {
  const featuredGrid = document.querySelector("#featuredGrid");
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav");

  if (featuredGrid) {
    articles.slice(0, 3).forEach(article => featuredGrid.appendChild(articleCard(article)));
  }

  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      nav.classList.toggle("mobile-open");
      if (nav.classList.contains("mobile-open")) {
        nav.style.display = "flex";
        nav.style.position = "absolute";
        nav.style.top = "72px";
        nav.style.left = "0";
        nav.style.right = "0";
        nav.style.padding = "18px 20px";
        nav.style.background = "#0b0c0f";
        nav.style.borderBottom = "1px solid #272a31";
        nav.style.flexDirection = "column";
        nav.style.alignItems = "flex-start";
      } else {
        nav.removeAttribute("style");
      }
    });
  }
});

function articleCard(article) {
  const card = document.createElement("a");
  card.className = "writing-card";
  card.href = `article.html?id=${encodeURIComponent(article.id)}`;
  const initial = article.category.charAt(0);
  const visual = article.image
    ? `<div class="card-visual has-image"><img src="${escapeHtml(article.image)}" alt="${escapeHtml(article.title)}"><span class="image-shade"></span><span class="category">${article.category.toUpperCase()}</span></div>`
    : `<div class="card-visual"><span class="category">${article.category.toUpperCase()}</span><span class="big-letter">${initial}</span></div>`;

  card.innerHTML = `
    ${visual}
    <div class="card-body">
      <h3>${escapeHtml(article.title)}</h3>
      <p>${escapeHtml(article.excerpt)}</p>
      <div class="author">
        <span>By <strong>${escapeHtml(article.author)}</strong></span>
        <span>${escapeHtml(article.date)}</span>
      </div>
    </div>`;
  return card;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, ch => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
  }[ch]));
}
