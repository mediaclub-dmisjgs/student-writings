document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector("#articlePage");
  const id = new URLSearchParams(window.location.search).get("id");
  const article = getArticle(id);

  if (!article) {
    root.innerHTML = `
      <section class="container article-wrap">
        <div class="article-head">
          <div class="eyebrow"><span></span> NOT FOUND</div>
          <h1 class="article-title">This writing could not be found.</h1>
          <a class="btn btn-primary" href="writings.html">Back to Writings →</a>
        </div>
      </section>`;
    return;
  }

  document.title = `${article.title} | Media Club`;

  root.innerHTML = `
    <article class="article-wrap">
      <header class="article-head">
        <a class="back-link" href="writings.html">← Back to all writings</a>
        <div class="article-meta">
          <span class="category">${article.category.toUpperCase()}</span>
          <span>•</span><span>${article.date}</span>
        </div>
        <h1 class="article-title">${escapeHtml(article.title)}</h1>
        <p class="article-dek">${escapeHtml(article.excerpt)}</p>
        <p class="article-byline">Written by <strong>${escapeHtml(article.author)}</strong> · ${escapeHtml(article.grade)}</p>
        ${article.image ? `<div class="article-cover"><img src="${escapeHtml(article.image)}" alt="${escapeHtml(article.title)}"></div>` : ""}
      </header>

      <div class="article-layout">
        <div class="article-content">
          ${article.content.map((p, i) => `<p class="${i === 0 ? "dropcap" : ""}">${escapeHtml(p)}</p>`).join("")}
        </div>
        <aside class="share-panel">
          <span>SHARE THIS</span>
          <div class="share-buttons">
            <button class="share-btn" id="copyLink">Copy link</button>
            <button class="share-btn" id="nativeShare">Share...</button>
          </div>
        </aside>
      </div>

      <div class="article-footer">
        <a class="text-link" href="writings.html">← Read more student writings</a>
      </div>
    </article>`;

  document.querySelector("#copyLink").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      showToast("Link copied!");
    } catch {
      showToast("Copy unavailable — share the page URL.");
    }
  });

  document.querySelector("#nativeShare").addEventListener("click", async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: article.title, text: article.excerpt, url: window.location.href });
      } catch {}
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        showToast("Link copied!");
      } catch {
        showToast("Sharing is not supported in this browser.");
      }
    }
  });
});

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2200);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, ch => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
  }[ch]));
}
