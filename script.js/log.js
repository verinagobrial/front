console.log('Script loaded successfully'); // Debugging check

document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector('.container');
    const registerBtn = document.querySelector('.register-btn');
    const loginBtn = document.querySelector('.login-btn');

    if (registerBtn && loginBtn && container) {
        registerBtn.addEventListener('click', () => { 
            container.classList.add('active');
        });

        loginBtn.addEventListener('click', () => { 
            container.classList.remove('active');
        });
    }

    // Fixed Dropdown Menu beside "Alexplore"
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

    // Fixed Search Bar animation
    const searchIcon = document.querySelector(".search-icon");
    const searchBox = document.querySelector(".search-box");

    if (searchIcon && searchBox) {
        searchIcon.addEventListener("click", function (e) {
            e.stopPropagation();
            searchBox.classList.toggle("w-0");
            searchBox.classList.toggle("opacity-0");
            searchBox.classList.toggle("w-40");
            searchBox.classList.toggle("opacity-100");
            searchBox.focus();
        });

        document.addEventListener("click", function (e) {
            if (!e.target.closest('.search-container')) {
                searchBox.classList.add("w-0", "opacity-0");
                searchBox.classList.remove("w-40", "opacity-100");
            }
        });
    }

    // Navbar scroll effect
    let navbar = document.getElementById("navbar");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("bg-blue-500", "shadow-md");
            navbar.classList.remove("bg-white/10");
        } else {
            navbar.classList.remove("bg-blue-500", "shadow-md");
            navbar.classList.add("bg-white/10");
        }
    });
});

  