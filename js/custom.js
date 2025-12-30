/*
Chartered Accountants - KARV & ASSOCIATES LLP
Professional Services Website - Custom JavaScript
Updated: December 2025
-------------------------------------------------------*/

$(document).ready(function() {
    // Smooth scroll for navigation links
    $('a[href*="#"]').on('click', function(e) {
        var href = $(this).attr('href');
        if ($(href).length > 0) {
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
    $('.login-section button').on('click', function() {
        var userId = $('.login-section input[type="text"]').val();
        var password = $('.login-section input[type="password"]').val();
        
        if (userId === '' || password === '') {
            alert('Please enter both User ID and Password');
            return false;
        }
        
        // Here you can add your login logic
        console.log('Login attempt:', userId);
    });

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
