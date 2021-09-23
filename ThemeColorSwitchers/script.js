// js code to make color-box enable or disble
let colorIcons = document.querySelector(".color-icon");
let icons = document.querySelector(".color-icon .icons");

icons.addEventListener("click", () => {
  colorIcons.classList.toggle("open");
});

// getting all .btn elements
let buttons = document.querySelectorAll(".btn");

for (var button of buttons) {
  button.addEventListener("click", (e) => {
    
    let target = e.target;
    
    let open = document.querySelector(".open");
    if(open) open.classList.remove("open");
    
    document.querySelector(".active").classList.remove("active");
    target.classList.add("active");
    
    // js code to switch colors( also day night mode)
    let root = document.querySelector(":root");
    let dataColor = target.getAttribute("data-color");  // getting data-color value of clicked button
    let color = dataColor.split(" "); // splitting each color form space and make them array
    root.style.setProperty("--white", color[0]);
    root.style.setProperty("--black", color[1]);
    root.style.setProperty("--nav-main", color[2]);
    root.style.setProperty("--switchers-main", color[3]);
    root.style.setProperty("--light-bg", color[4]);

    let iconName = target.className.split(" ")[2];
    let colorText = document.querySelector(".home-content span");

    if (target.classList.contains("fa-moon")) {
      target.classList.replace(iconName, "fa-sun");
      colorIcons.style.display = "none";
      colorText.classList.add("darkMode");
    } else if (target.classList.contains("fa-sun")) {
      target.classList.replace("fa-sun", "fa-moon");
      colorIcons.style.display = "block";
      colorText.classList.remove("darkMode");
      document.querySelector(".btn.blue").click();
    }
  });


}