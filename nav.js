function toggleMenu() {
    const menu = document.querySelector(".menu-links-fulltime-menu-links");
    const icon = document.querySelector(".hamburger-icon-collapsing-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }