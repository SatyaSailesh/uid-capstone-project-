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
document.addEventListener('DOMContentLoaded', () => {
  
  const userActivity = {
    Mar: false,
    Apr: true,
    May: false,
    Jun: false,
    Jul: false,
    Aug: false,
    Sep: false,
    Oct: false,
    Nov: false,
    Dec: false,
    Jan: false,
    Feb: false
  };

  // Update the month grid based on user activity
  const months = document.querySelectorAll('.month');
  months.forEach(month => {
    const monthName = month.getAttribute('data-month');
    if (userActivity[monthName]) {
      month.setAttribute('data-active', 'true');
    } else {
      month.setAttribute('data-active', 'false');
    }
  });
});

// Toggle Side Navbar
const menuToggle = document.getElementById('menu-toggle');
const sideNavbar = document.getElementById('side-navbar');
const mainContent = document.getElementById('main-content');

menuToggle.addEventListener('click', () => {
  sideNavbar.classList.toggle('active');
  mainContent.classList.toggle('active');
});

