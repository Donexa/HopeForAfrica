document.querySelectorAll(".home_nav_toggle, #home_nav_header i, #home_nav_links a").forEach(element => {
    element.onclick = (e) => {
        e.stopPropagation();
        document.getElementById("home_nav").classList.toggle("home_nav_display");
    }
});


// 
const options = { root: null, rootMargin: '0px', threshold: 0.15 };
function callback(entries, observer) {
    entries.every(_ => {
        if (_.intersectionRatio >= options.threshold) {
            _.target.classList.remove("no_vsb");
            _.target.classList.add("vsb");
            observer.unobserve(_.target);
        }
    });
}
const observer = new IntersectionObserver(callback, options);
window.addEventListener("load", () => document.querySelectorAll(".no_vsb").forEach(element => observer.observe(element)));

//
const templates = document.querySelectorAll(".template");
document.querySelectorAll(".home_nav_link").forEach(link => {
    link.onclick = e => {
        e.stopPropagation();
        templates.forEach(template => {
            let link_ = e.target.getAttribute("href").split("#")[1];
            if (template.getAttribute("class").includes(link_)) {
                return template.classList.remove("tpl-ivb");
            };
            template.classList.add("tpl-ivb");
        })
    };
});