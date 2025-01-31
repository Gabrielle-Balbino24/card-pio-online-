document.addEventListener("DOMContentLoaded", () => {
  const cart = [];

  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", (event) => {
      const card = event.target.closest(".card");
      const itemName = card.querySelector("h3").textContent;
      const itemPrice = card.querySelector("span").textContent;

      cart.push({ name: itemName, price: itemPrice });
      alert(`${itemName} foi adicionado ao carrinho!`);
      console.log(cart);
    });
  });
});
