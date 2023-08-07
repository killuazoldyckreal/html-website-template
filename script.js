document.addEventListener('DOMContentLoaded', function() {
  // Select all anchor links starting with '#'
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  
  // Attach click event listener to each anchor link
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Get the target element's ID from the link's href attribute
      const targetId = this.getAttribute('href').substring(1);
      
      // Scroll smoothly to the target element
      document.getElementById(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Toggle mobile menu
  document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('active');
  });
});
