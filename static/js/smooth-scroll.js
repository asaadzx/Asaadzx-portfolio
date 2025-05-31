
// smooth-scroll.js - Handles smooth scrolling behavior across the website
document.addEventListener('DOMContentLoaded', () => {
  // Select all links with hash (#) that point to elements on the page
  const scrollLinks = document.querySelectorAll('a[href^="#"]');
  
  // Add click event listener to each anchor link
  scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Prevent default anchor click behavior
      e.preventDefault();
      
      // Get the target element from the href attribute
      const targetId = this.getAttribute('href');
      
      // Only process if the href is not just "#" (which would scroll to top)
      if (targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          // Smooth scroll to the target element
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      } else {
        // If href is just "#", scroll to top smoothly
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    });
  });
});
