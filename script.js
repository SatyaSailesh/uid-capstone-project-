// Toggle Profile Dropdown
const userProfile = document.getElementById('user-profile');
const profileDropdown = document.getElementById('profile-dropdown');

userProfile.addEventListener('click', () => {
  profileDropdown.classList.toggle('active');
});

// Close dropdown when clicking outside
document.addEventListener('click', (event) => {
  if (!userProfile.contains(event.target)) {
    profileDropdown.classList.remove('active');
  }
});

// Toggle Side Navbar
const menuToggle = document.getElementById('menu-toggle');
const sideNavbar = document.getElementById('side-navbar');
const mainContent = document.getElementById('main-content');

menuToggle.addEventListener('click', () => {
  sideNavbar.classList.toggle('active');
  mainContent.classList.toggle('active');
});

// Loading Animation
window.addEventListener('load', () => {
  document.querySelector('.loader').style.display = 'none';
});
