$(function () {
    const imgBackground = document.querySelector('.imgBackground');
    const slides = imgBackground.getElementsByTagName('img');
    var i = 0;

    $("#slide-right").click( () => {
        slides[i].classList.remove('activeMaps');
        i = (i + 1) % slides.length;
        slides[i].classList.add('activeMaps');
    });

    $("#slide-left").click( () => {
        slides[i].classList.remove('activeMaps');
        i = (i - 1 + slides.length) % slides.length;
        slides[i].classList.add('activeMaps');
    });

    const mapsInfo = document.querySelector('.mapsInfo');
    const slidesInfo = mapsInfo.getElementsByTagName('div');
    var j = 0;

    $("#slide-right").click( () => {
        slidesInfo[j].classList.remove('activeInfo');
        j = (j + 1) % slidesInfo.length;
        slidesInfo[j].classList.add('activeInfo');
    });

    $("#slide-left").click( () => {
        slidesInfo[j].classList.remove('activeInfo');
        j = (j - 1 + slidesInfo.length) % slidesInfo.length;
        slidesInfo[j].classList.add('activeInfo');
    });
});