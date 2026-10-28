// JAVASCRIPT //

let input = document.getElementById("user-value");
let cart = document.getElementById("cart");
let button = document.getElementById("task-btn");

button.addEventListener("click" , function () {

    let items = document.createElement("li");
    items.textContent = input.value;
    cart.appendChild(items);
    input.value = ""

    items.style.fontSize = "1.2rem";

    let cross = document.createElement("i");
    cross.className = "fa-solid fa-trash";
    items.appendChild(cross);
    cross.style.cursor = "pointer";

    cross.addEventListener("click" , function () {

        items.remove();

    });

});// JAVASCRIPT //

let input1 = document.getElementById("user-value");
let cart1 = document.getElementById("cart");
let button1 = document.getElementById("task-btn");

button1.addEventListener("click" , function () {

    let items = document.createElement("li");
    items.textContent = input1.value;
    cart1.appendChild(items);
    input1.value = ""

    items.style.fontSize = "1.2rem";

    let cross = document.createElement("i");
    cross.className = "fa-solid fa-trash";
    items.appendChild(cross);
    cross.style.cursor = "pointer";

    cross.addEventListener("click" , function () {

        items.remove();

    });

});