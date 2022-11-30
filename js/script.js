
document.querySelectorAll(".home_nav_toggle, #home_nav_header i").forEach(element => {
    element.onclick = (e) => {
        e.stopPropagation();
        const nav = document.getElementById("home_nav");
        document.getElementById("home_nav").classList.toggle("home_nav_display");
    }
});
