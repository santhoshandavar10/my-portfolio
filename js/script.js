// ====== Toggle Hamburger Menu ======
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// ====== Toggle Between Fullstack and Cybersecurity Mode ======
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const favicon = document.getElementById('dynamic-favicon');

// Set initial state
body.classList.add('cybersecurity-mode');
themeToggle.textContent = 'Switch to Fullstack Mode';
favicon.href = "favicon-cyber.png"; // Set correct favicon at start

themeToggle.addEventListener('click', () => {
  if (body.classList.contains('cybersecurity-mode')) {
    // Switch to Fullstack Mode
    body.classList.remove('cybersecurity-mode');
    body.classList.add('fullstack-mode');
    themeToggle.textContent = 'Switch to Cybersecurity Mode';
    favicon.href = "favicon-fullstack.png"; // Change favicon
  } else {
    // Switch back to Cybersecurity Mode
    body.classList.remove('fullstack-mode');
    body.classList.add('cybersecurity-mode');
    themeToggle.textContent = 'Switch to Fullstack Mode';
    favicon.href = "favicon-cyber.png"; // Change favicon
  }
});

// ====== Scroll Reveal Navbar ======
let lastScrollTop = 0;
const navbar = document.getElementById('desktop-nav');

window.addEventListener('scroll', function () {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;
  
  if (scrollTop > lastScrollTop) {
    // Scrolling down
    navbar.style.top = "-100px"; /* hide navbar */
  } else {
    // Scrolling up
    navbar.style.top = "0"; /* show navbar */
  }
  
  lastScrollTop = scrollTop;
});
