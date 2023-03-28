$(document).ready(function () {
    var vCurrentMode = window.localStorage.getItem("mode");
    if (vCurrentMode == "night") {
        $(".banner").toggleClass("night");
        $(".skill").toggleClass("night");
        $(".qualification").toggleClass("night");
        $(".project").toggleClass("night");
        $(".footer").toggleClass("night");
        $(".contact").toggleClass("night");
    }
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
    $("#toggle-menu").on("click", function () {
        $(".navbar__sub-menu").toggleClass("active");
    });

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
});
