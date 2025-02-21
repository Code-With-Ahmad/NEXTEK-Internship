import products from "../../products_list.js";

function redirectToProduct(productId) {
  window.location.href = `../Components/Product.html?id=${productId}`;
}

const container = document.getElementById("main_container");
container.innerHTML = ""; // Clear existing content

products.forEach((product) => {
  const productHTML = `
    <div class="d-flex flex-column justify-content-center " id="product-${
      product.id
    }">
      <div class="text-center">
        <img class="img-fluid object-fit-contain" style="height:250px" src="${
          product.image
        }" alt="${product.name}" width="200px">
      </div>
      <p class="text-start">${product.name}</p>
      <h5 class="text-start">Rs ${product.price.toLocaleString()}</h5>
    </div>
  `;

  // Create product div from HTML
  const productElement = document.createElement("div");
  productElement.classList.add("col-md-3");
  productElement.innerHTML = productHTML;

  // Attach event listener for the product
  productElement
    .querySelector(`#product-${product.id}`)
    .addEventListener("click", () => {
      redirectToProduct(product.id);
    });

  // Append product to the container
  container.appendChild(productElement);
});
