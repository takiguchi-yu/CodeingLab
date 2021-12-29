// getting elements
const nav = document.querySelector("nav")
const toggleBtn = document.querySelector(".toggle-btn")

toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("open")
})

// js code to make draggable nav
function onDrag({movementY}) {
  const navStyle = window.getComputedStyle(nav) // getting all css style of nav
  const navTop = parseInt(navStyle.top) // getting nav top value & convert it number
  const navHeight = parseInt(navStyle.height) // getting nav top value & convert it number
  const windowHeight = window.innerHeight
  
  nav.style.top = navTop > 0 ? `${navTop + movementY}px` : "1px"
  if (navTop > windowHeight - navHeight) {
    nav.style.top = `${windowHeight - navHeight}px`
  }
}
nav.addEventListener("mousedown", () => {
  nav.addEventListener("mousemove", onDrag)
})
nav.addEventListener("mouseup", () => {
  nav.removeEventListener("mousemove", onDrag)
})
nav.addEventListener("mouseleave", () => {
  nav.removeEventListener("mousemove", onDrag)
})