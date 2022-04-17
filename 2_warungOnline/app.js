const cartButton = document.querySelector(".cart-button");
const cartPage = document.querySelector("#cart-page");

cartButton.addEventListener("click", function () {
    cartPage.classList.toggle('active');
})