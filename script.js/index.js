
   
   
   
   // package offers
    document.getElementById('offerBtn').addEventListener('click', function() {
        const message = document.getElementById('offerMessage');
        if (message.classList.contains('hidden')) {
            message.classList.remove('hidden');
            message.classList.add('animate__animated', 'animate__fadeInUp');
        } else {
            message.classList.add('hidden');
        }
    });

  document.addEventListener('DOMContentLoaded', function() {
        const sliderTrack = document.querySelector('.slider-track');
        // No additional JS needed as we're using CSS animation
    });

document.addEventListener('DOMContentLoaded', function() {
    // Package booking modal functionality (kept but without alerts)
    const packageButtons = document.querySelectorAll('.package-book');
    const bookingModal = document.getElementById('booking-modal');
    const closeModal = document.getElementById('close-modal');
    const packageIdInput = document.getElementById('package-id');
    const packagePriceInput = document.getElementById('package-price');
    const modalTotal = document.getElementById('modal-total');
    
    packageButtons.forEach(button => {
        button.addEventListener('click', function() {
            const packageId = this.getAttribute('data-package');
            const packagePrice = this.getAttribute('data-price');
            
            packageIdInput.value = packageId;
            packagePriceInput.value = packagePrice;
            modalTotal.textContent = `$${packagePrice}`;
            
            bookingModal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        });
    });
    
    closeModal.addEventListener('click', function() {
        bookingModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    });
    
    // Form submission (kept but without alert)
    const bookingForm = document.getElementById('booking-form');
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        // Form would submit here normally
        bookingModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
        this.reset();
    });

    // Initialize date pickers (unchanged)
    const dateInputs = document.querySelectorAll('.datepicker');
    dateInputs.forEach(input => {
        input.addEventListener('focus', function() {
            console.log('Datepicker would open');
        });
    });

    // Scroll reveal animations (unchanged)
    function revealOnScroll() {
        const reveals = document.querySelectorAll('.ph-appear, .sub-title, .find-banner-row');
        const windowHeight = window.innerHeight;

        reveals.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - 100) {
                el.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll);

    // Parallax effect (unchanged)
    window.addEventListener('scroll', () => {
        const title = document.querySelector('.banner-title-parallax');
        if (title) {
            const offset = window.scrollY * 0.3;
            title.style.transform = `translateY(${offset}px)`;
        }
    });

    // GSAP animations (unchanged)
    gsap.from(".hero-title", {duration: 1, y: 50, opacity: 0, ease: "power3.out"});
    gsap.from(".hero-subtitle", {duration: 1, y: 30, opacity: 0, ease: "power3.out", delay: 0.3});

    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".hero-bg", {
        scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            scrub: true
        },
        y: 100,
        scale: 1.1
    });

    // Initialize Swiper
        var swiper = new Swiper(".mySwiper", {
            slidesPerView: 3,
            spaceBetween: 20,
            loop: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 10
                },
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30
                }
            }
        });

   
    // GSAP scroll animations (unchanged)
    gsap.utils.toArray(".destination-item").forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 80%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 50,
            duration: 0.8,
            delay: i * 0.1
        });
    });
});

// for inquire packages

