import products from "../../products_list.js";

document.addEventListener("DOMContentLoaded", () => {
  const tbody = document.getElementById("tbody");
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  renderCartItems(cart, tbody);
  calculateTotalPrice();

  tbody.addEventListener("click", handleRemoveItem);
  document
    .getElementById("clearCartBtn")
    .addEventListener("click", clearStorage);
});

function renderCartItems(cart, tbody) {
  tbody.innerHTML = "";
  if (cart.length === 0) {
    tbody.innerHTML =
      '<tr><td colspan="6" class="text-center">No items in cart</td></tr>';
    return;
  }
  cart.forEach((item, index) => {
    const product = products.find((p) => p.id === item.id);
    tbody.innerHTML += `
      <tr class="text-center">
        <td><img src="../Images/${
          product.image
        }" alt="" style="width: 50px; height: 50px" /></td>
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td><input type="number" id="numbersss" class="numb w-50 text-center m-auto" value="${
          item.quantity
        }" min="1" max="100"\"/></td>
        <td class="fw-bold"><span class="totalsss">${Math.floor(
          product.price * item.quantity
        )}</span></td>
        <td class="delete-item" data-index="${index}"><i class="fa-solid fa-trash av" style="color: #e9c039"></i></td>
      </tr>
    `;
  });
  document.querySelectorAll(".numb").forEach((input) => {
    input.addEventListener("change", handleQuantityChange);
  });
}

function handleRemoveItem(event) {
  if (event.target.closest(".delete-item")) {
    let index = Number(event.target.closest(".delete-item").dataset.index);
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Item removed from cart");
    location.reload();
  }
}

function calculateTotalPrice() {
  let total_Price = Array.from(document.querySelectorAll(".totalsss"))
    .map((item) => parseInt(item.innerHTML))
    .reduce((acc, val) => acc + val, 0);
  document.querySelectorAll(".tot").forEach((item) => {
    item.innerHTML = `Rs ${total_Price}`;
  });
}

function handleQuantityChange(e) {
  let value = parseInt(e.target.value);

  if (value < 1 || isNaN(value) || value === "") {
    value = 1;
    e.target.value = 1;
    alert("The Value Should be Atleast 1");
  } else if (value > 100) {
    value = 100;
    e.target.value = 100;
    alert("The Value Should be less than 100");
  }
  let price = parseInt(e.target.parentElement.previousElementSibling.innerHTML);
  let totalElem =
    e.target.parentElement.nextElementSibling.querySelector(".totalsss");
  totalElem.innerHTML = value * price;
  calculateTotalPrice();

  let index = parseInt(
    e.target.closest("tr").querySelector(".delete-item").dataset.index
  );
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart[index].quantity = value;
  localStorage.setItem("cart", JSON.stringify(cart));
}
function clearStorage() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart.length === 0) {
    alert("There is no item in the cart. Please do some shopping.");
    window.location.href = "./shop.html";
    return;
  }
  localStorage.removeItem("cart");
  alert("Thanks for shopping. Good bye!");
  location.reload();
}
