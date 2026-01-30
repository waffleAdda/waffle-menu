document.addEventListener("DOMContentLoaded", function () {
  alert("order.js working");

  const items = document.querySelectorAll(".menu-item");
  const box = document.getElementById("orderBox");

  function update() {
    let text = "";
    items.forEach(i => {
      const c = i.querySelector(".check");
      const q = i.querySelector(".qty");
      if (c.checked && q.value > 0) {
        text += c.value + " x" + q.value + "\n";
      }
    });
    box.value = text;
  }

  items.forEach(i => {
    i.querySelector(".check").addEventListener("change", update);
    i.querySelector(".qty").addEventListener("input", update);
  });
});
