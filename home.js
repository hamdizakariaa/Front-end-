document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.querySelector('#mobile i.fa-bars');
    const navbar = document.querySelector('#navbar');
    const closeButton = document.querySelector('#close');
  
    mobileMenuButton.addEventListener('click', function() {
      navbar.classList.toggle('active');
    });
  
    closeButton.addEventListener('click', function() {
      navbar.classList.remove('active');
    });
  });
  
// ------------------------


