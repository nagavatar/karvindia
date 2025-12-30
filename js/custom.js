/*
Chartered Accountants - KARV & ASSOCIATES LLP
Professional Services Website - Custom JavaScript
Updated: December 2025
-------------------------------------------------------*/

// Carousel variables
let carouselIndex = 0;
let carouselAutoplay = true;
let carouselSpeed = 3000; // milliseconds
let carouselInterval;

$(document).ready(function() {
    // Initialize carousel
    initCarousel();
    
    // Smooth scroll for navigation links
    $('a[href*="#"]').on('click', function(e) {
        var href = $(this).attr('href');
        if ($(href).length > 0 && href !== '#' && !href.startsWith('#carousel')) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $(href).offset().top - 100
            }, 800, 'swing');
        }
    });

    // Active navigation highlighting
    $(window).on('scroll', function() {
        var scrollPos = $(window).scrollTop();
        
        $('nav.main-nav a').each(function() {
            var refElement = $($(this).attr('href'));
            if (refElement.length > 0) {
                if (refElement.offset().top <= scrollPos && refElement.offset().top + refElement.height() > scrollPos) {
                    $('nav.main-nav a').removeClass('active');
                    $(this).addClass('active');
                } else {
                    $(this).removeClass('active');
                }
            }
        });
    });

    // Login form handling
    function handleLogin() {
        var userId = $('#userId').val();
        var password = $('#password').val();
        
        if (userId === '' || password === '') {
            alert('Please enter both User ID and Password');
            return false;
        }
        
        // Here you can add your login logic
        console.log('Login attempt:', userId);
        alert('Login functionality - redirect to secure portal');
    }
    window.handleLogin = handleLogin;

    // Service box hover effect
    $('.service-box').on('mouseenter', function() {
        $(this).addClass('active');
    }).on('mouseleave', function() {
        $(this).removeClass('active');
    });

    // Mobile menu toggle
    var mobileMenuOpen = false;
    $('.navbar-toggle').on('click', function() {
        mobileMenuOpen = !mobileMenuOpen;
        if (mobileMenuOpen) {
            $('#main-nav').slideDown();
        } else {
            $('#main-nav').slideUp();
        }
    });

    // Animate numbers on page load
    animateCounters();
    
    // Responsive adjustments
    handleResponsive();
    $(window).on('resize', handleResponsive);
});

// Initialize Carousel
function initCarousel() {
    carouselIndex = 0;
    showSlide(carouselIndex);
    startAutoplay();
}

// Show specific slide
function showSlide(n) {
    var slides = document.querySelectorAll('.carousel-slide');
    var indicators = document.querySelectorAll('.indicator');
    
    if (n >= slides.length) {
        carouselIndex = 0;
    }
    if (n < 0) {
        carouselIndex = slides.length - 1;
    }
    
    slides.forEach(slide => slide.classList.remove('active'));
    indicators.forEach(ind => ind.classList.remove('active'));
    
    if (slides.length > 0) {
        slides[carouselIndex].classList.add('active');
        if (indicators.length > 0) {
            indicators[carouselIndex].classList.add('active');
        }
    }
}

// Navigate to current slide
function currentSlide(n) {
    carouselIndex = n - 1;
    showSlide(carouselIndex);
    resetAutoplay();
}

// Next slide
function nextSlide() {
    carouselIndex++;
    showSlide(carouselIndex);
}

// Previous slide
function prevSlide() {
    carouselIndex--;
    showSlide(carouselIndex);
}

// Start autoplay
function startAutoplay() {
    if (carouselAutoplay) {
        if (carouselInterval) {
            clearInterval(carouselInterval);
        }
        carouselInterval = setInterval(nextSlide, carouselSpeed);
    }
}

// Reset autoplay
function resetAutoplay() {
    if (carouselAutoplay) {
        clearInterval(carouselInterval);
        startAutoplay();
    }
}

// Pause carousel
function pauseCarousel() {
    carouselAutoplay = false;
    clearInterval(carouselInterval);
    $('.carousel-pause').hide();
    $('.carousel-play').show();
}
window.pauseCarousel = pauseCarousel;

// Play carousel
function playCarousel() {
    carouselAutoplay = true;
    $('.carousel-play').hide();
    $('.carousel-pause').show();
    startAutoplay();
}
window.playCarousel = playCarousel;

// Increase carousel speed
function increaseSpeed() {
    if (carouselSpeed > 500) {
        carouselSpeed -= 500;
        resetAutoplay();
    }
}
window.increaseSpeed = increaseSpeed;

// Decrease carousel speed
function decreaseSpeed() {
    if (carouselSpeed < 5000) {
        carouselSpeed += 500;
        resetAutoplay();
    }
}
window.decreaseSpeed = decreaseSpeed;

// Animate counter numbers
function animateCounters() {
    var visitors = $('.visitor-count');
    if (visitors.length > 0) {
        var targetCount = 225561;
        var currentCount = 0;
        var increment = targetCount / 100;
        
        var interval = setInterval(function() {
            currentCount += increment;
            if (currentCount >= targetCount) {
                currentCount = targetCount;
                clearInterval(interval);
            }
            visitors.text(currentCount.toFixed(0));
        }, 30);
    }
}

// Handle responsive design elements
function handleResponsive() {
    var windowWidth = $(window).width();
    
    if (windowWidth <= 768) {
        // Mobile adjustments
        $('nav.main-nav .container').css('justify-content', 'center');
    } else {
        // Desktop adjustments
        $('nav.main-nav .container').css('justify-content', 'flex-start');
    }
}

// Page scroll animations
$(window).on('scroll', function() {
    var scrollPos = $(this).scrollTop();
    
    // Fade in elements as they come into view
    $('.service-box, .important-dates, .news-section, .about-section').each(function() {
        var elementTop = $(this).offset().top;
        var elementHeight = $(this).height();
        var windowHeight = $(window).height();
        
        if (scrollPos > elementTop - windowHeight + 100) {
            $(this).addClass('fade-in');
        }
    });
});

// Add fade-in animation class
$(window).load(function() {
    // Trigger animations on page load
    $('.banner').addClass('fade-in');
});

console.log('KARV & ASSOCIATES LLP - Chartered Accountants Professional Services');
