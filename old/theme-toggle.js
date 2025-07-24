document.addEventListener("DOMContentLoaded", () => {
    const root = document.documentElement;
    const themeToggle = document.getElementById("theme-toggle");

    if (themeToggle) {
        themeToggle.style.display = "block";
    }
    themeToggle.classList.add("light"); // Initial theme class

    function setTheme(theme) {
        if (theme === "light") {
            themeToggle.classList.remove("light");
            themeToggle.classList.add("dark");
            root.style.setProperty('--primary-color', '#181a1b');
            root.style.setProperty('--secondary-color', '#141414');
            root.style.setProperty('--tertiary-color', '#0d1117');
            root.style.setProperty('--contrast-color', '#BF9B30');
            root.style.setProperty('--text-color', '#ffffffff');
            root.style.setProperty('--text-color-contrast', '#0d1117');
        } else if (theme === "dark") {
            themeToggle.classList.remove("dark");
            themeToggle.classList.add("light");
            root.style.setProperty('--primary-color', '#fdf9ee');
            root.style.setProperty('--secondary-color', '#f0ece0')
            root.style.setProperty('--tertiary-color', '#ebe3d6');
            root.style.setProperty('--contrast-color', '#332a25');
            root.style.setProperty('--text-color', '#332a25');
            root.style.setProperty('--text-color-contrast', '#fdf9ee');
        }

        localStorage.setItem("theme", theme);
    }

    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);

    themeToggle.addEventListener("click", () => {
        const currentTheme = localStorage.getItem("theme" || "light");
        const newTheme = currentTheme === "light" ? "dark" : "light";
        setTheme(newTheme);
    });
});