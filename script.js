// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to animation that repeats on scroll use this
        else {
            sec.classList.remove('show-animate');
        }
    });

    // sticky navbar
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}


// Contact form validation
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // prevent default submission

    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const mobile = document.getElementById('mobile');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');

    let isValid = true;

    // Reset borders
    [fullName, email, mobile, subject, message].forEach(field => {
        field.style.border = "1px solid #ccc";
    });

    // Check empty fields
    if (!fullName.value.trim()) { fullName.style.border = "2px solid red"; isValid = false; }
    if (!email.value.trim()) { email.style.border = "2px solid red"; isValid = false; }
    if (!mobile.value.trim()) { mobile.style.border = "2px solid red"; isValid = false; }
    if (!subject.value.trim()) { subject.style.border = "2px solid red"; isValid = false; }
    if (!message.value.trim()) { message.style.border = "2px solid red"; isValid = false; }

    // Validate email
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,}$/i;
    if (!emailPattern.test(email.value)) {
        email.style.border = "2px solid red";
        isValid = false;
    }

    // Validate mobile number (exactly 10 digits)
    const mobilePattern = /^\d{10}$/;
    if (!mobilePattern.test(mobile.value)) {
        mobile.style.border = "2px solid red";
        isValid = false;
    }

    if (isValid) {
        // Prepare mailto link
        const mailtoLink = `mailto:muthupalani1413@gmail.com?subject=${encodeURIComponent(subject.value)}&body=${encodeURIComponent("Name: " + fullName.value + "\nEmail: " + email.value + "\nMobile: " + mobile.value + "\n\nMessage:\n" + message.value)}`;
        window.location.href = mailtoLink;
        alert("Form submitted successfully!");
        contactForm.reset();
    } else {
        alert("Please fill all fields correctly.");
    }
});
