const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarLinks = document.querySelector('.navbar-links');

  // add the 'show' class to navbarLinks by default
  navbarLinks.classList.add('show');

  navbarToggler.addEventListener('click', () => {
    navbarLinks.classList.toggle('show');
  });
  

