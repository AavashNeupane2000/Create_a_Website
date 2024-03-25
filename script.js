// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        // Remove blur effect and section highlight from all sections
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('selected', 'blur');
        });

        // Highlight the selected section
        targetSection.classList.add('selected');

        // Add blur effect to other sections
        document.querySelectorAll('.section').forEach(section => {
            if (section !== targetSection) {
                section.classList.add('blur');
            }
        });

        // Scroll to the selected section, accounting for the header height
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetOffset = targetSection.offsetTop - headerHeight;

        window.scrollTo({
            top: targetOffset,
            behavior: 'smooth'
        });
    });
});

// Add event listener to remove blur effect and reset font size when clicking on a section
document.querySelectorAll('.section').forEach(section => {
    section.addEventListener('click', function() {
        document.querySelectorAll('.section').forEach(sec => {
            sec.classList.remove('blur', 'selected');
        });
    });
});

// Add animation effect to header on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
    } else {
        header.classList.remove('header-scrolled');
    }
});

// Add event listener to reset font size when clicking in the body
document.body.addEventListener('click', function(e) {
    const target = e.target;
    if (!target.closest('nav')) {
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('blur', 'selected');
        });
    }
});

// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show scroll to top button when scrolling down
window.addEventListener('scroll', function() {
    var scrollToTopBtn = document.getElementById("scrollToTopBtn");
    if (window.scrollY > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});
