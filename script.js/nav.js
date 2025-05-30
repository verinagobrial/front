document.addEventListener('DOMContentLoaded', function() {
    // Navbar scroll effect (unchanged)
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

    // Fixed Dropdown Menu (your original code)
    const dropdownButton = document.getElementById("dropdown-button");
    const dropdownMenu = document.getElementById("dropdown-menu");

    dropdownButton.addEventListener("click", function(e) {
        e.stopPropagation();
        dropdownMenu.classList.toggle("hidden");
        document.body.classList.toggle('menu-open'); // Added for responsive behavior
    });

    document.addEventListener("click", function(event) {
        if (!event.target.closest("#dropdown-button") && !dropdownMenu.classList.contains("hidden")) {
            dropdownMenu.classList.add("hidden");
            document.body.classList.remove('menu-open'); // Added for responsive behavior
        }
    });

    // Close menu on resize if window becomes large (added responsive behavior)
    window.addEventListener('resize', function() {
        if (window.innerWidth >= 1024) {
            dropdownMenu.classList.add("hidden");
            document.body.classList.remove('menu-open');
        }
    });

    // Fixed Search Functionality (your original unchanged code)
    const searchToggle = document.getElementById('searchToggle');
    const searchCard = document.getElementById('searchCard');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const searchResults = document.getElementById('searchResults');

    searchToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        searchCard.classList.toggle('hidden');
    });

    document.addEventListener('click', function(e) {
        if (!searchCard.contains(e.target) && e.target !== searchToggle) {
            searchCard.classList.add('hidden');
        }
    });

    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') performSearch();
    });

    function performSearch() {
        const query = searchInput.value.trim();
        if (!query) {
            searchResults.innerHTML = '<p class="text-gray-500 p-2">Please enter a search term</p>';
            return;
        }
        searchResults.innerHTML = `
            <div class="p-2 hover:bg-gray-100 cursor-pointer">🔍 "${query}" in Historic Sites</div>
            <div class="p-2 hover:bg-gray-100 cursor-pointer">🍽️ "${query}" in Restaurants</div>
            <div class="p-2 hover:bg-gray-100 cursor-pointer">🎭 "${query}" in Cultural Events</div>
        `;
    }
});