document.addEventListener('DOMContentLoaded', function() {
    const inquireBtn = document.getElementById('inquireBtn');
    const resultsContainer = document.getElementById('resultsContainer');
    const packagesResults = document.getElementById('packagesResults');
    const closeResultsBtn = document.getElementById('closeResults');
    
    // Sample package data (replace with your actual data)
    const packages = [
        {
            id: 1,
            title: "Beach & Relaxation Tour Package",
            destination: "Alexandria",
            minPeople: 2,
            maxPeople: 6,
            startDate: "2025-06-01",
            endDate: "2025-12-31",
            price: "$1,800",
            duration: "5 days",
            details: "Mamoura Beach and San Stefano Beach,Sunset walk on Alexandria’s Corniche,Private boat ride to Abu Qir Bay,Walk along the Corniche,Coastal Villages,Leisure & Departure, Montaza Palace & Gardens,Relax at the beach"
        },
        {
            id: 2,
            title: "Historical & cultural tour Package",
            destination: "Alexandria",
            minPeople: 1,
            maxPeople: 4,
            startDate: "2025-07-15",
            endDate: "2025-11-30",
            price: "$3,500",
            duration: "7 days",
            details: "Alexandria Library (Bibliotheca Alexandrina),the Roman Amphitheater,Qaitbay Citadel,Walk along the Corniche,Pompey’s Pillar,The National Museum of AlexandriaMontaza Palace"
        }
    ];
    
    // Show results when INQUIRE NOW is clicked
    inquireBtn.addEventListener('click', function() {
        const destination = document.getElementById('destination').value.toLowerCase();
        const people = parseInt(document.getElementById('people').value) || 0;
        const checkin = document.getElementById('checkin').value;
        const checkout = document.getElementById('checkout').value;
        
        // Filter packages
        const matchingPackages = packages.filter(pkg => {
            const matchesDestination = pkg.destination.toLowerCase().includes(destination) || destination === '';
            const matchesPeople = people === 0 || (people >= pkg.minPeople && people <= pkg.maxPeople);
            const matchesDates = (!checkin || pkg.startDate <= checkin) && (!checkout || pkg.endDate >= checkout);
            
            return matchesDestination && matchesPeople && matchesDates;
        });
        
        // Display results
        displayResults(matchingPackages);
    });
    
    // Close results when X button is clicked
    closeResultsBtn.addEventListener('click', function() {
        resultsContainer.classList.add('hidden');
    });
    
    function displayResults(packages) {
        packagesResults.innerHTML = '';
        
        if (packages.length === 0) {
            packagesResults.innerHTML = `
                <div class="p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                    <p class="text-yellow-700">No packages found matching your criteria. Please try different search parameters.</p>
                </div>
            `;
        } else {
            packages.forEach(pkg => {
                const packageMessage = `
                    <div class="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
                        <h4 class="font-bold text-lg text-yellow-500">${pkg.title}</h4>
                        <p class="text-gray-700 mt-1">${pkg.duration} • ${pkg.price}</p>
                        <p class="text-gray-600 mt-2">${pkg.details}</p>
                        <button class="mt-3 text-yellow-500 hover:text-yellow-500 font-medium contact-btn" data-id="${pkg.id}">
                            Contact us about this package →
                        </button>
                    </div>
                `;
                packagesResults.insertAdjacentHTML('beforeend', packageMessage);
            });
        }
        
        resultsContainer.classList.remove('hidden');
        resultsContainer.scrollIntoView({ behavior: 'smooth' });
    }

    
    
    // Handle contact button clicks
    packagesResults.addEventListener('click', function(e) {
        if (e.target.classList.contains('contact-btn')) {
            const packageId = e.target.getAttribute('data-id');
            alert(`Contact form for package ${packageId} would appear here`);
            // In real implementation, this would open a contact form/modal
        }
    });
});


   // Image arrays for each slideshow (add your 3 image paths for each)
    const slideshowImages = {
        slideshow1: [
            "content/Antiquities and museums/Qaitbay Fort/1678607223.jpg",
            "photos/lighthouse.jpeg",
            "photos/Pompey’s Pillar In Alexandria And The Intriguing Secrets Below It!.jpeg"
        ],
        slideshow2: [
            "photos/Alexandria Library Egypt.jpeg",
            "photos/Alexandria Opera house.jpeg",
            "photos/11 things to do in Alexandria, Egypt - one is a bit weird!.jpeg"
        ],
        slideshow3: [
            "photos/synagogue.jpeg",
            "photos/st_ mercurius coptic alexandria - Bing.jpeg",
            "photos/274967-مسجد-العطارين-في-الإسكندرية.jpeg"
        ]
    };

    // Initialize all slideshows
    Object.keys(slideshowImages).forEach(slideshowId => {
        let currentIndex = 0;
        const slideshow = document.getElementById(slideshowId);
        
        function changeImage() {
            currentIndex = (currentIndex + 1) % slideshowImages[slideshowId].length;
            const img = slideshow.querySelector('img');
            img.src = slideshowImages[slideshowId][currentIndex];
        }
        
        // Change image every second (1000 milliseconds)
        setInterval(changeImage, 1000);
    });