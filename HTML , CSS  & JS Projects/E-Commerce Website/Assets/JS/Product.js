import products from "../../products_list.js";

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get("id"));

  const selectedProduct = products.find((product) => product.id === productId);

  if (selectedProduct) {
    const productImages = document.querySelectorAll(".product-image");
    const mainProductImage = document.querySelector(".main-product-image");

    productImages.forEach((img) => {
      img.src = selectedProduct.image;
    });
    mainProductImage.src = selectedProduct.image;

    const productName = document.querySelectorAll(".product-name");
    const productPrice = document.querySelector(".product-price");

    productName.forEach((item) => {
      item.textContent = selectedProduct.name;
    });
    productPrice.textContent = `Rs ${selectedProduct.price.toLocaleString()}.00`;

    const starsContainer = document.getElementById("stars");
    const reviewCount = document.getElementById("review-count");
    const reviewCounts = document.getElementById("review-counts");
    const description = document.getElementById("descr");
    const tags = document.getElementById("tags");
    const serialNumber = document.getElementById("serialNumber");
    const category = document.getElementById("category");

    let starsHtml = "";
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(selectedProduct.stars)) {
        starsHtml += '<i class="fa-solid fa-star"></i>';
      } else if (i - 0.5 === selectedProduct.stars) {
        starsHtml += '<i class="fa-regular fa-star-half-stroke"></i>';
      } else {
        starsHtml += '<i class="fa-regular fa-star"></i>';
      }
    }

    starsContainer.innerHTML = starsHtml;
    reviewCount.textContent = ` ${selectedProduct.reviews} `;
    reviewCounts.textContent = ` ${selectedProduct.reviews} `;
    description.textContent = ` ${selectedProduct.description} `;
    tags.textContent = ` Tags : ${selectedProduct.tags} `;
    serialNumber.textContent = ` Serial Number  : ${selectedProduct.serialNumber} `;
    category.textContent = ` Category : ${selectedProduct.category} `;
  }

  // Handle the Add to Cart functionality
  const addToCartButton = document.getElementById("addToCart");

  addToCartButton.addEventListener("click", function () {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find((item) => item.id === productId);

    if (existingProduct) {
      existingProduct.quantity = Number(existingProduct.quantity) + 1;
      // Increment quantity if the product is already in the cart
    } else {
      cart.push({ id: productId, quantity: 1 }); // Add new product with quantity 1
    }

    // Save updated cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product added to cart!");
    location.reload(); // Reload page to reflect change
  });

  let randomProductIds = [];
  while (randomProductIds.length < 4) {
    let randomId = Math.floor(Math.random() * products.length) + 1;
    if (!randomProductIds.includes(randomId) && randomId !== productId) {
      randomProductIds.push(randomId);
    }
  }

  const relatedProductsContainer = document.getElementById("related-products");
  randomProductIds.forEach((id) => {
    const product = products.find((p) => p.id === id);
    if (product) {
      const productHtml = `
                <div class="col-md-3 px-4">
                    <a href="Product.html?id=${
                      product.id
                    }" class="related-product">
                        <img src="${product.image}" alt="${
        product.name
      }" style="width:100% ; height: 250px ; object-fit : contain" />
                        <p class="text-black text-center text-lg-start">${
                          product.name
                        }</p>
                        <h5 class="text-black text-center text-lg-start">Rs ${product.price.toLocaleString()}.00</h5>
                    </a>
                </div>
            `;
      relatedProductsContainer.innerHTML += productHtml;
    }
  });
});
