function toggleMenu() { 
    const menu = document.querySelector(".menu-links"); // targets menu links
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open") // whenever we click it we either add or remove the open class in that element (which has styling)
    icon.classList.toggle("open")
}