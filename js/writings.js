document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector("#allWritingsGrid");
  const empty = document.querySelector("#emptyState");
  const search = document.querySelector("#searchInput");
  const filters = document.querySelectorAll(".filter");
  let category = "All";

  function render() {
    const query = search.value.trim().toLowerCase();
    const results = articles.filter(a => {
      const matchesCategory = category === "All" || a.category === category;
      const haystack = `${a.title} ${a.author} ${a.excerpt} ${a.category}`.toLowerCase();
      return matchesCategory && haystack.includes(query);
    });

    grid.innerHTML = "";
    results.forEach(a => grid.appendChild(articleCard(a)));
    empty.classList.toggle("hidden", results.length !== 0);
  }

  filters.forEach(btn => btn.addEventListener("click", () => {
    filters.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    category = btn.dataset.filter;
    render();
  }));

  search.addEventListener("input", render);
  render();
});
