  // Cierra el menú móvil al hacer clic en un enlace
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        console.log('detect click');
        document.querySelector('.nav-links').classList.remove('open');
      });
    });
  })

  // Scrollspy: resalta el enlace activo según el scroll
  const sections = document.querySelectorAll("section[id]");
  const navItems = document.querySelectorAll(".nav-links a");

  window.addEventListener("scroll", () => {
    let current = "";
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navItems.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

window.addEventListener('scroll', function () {
  const hero = document.querySelector('.hero');
  hero.style.opacity = 1 - window.scrollY / 500;
});
