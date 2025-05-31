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

    // Enhanced Dropdown Menu with responsive improvements
    const dropdownButton = document.getElementById("dropdown-button");
    const dropdownMenu = document.getElementById("dropdown-menu");

    // Mobile menu toggle with animation fix
    dropdownButton.addEventListener("click", function(e) {
        e.stopPropagation();
        dropdownMenu.classList.toggle("hidden");
        document.body.classList.toggle("menu-open");
        
        // Force reflow to prevent animation glitches
        void dropdownMenu.offsetWidth;
    });

    // Close menu when clicking outside with responsive consideration
    document.addEventListener("click", function(event) {
        if (!event.target.closest("#dropdown-button") && !dropdownMenu.classList.contains("hidden")) {
            dropdownMenu.classList.add("hidden");
            document.body.classList.remove("menu-open");
        }
    });

    // Enhanced resize handler with debounce
    let resizeTimer;
    window.addEventListener("resize", function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            if (window.innerWidth >= 1024) {
                dropdownMenu.classList.add("hidden");
                document.body.classList.remove("menu-open");
            }
            // Reset any inline styles that might interfere
            dropdownMenu.style.left = "";
            dropdownMenu.style.right = "";
        }, 250);
    });

    // Fixed Search Functionality (completely unchanged)
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