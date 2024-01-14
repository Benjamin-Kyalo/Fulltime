function toggleMenu() {
    const menu = document.querySelector(".fulltime-menu-links");
    const icon = document.querySelector(".collapsing-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }