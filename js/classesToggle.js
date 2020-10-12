const clearClass = (className, elems) => elems.forEach(el => el.classList.remove(className))

// Header nav menu__item_active controller.
const headerNavOnChanged = (e = null) => {
    if(e && e.target.tagName !== "A") return;
    let anchor;
    if(!e) anchor = window.location.href.split("#")[1] || "home";
    else anchor = e.target.innerText.toLowerCase();
    
    let menuItems = document.querySelectorAll(".menu li");
    clearClass("menu__item_active", menuItems)
    menuItems.forEach(nav => nav.getAttribute("anchor") === anchor && nav.classList.add("menu__item_active") )
}

document.querySelector('.menu').addEventListener('click', headerNavOnChanged )
headerNavOnChanged()
// Header nav menu__item_active controller.

// Pricing pricing__actions controller.
const pricingButtonOnChanged = (e) => {
    if(e.target.tagName !== "BUTTON") return;
    let buttons = document.querySelectorAll(".pricing__actions button");
    clearClass("pricing__button_active", buttons);
    e.target.classList.add("pricing__button_active");
    let mounths = e.target.getAttribute("mounths");
    let prices = document.querySelectorAll(".price");

    prices.forEach(p => p.innerText = (parseFloat(p.getAttribute('price')) * mounths).toFixed(2) )
}
document.querySelector('.pricing__actions').addEventListener('click', pricingButtonOnChanged )

// Pricing pricing__actions controller.

// Trusted paginator controller.
const paginatorOnChanged = (e) => {
    let buttons = document.querySelectorAll(".paginator button");
    clearClass("paginator-button__active", buttons);
    e.target.classList.add("paginator-button__active");
}
document.querySelector(".paginator").addEventListener('click', paginatorOnChanged);

// Footer form validator.
let formIsValid = false;

document.querySelector(".footer__input").addEventListener("blur", (e) => {
    let emailValidator = /@[\s\S]*\./;
    let errorMessage = "Некорректная Почта!";
    if(!emailValidator.test(e.target.value)) document.querySelector(".footer__error").innerText = errorMessage
    else document.querySelector(".footer__error").innerText = "";
})

// Footer form validator.

// Footer form 
document.querySelector("form").addEventListener("submit", (e) => {
    console.log(e.preventDefault());
})
// Footer form
