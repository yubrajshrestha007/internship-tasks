// importing the product.js file into our practice module
import { productList } from "./product.js";

const productListEl = document.getElementById("product-list");
const uniqueCategories = [...new Set(productList.map((prod) => prod.category))];
const categories = uniqueCategories.sort();
categories.forEach((category) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `<button href="#" data-category="${category}">${category}</button>`;
  productListEl.appendChild(listItem);
});

document.querySelectorAll("#product-list button").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const category = this.dataset.category;
    showProductDetail(category);
  });
});

function showProductDetail(category) {
  const detailSection = document.getElementById("product-detail");
  const categoryTitleEl = document.getElementById("category-title");
  const productDataEl = document.getElementById("product-data");
  const totalCostEl = document.getElementById("total-product-cost");

  const productEntries = productList.filter((prod) => prod.category === category);

  categoryTitleEl.textContent = `Products in ${category}`;
  productDataEl.innerHTML = productEntries
    .map(
      (entry) => `
      <tr>
        <td>${entry.name}</td>
        <td>$${entry.price.toFixed(2)}</td>
        <td>${entry.stockQuantity}</td>
        <td>${entry.releaseDate}</td>
      </tr>`
    )
    .join("");

  const totalCost = productEntries.reduce((sum, entry) => sum + entry.price * entry.stockQuantity, 0);
  totalCostEl.textContent = `Total stock value in ${category}: $${totalCost.toFixed(2)}`;

  document.querySelector("#product-list").style.display = "none";
  detailSection.style.display = "block";
}

document.getElementById("back-button").addEventListener("click", () => {
  document.getElementById("product-detail").style.display = "none";
  document.querySelector("#product-list").style.display = "flex";
});
