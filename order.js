// order.js

document.addEventListener("DOMContentLoaded", function () {

  const menuItems = document.querySelectorAll(".menu-item");
  const orderBox = document.getElementById("orderBox");

  function updateOrder() {
    let orderText = "";

    menuItems.forEach(item => {
      const checkbox = item.querySelector(".item-check");
      const qtyInput = item.querySelector(".item-qty");

      if (checkbox.checked && qtyInput.value > 0) {
        orderText += `${checkbox.value} x${qtyInput.value}\n`;
      }
    });

    orderBox.value = orderText.trim();
  }

  menuItems.forEach(item => {
    const checkbox = item.querySelector(".item-check");
    const qtyInput = item.querySelector(".item-qty");

    checkbox.addEventListener("change", updateOrder);
    qtyInput.addEventListener("input", updateOrder);
  });

});
