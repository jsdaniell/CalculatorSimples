let body = document.querySelector('body');

const theme = window.localStorage.getItem("theme");

if (theme === "dark") {
    body.classList.add("dark");
    body.classList.remove("light");
}