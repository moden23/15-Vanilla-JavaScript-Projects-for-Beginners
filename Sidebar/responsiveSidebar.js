const navBtn = document.querySelector("#hamburger-btn");
const navigation = document.querySelector(".nav-style");
const closeBtn = document.querySelector("#close-btn");

navBtn.addEventListener("click",function() {
   navigation.classList.toggle("nav-style");
})

closeBtn.addEventListener("click",function() {
    navigation.classList.remove("nav-style");
})