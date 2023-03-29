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
    // $(document).on("click", ".navbar__link", function () {
    //     $(".navbar__link").removeClass("active");
    //     var vNavigateId = $(this).attr("href");
    //     var vActiveAnchors = $(`a[href$='${vNavigateId}']`).toggleClass(
    //         "active"
    //     );
    // });
    // Auto scroll blogs
    const vNextItem = setInterval(function () {
        let vFirstProject = document.querySelector(".project__item");
        var vNewProject = vFirstProject.cloneNode(true);
        let vProjectContainer = document.querySelector(".project__list");
        vProjectContainer.append(vNewProject);

        setTimeout(function () {
            vFirstProject.style.width = "0";
            vFirstProject.style.padding = "0";
            vFirstProject.style.height = "200px";
        }, 100);

        setTimeout(function () {
            vFirstProject.remove();
        }, 600);
        vNextItem;
    }, 4000);
    // next project
    $(document).on("click", ".project_next", function () {
        clearInterval(vNextItem);
        let vFirstProject = document.querySelector(".project__item");
        var vNewProject = vFirstProject.cloneNode(true);
        let vProjectContainer = document.querySelector(".project__list");
        vProjectContainer.append(vNewProject);

        setTimeout(function () {
            vFirstProject.style.width = "0";
            vFirstProject.style.padding = "0";
            vFirstProject.style.height = "200px";
        }, 100);

        setTimeout(function () {
            vFirstProject.remove();
        }, 500);
    });
    $(document).on("click", ".project_prev", function () {
        clearInterval(vNextItem);
        let vAllProject = document.querySelectorAll(".project__item");
        let vLength = vAllProject.length;
        let vLastProject = vAllProject[vLength - 1];
        var vNewProject = vLastProject.cloneNode(true);
        let vProjectContainer = document.querySelector(".project__list");
        var vWidth = vNewProject.style.width;
        vNewProject.style.width = "0";
        vNewProject.style.padding = "0";
        vNewProject.style.height = "200px";
        vProjectContainer.prepend(vNewProject);
        setTimeout(function () {
            vNewProject.style.width = vWidth;
            vNewProject.style.padding = "5px";
            vNewProject.style.height = "100%";
        }, 100);
        vLastProject.remove();
    });

    // Scroll reveal
    const vReveal = ScrollReveal({
        origin: "top",
        distance: "80px",
        duration: 2000,
        reset: true,
    });
    vReveal.reveal(".navbar");
    vReveal.reveal(".banner .hero__content");
    vReveal.reveal(".hero__sci", { delay: 500 });
    vReveal.reveal(".skill__header");
    vReveal.reveal(".skill__article", { interval: 200 });
    vReveal.reveal(".qualification__header");
    vReveal.reveal(".quanlitication__title", { delay: 200 });
    vReveal.reveal(".qualification__article", { interval: 200 });
    vReveal.reveal(".project__header");
    vReveal.reveal(".project__list", { delay: 500 });
    vReveal.reveal(".contact__header");
    vReveal.reveal(".contact__phone", { delay: 200 });
    vReveal.reveal(".contact__email", { delay: 500 });
    vReveal.reveal(".footer .column", { interval: 200 });

    // Scrollspy
    $(window).on("scroll", function () {
        const sections = document.querySelectorAll(".scroll");
        sections.forEach(function (section) {
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
