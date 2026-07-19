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
// ==========================================
// Scroll to Top Button
// ==========================================

const scrollButton = document.getElementById("scrollTopBtn");

window.onscroll = function () {

    if (document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300) {

        scrollButton.style.display = "block";

    } else {

        scrollButton.style.display = "none";

    }

};

scrollButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});