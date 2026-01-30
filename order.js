function orderOnWhatsApp(itemName, price) {
  const phoneNumber = "916352481742";

  const message = `Hello Waffle Adda 🧇🍫

I want to order:
Item: ${itemName}
Price: ₹${price}`;

  const url =
    "https://wa.me/" +
    phoneNumber +
    "?text=" +
    encodeURIComponent(message);

  window.open(url, "_blank");
}