/*
    ---------------------------------------------------------------------
    Himanshu Kushwaha Professional Portfolio - JavaScript
    
    Adds smooth scrolling and header interactivity for a better UX.
    ---------------------------------------------------------------------
*/

document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Prevent default anchor click behavior
            e.preventDefault();

            // Get the target element
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Scroll to the target element smoothly
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Add a simple fade-in effect to the body on load
    // (This works well with the luxury, minimal aesthetic)
    const body = document.body;
    body.style.opacity = 0;
    
    // Fade in after a short delay
    setTimeout(() => {
        body.style.transition = 'opacity 1s ease-in-out';
        body.style.opacity = 1;
    }, 100);

    // 3. Simple Header Class Change (Optional: Uncomment and use a custom CSS class if needed)
    /* const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled'); // Add a class for background change/shadow
        } else {
            header.classList.remove('scrolled');
        }
    });
    */
});