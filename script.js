"use strict";
const petHeart = document.querySelectorAll(".pet__heart");
for (let el of petHeart) {
  el.addEventListener("click", function () {
    el.classList.toggle("bx-heart");
    el.classList.toggle("pet__heart");
    el.classList.toggle("bxs-heart");
    el.classList.toggle("pet__reed");
  });
}

const productHeart = document.querySelectorAll(".product__heart");
for (let el of productHeart) {
  el.addEventListener("click", function () {
    el.classList.toggle("bx-heart");
    el.classList.toggle("product__heart");
    el.classList.toggle("bxs-heart");
    el.classList.toggle("product__reed");
  });
}
