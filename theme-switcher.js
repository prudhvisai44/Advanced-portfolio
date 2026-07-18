// ==========================================
// Theme Switcher
// ==========================================

const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {

        themeButton.textContent = "☀️";

    } else {

        themeButton.textContent = "🌙";

    }

});