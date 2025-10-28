document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("main-nav");
  const icon = document.getElementById("menu-icon");

  if (!menuToggle || !nav || !icon) {
    console.error("Error: no se encontraron los elementos necesarios (#menu-toggle, #main-nav o #menu-icon).");
    return;
  }

  // Alternar apertura/cierre del menú
  menuToggle.addEventListener("click", () => {
    const abierto = nav.classList.toggle("open");

    if (abierto) {
      icon.src = "Images/menu.png";
      icon.alt = "Cerrar menú";
      menuToggle.setAttribute("aria-expanded", "true");
    } else {
      icon.src = "Images/menu.png";
      icon.alt = "Abrir menú";
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });

  // Cerrar el menú al hacer clic en un enlace (en móvil)
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        nav.classList.remove("open");
        icon.src = "Images/menu.png";
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  });
});


