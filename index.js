//smooth scroll for buttons
/*document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelector(".cta").scrollIntoView({ behavior: "smooth" });
    });
});*/

//scroll all cta buttons to contact form
const scrollButtons = document.querySelectorAll(".btn-scroll");
const contactSection = document.querySelector("#contact");

scrollButtons.forEach(button => {
    button.addEventListener("click", () => {
        contactSection.scrollIntoView({ behavior: "smooth" });
    }); 
});


//handle form submission
const form = document.querySelector(".contact form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Message sent! We'll get back to you .");
    form.reset();
}); 



//reveal sections on scroll
const sections = document.querySelectorAll("section");
const revealSection = () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight - 100; // 100px before the section comes into view
        if (sectionTop < triggerPoint) {
            section.classList.add("visible");
        }
    });
};

window.addEventListener("scroll", revealSection);

//initial call to reveal sections that are already in view
revealSection();