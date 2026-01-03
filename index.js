//smooth scroll for buttons
/*document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        document.querySelector(".cta").scrollIntoView({ behavior: "smooth" });
    });
});*/

//scroll all cta buttons to contact form
document.addEventListener("DOMContentLoaded", () => {

  // Scroll all CTA buttons to contact section
  const scrollButtons = document.querySelectorAll(".btn-scroll");
  const contactSection = document.querySelector(".contact");

  if (contactSection) {
    scrollButtons.forEach(button => {
      button.addEventListener("click", () => {
        contactSection.scrollIntoView({
          behavior: "smooth"
        });
      });
    });
  } else {
    console.error("Contact section not found");
  }

  // Handle contact form submission
  const form = document.querySelector(".contact form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Message sent! We'll get back to you.");
      form.reset();
    });
  }

  // Reveal sections on scroll
  const sections = document.querySelectorAll("section");

  const revealSection = () => {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight - 100;

      if (sectionTop < triggerPoint) {
        section.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", revealSection);
  revealSection();

});