// Mobile navigation
function toggleMenu() {
    document.getElementById("navbar").classList.toggle("active");
}

// Close mobile menu after clicking a link
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        document.getElementById("navbar").classList.remove("active");
    });
});

// Animated counters
const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target;
            const target = Number(counter.dataset.target);
            let count = 0;

            const increment = Math.max(1, Math.ceil(target / 100));

            const updateCounter = () => {
                count += increment;

                if (count >= target) {
                    counter.innerText = target + "+";
                } else {
                    counter.innerText = count;
                    requestAnimationFrame(updateCounter);
                }
            };

            updateCounter();
            observer.unobserve(counter);
        }
    });
}, { threshold: 0.5 });

counters.forEach(counter => observer.observe(counter));

// Contact form interaction
document.getElementById("contactForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;

        document.getElementById("response").innerText =
            "Thank you, " + name + "! Your message has been received.";

        this.reset();
    });

