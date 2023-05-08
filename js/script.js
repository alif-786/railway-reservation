let nav = document.querySelector(".navbar")
window.onscroll = function () {
    if (document.documentElement.scrollTop > 100) {
        nav.classList.add("header-scrolled");
    }
    else {
        nav.classList.remove("header-scrolled");
    }
}

// js for the navbar 

let navBar = document.querySelectorAll(".nav-link")
let navcollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (e) {

    e.addEventListener("click", function () {
        navcollapse.classList.remove("show");
    })

});