document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("mouseover", function() {
            link.style.color = "#00fff7";
            const span = link.querySelector("span");
            span.style.transform = "scale(1) translateY(0)";
            span.style.opacity = "1";
        });

         link.addEventListener("mouseout", function() {
            link.style.color = "#fff";
            const span = link.querySelector("span");
            span.style.transform = "scale(0) translateY(50px)";
            span.style.opacity = "0";
        });
    });

 
    const button = document.querySelector(".button");

    button.addEventListener("mouseover", function() {
        button.style.color = "black";
        button.style.backgroundColor = "#fff";
    });

    button.addEventListener("mouseout", function() {
        button.style.color = "#fff";
        button.style.backgroundColor = "#19244a";
    });
});
