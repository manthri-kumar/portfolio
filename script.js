function toggleMenu() {
  document.querySelector('.mobile-nav').classList.toggle('show');
}

// Close menu when clicking a link
function closeMenu() {
  document.querySelector('.mobile-nav').classList.remove('show');
}

// Close menu when clicking outside (only on small screens)
document.addEventListener('click', function (event) {
  let menu = document.querySelector('.mobile-nav');
  let menuIcon = document.querySelector('.menu-icon');

  if (window.innerWidth <= 768 && !menu.contains(event.target) && !menuIcon.contains(event.target)) {
    menu.classList.remove('show');
  }
});
