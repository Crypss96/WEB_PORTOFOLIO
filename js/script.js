// Menu sederhana untuk tampilan HP.
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");

if (menuButton && navigation) {
    menuButton.addEventListener("click", function () {
        navigation.classList.toggle("show-menu");
        const menuTerbuka = navigation.classList.contains("show-menu");
        menuButton.setAttribute("aria-expanded", menuTerbuka);
    });
}
