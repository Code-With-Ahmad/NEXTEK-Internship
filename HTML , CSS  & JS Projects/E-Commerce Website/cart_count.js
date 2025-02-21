// Cart items count

document.addEventListener("DOMContentLoaded", function () {
  // Fetch cart data from localStorage (assuming cart items were stored with id, name, price, image, and quantity)
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart.length === 0) {
    document.querySelector("#count_cart").style.visibility = "hidden";
  } else {
    document.querySelector("#count_cart").style.visibility = "visible";
    document.querySelector("#count_cart").textContent = cart.length;
  }
});
