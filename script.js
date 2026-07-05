// Custom JavaScript for DT Engineering Webpage with Side-by-Side Layout

document.addEventListener('DOMContentLoaded', function() {
    // Initialize Bootstrap tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form validation feedback
    const forms = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', function(event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });

    // Initialize carousel
    const carouselElement = document.getElementById('slideshow');
    let carouselInterval;
    let isPaused = false;

    // Function to start carousel
    function startCarousel() {
        if (!carouselInterval && !isPaused) {
            carouselInterval = setInterval(() => {
                const carousel = bootstrap.Carousel.getInstance(carouselElement);
                if (carousel) {
                    carousel.next();
                }
            }, 6000);
        }
    }

    // Function to stop carousel
    function stopCarousel() {
        if (carouselInterval) {
            clearInterval(carouselInterval);
            carouselInterval = null;
        }
    }

    // Start carousel initially
    startCarousel();

    // Stop carousel when form is in focus (e.g., user is typing)
    document.querySelectorAll('input, textarea, select').forEach(input => {
        input.addEventListener('focus', () => {
            isPaused = true;
            stopCarousel();
        });
        input.addEventListener('blur', () => {
            isPaused = false;
            startCarousel();
        });
    });

    // Animate forms and phrases on slide change
    carouselElement.addEventListener('slid.bs.carousel', function(event) {
        const activeSlide = event.relatedTarget;
        
        // Animate the form
        const formCard = activeSlide.querySelector('.animated-form');
        const formAnimation = formCard.classList.contains('fade-in') ? 'fadeIn' :
                              formCard.classList.contains('slide-in') ? 'slideIn' : 'bounceIn';
        
        // Reset and reapply animation
        formCard.style.animation = 'none';
        void formCard.offsetWidth; // Trigger reflow
        formCard.style.animation = `${formAnimation} 1s ease-in-out forwards`;

        // Animate the phrase
        const phrase = activeSlide.querySelector('.animated-phrase');
        const phraseAnimation = phrase.classList.contains('slide-up') ? 'slideUp' :
                                phrase.classList.contains('fade-in') ? 'fadeInPhrase' : 'driftIn';
        
        phrase.style.animation = 'none';
        void phrase.offsetWidth; // Trigger reflow
        phrase.style.animation = `${phraseAnimation} 1.5s ease-in-out forwards`;
    });

    // Trigger initial animations for the first slide
    const firstSlide = carouselElement.querySelector('.carousel-item.active');
    if (firstSlide) {
        const firstForm = firstSlide.querySelector('.animated-form');
        const firstPhrase = firstSlide.querySelector('.animated-phrase');
        
        // Reset and apply animations
        firstForm.style.animation = 'none';
        void firstForm.offsetWidth;
        firstForm.style.animation = 'fadeIn 1s ease-in-out forwards';

        firstPhrase.style.animation = 'none';
        void firstPhrase.offsetWidth;
        firstPhrase.style.animation = 'slideUp 1.5s ease-out forwards';
    }

    // Font Awesome icon hover effects
    document.querySelectorAll('.fas').forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2)';
            this.style.transition = 'transform 0.3s ease';
        });
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Log for debugging
    console.log('DT Engineering Webpage JavaScript loaded successfully');
});