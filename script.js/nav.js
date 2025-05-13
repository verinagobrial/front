  // nav.js - Navigation specific JavaScript
  document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    const scrollThreshold = 50;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > scrollThreshold) {
            gsap.to(navbar, {
                backgroundColor: '#326964',
                backdropFilter: 'blur(10px)',
                duration: 0.3
            });
        } else {
            gsap.to(navbar, {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                duration: 0.3
            });
        }
    });

    // Dropdown menu functionality
    const dropdownButton = document.getElementById("dropdown-button");
    const dropdownMenu = document.getElementById("dropdown-menu");

    if (dropdownButton && dropdownMenu) {
        dropdownButton.addEventListener("click", function (e) {
            e.stopPropagation();
            dropdownMenu.classList.toggle("hidden");
        });

        document.addEventListener("click", function (event) {
            if (!event.target.closest("#dropdown-button") && !dropdownMenu.classList.contains("hidden")) {
                dropdownMenu.classList.add("hidden");
            }
        });
    }

    

    // Search bar functionality
    // const searchIcon = document.querySelector(".search-icon");
    // const searchBox = document.querySelector(".search-box");

    // if (searchIcon && searchBox) {
    //     searchIcon.addEventListener("click", function (e) {
    //         e.stopPropagation();
    //         searchBox.classList.toggle("w-0");
    //         searchBox.classList.toggle("opacity-0");
    //         searchBox.classList.toggle("w-40");
    //         searchBox.classList.toggle("opacity-100");
    //         searchBox.focus();
    //     });

    //     document.addEventListener("click", function (e) {
    //         if (!e.target.closest('.search-container')) {
    //             searchBox.classList.add("w-0", "opacity-0");
    //             searchBox.classList.remove("w-40", "opacity-100");
    //         }
    //     });
    // }

    // for search icon
  // DOM Elements
  const searchToggle = document.getElementById('searchToggle');
  const searchCard = document.getElementById('searchCard');
  const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');
  const searchResults = document.getElementById('searchResults');

  // Toggle Search Card
  searchToggle.addEventListener('click', function(e) {
      e.stopPropagation(); // Prevent immediate closing
      searchCard.classList.toggle('hidden');
  });

  // Close when clicking outside
  document.addEventListener('click', function(e) {
      if (!searchCard.contains(e.target) && e.target !== searchToggle) {
          searchCard.classList.add('hidden');
      }
  });

  // Search Functionality
  searchButton.addEventListener('click', performSearch);
  
  // Search on Enter key
  searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
          performSearch();
      }
  });

  function performSearch() {
      const query = searchInput.value.trim();
      
      if (!query) {
          searchResults.innerHTML = '<p class="text-gray-500 p-2">Please enter a search term</p>';
          return;
      }
      
      // Simulate search results (replace with real API call)
      searchResults.innerHTML = `
          <div class="p-2 hover:bg-gray-100 cursor-pointer">🔍 "${query}" in Historic Sites</div>
          <div class="p-2 hover:bg-gray-100 cursor-pointer">🍽️ "${query}" in Restaurants</div>
          <div class="p-2 hover:bg-gray-100 cursor-pointer">🎭 "${query}" in Cultural Events</div>
      `;
  }
});
