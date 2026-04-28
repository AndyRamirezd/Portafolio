window.onload = function() {
    const enlaces = document.querySelectorAll("a");

    enlaces.forEach((link, index) => {
        link.style.opacity = "0";
        link.style.transform = "translateY(20px)";

        setTimeout(() => {
            link.style.transition = "all 0.5s ease";
            link.style.opacity = "1";
            link.style.transform = "translateY(0)";
        }, index * 200);
    });
};
