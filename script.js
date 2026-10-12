
document.addEventListener("DOMContentLoaded", () => {
    // Welcome message in the browser console
    console.log("Welcome to MyPortfolio!");

    // Update the footer year automatically
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Dark mode toggle
    const darkModeButton = document.getElementById("dark-mode-btn");

    if (darkModeButton) {
        darkModeButton.addEventListener("click", () => {
            const isDarkMode = document.body.classList.toggle("dark-mode");

            darkModeButton.textContent = isDarkMode
                ? "☀️ Light Mode"
                : "🌙 Dark Mode";

            darkModeButton.setAttribute(
                "aria-pressed",
                String(isDarkMode)
            );
        });
    }

    // Smooth navigation for internal links
    const internalLinks = document.querySelectorAll(
        'a[href^="#"]'
    );

    internalLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            const targetId = link.getAttribute("href");
            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

                history.replaceState(null, "", targetId);
            }
        });
    });
});
