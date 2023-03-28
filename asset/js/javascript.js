$(document).ready(function () {
    // Keep mode
    var vCurrentMode = window.localStorage.getItem("mode");
    if (vCurrentMode == "night") {
        $(".banner").toggleClass("night");
        $(".skill").toggleClass("night");
        $(".qualification").toggleClass("night");
        $(".project").toggleClass("night");
        $(".footer").toggleClass("night");
        $(".contact").toggleClass("night");
    }
    // change mode
    $(".day-night").on("click", function () {
        $(".banner").toggleClass("night");
        $(".skill").toggleClass("night");
        $(".qualification").toggleClass("night");
        $(".project").toggleClass("night");
        $(".footer").toggleClass("night");
        $(".contact").toggleClass("night");

        var vMode = "light";
        if ($(".banner").hasClass("night")) {
            vMode = "night";
        } else {
            vMode = "light";
        }
        window.localStorage.setItem("mode", vMode);
    });
    // Side menu
    $("#toggle-menu").on("click", function () {
        $(".navbar__sub-menu").toggleClass("active");
    });

    // Typing effects
    let typingText = new Typed("#name", {
        strings: ["Developer", "Chuong"],
        loop: true,
        typeSpeed: 100,
        backSpeed: 60,
        backDelay: 3000,
    });

    // navbar active
    $(document).on("click", ".navbar__link", function () {
        $(".navbar__link").removeClass("active");
        var vNavigateId = $(this).attr("href");
        var vActiveAnchors = $(`a[href$='${vNavigateId}']`).toggleClass(
            "active"
        );
    });
    // Auto scroll blogs
    var vProjectItems = document.querySelectorAll(".project__item");
    var vStransform = 0;
    const vNextItem = setInterval(function () {
        vStransform = vStransform + 100;
        if (vStransform > 200) {
            vStransform = 0;
        }
        for (let i = 0; i < vProjectItems.length; i++) {
            vProjectItems[i].style.transform = `translateX(-${vStransform}%)`;
        }
        vNextItem;
    }, 4000);
    // next project
    $(document).on("click", ".project_next", function () {
        vStransform = vStransform + 100;
        if (vStransform > 200) {
            vStransform = 0;
        }
        for (let i = 0; i < vProjectItems.length; i++) {
            vProjectItems[i].style.transform = `translateX(-${vStransform}%)`;
        }
    });
    $(document).on("click", ".project_prev", function () {
        vStransform = vStransform - 100;
        if (vStransform < 0) {
            vStransform = 200;
        }
        for (let i = 0; i < vProjectItems.length; i++) {
            vProjectItems[i].style.transform = `translateX(-${vStransform}%)`;
        }
    });

    // Scroll reveal
    const vReveal = ScrollReveal({
        origin: "top",
        distance: "80px",
        duration: 2000,
        reset: true,
    });
    vReveal.reveal(".navbar");
    vReveal.reveal(".banner .content");
    vReveal.reveal(".sci", { delay: 500 });
    vReveal.reveal(".skill__header");
    vReveal.reveal(".skill__article", { interval: 400 });
    vReveal.reveal(".qualification__header");
    vReveal.reveal(".quanlitication__title", { delay: 500 });
    vReveal.reveal(".qualification__article", { interval: 400 });
    vReveal.reveal(".project__header");
    vReveal.reveal(".project__list", { delay: 500 });
    vReveal.reveal(".contact__header");
    vReveal.reveal(".contact__phone", { delay: 200 });
    vReveal.reveal(".contact__email", { delay: 500 });
    vReveal.reveal(".footer .column", { interval: 200 });

    // Scrollspy
    $(window).on("scroll", function () {
        const sections = document.querySelectorAll("section");
        sections.forEach(function (section) {
            console.log({ section });
            const sectionTop = section.offsetTop - 70;
            const sectionHeight = section.clientHeight;
            if (
                window.pageYOffset >= sectionTop &&
                window.pageYOffset < sectionTop + sectionHeight
            ) {
                const id = section.getAttribute("id");
                const navLinks = document.querySelectorAll(".navbar a");
                navLinks.forEach(function (link) {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${id}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    });
});
