    // Footer animations (unchanged)
    gsap.from("footer div", {
        scrollTrigger: {
            trigger: "footer",
            start: "top 80%",
            toggleActions: "play none none none"
        },
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8
    });