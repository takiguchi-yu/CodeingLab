// Side Navigation Menu JS Code
let menuBtn = document.querySelector(".menu-btn")
let cancelBtn = document.querySelector(".cancel-btn")
let navBar = document.querySelector(".navbar")

menuBtn.onclick = () => {
  menuBtn.style.opacity = "0"
  menuBtn.style.pointerEvents = "none"
  navBar.classList.add("active")
}

cancelBtn.onclick = () => {
  menuBtn.style.opacity = "1"
  menuBtn.style.pointerEvents = "auto"
  navBar.classList.remove("active")
}

// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav")
let scrollBtn = document.querySelector(".scroll-button a")
let val;
window.onscroll = () => {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky")
    scrollBtn.style.display = "block"
  } else {
    nav.classList.remove("sticky")
    scrollBtn.style.display = "none"
  }
}
