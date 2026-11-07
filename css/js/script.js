// Mobile Navigation Menu

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav");

if (menuButton && navigation) {
    menuButton.addEventListener("click", function () {
        navigation.classList.toggle("show");
    });
}


// Contact Form

const contactForm = document.querySelector("#contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.querySelector("#name").value.trim();

        document.querySelector("#formMessage").textContent =
            "Thank you, " + name +
            "! Your enquiry has been received.";

        contactForm.reset();

    });

}