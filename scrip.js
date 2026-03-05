// Filtro de productos por título usando el buscador de la navbar
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".navbar__search input");
    const searchButton = document.querySelector(".navbar__search button");
    const productCards = document.querySelectorAll(".producto-card");
  
    if (!searchInput || !searchButton || productCards.length === 0) return;
  
    function filtrarProductos() {
      const texto = searchInput.value.toLowerCase().trim();
  
      productCards.forEach((card) => {
        const titulo = card.querySelector("h3")?.textContent.toLowerCase() || "";
        if (!texto || titulo.includes(texto)) {
          card.style.display = "";
        } else {
          card.style.display = "none";
        }
      });
    }
  
    searchButton.addEventListener("click", filtrarProductos);
  
    searchInput.addEventListener("keyup", (event) => {
      if (event.key === "Enter") {
        filtrarProductos();
      }
    });
  });