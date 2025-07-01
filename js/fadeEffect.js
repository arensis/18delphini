document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', function () {
    const banner = document.querySelector('.banner');
    banner.style.opacity = 1 - window.scrollY / 500;
  });
});

