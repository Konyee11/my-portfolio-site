document.addEventListener("DOMContentLoaded", function () {
    const _inviewAnimation = (el, isIntersecting) => {
        if (isIntersecting) {
            el.classList.add("inview");
        } else {
            el.classList.remove("inview");
        }
    };
    const so = new ScrollObserver(".cover-slide", _inviewAnimation);
    const so2 = new ScrollObserver(".appear", _inviewAnimation);
    const so3 = new ScrollObserver(".side", _inviewAnimation);
});
