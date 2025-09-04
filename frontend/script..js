// Theme toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.dataset.theme =
    document.body.dataset.theme === "dark" ? "light" : "dark";
});

// Fetch products from backend API
async function loadProducts() {
  try {
    const res = await fetch("/api/products"); // Vercel will proxy backend
    const products = await res.json();

    const grid = document.getElementById("productGrid");
    grid.innerHTML = "";

    products.forEach(product => {
      const card = document.createElement("div");
      card.className = "product-card fade-in";
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
      `;
      grid.appendChild(card);
    });
  } catch (err) {
    console.error("Error loading products:", err);
  }
}
loadProducts();

// Fade-in on scroll
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

setTimeout(() => {
  document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
}, 1000);
