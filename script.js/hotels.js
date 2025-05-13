document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('[style*="background-image"]');
    
    sections.forEach(section => {
      // Add group class for hover states
      section.classList.add('group');
      
      section.addEventListener('mouseenter', function() {
        sections.forEach(s => {
          if (s !== section) {
            s.style.filter = 'brightness(70%)';
          } else {
            s.style.transform = 'scale(1.03)';
          }
        });
      });

      section.addEventListener('mouseleave', function() {
        sections.forEach(s => {
          s.style.filter = 'brightness(100%)';
          s.style.transform = 'scale(1)';
        });
      });
    });

    // Parallax effect
    window.addEventListener('scroll', function() {
      const scrollPosition = window.pageYOffset;
      const containers = document.querySelectorAll('.photo-container');
      containers.forEach((container, index) => {
        container.style.transform = `translateY(${scrollPosition * 0.1 * (index + 1)}px)`;
      });
    });
  });