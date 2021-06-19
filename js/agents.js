$(function () {
    const imgBackground = document.querySelector('.imgBackground');
    const slides = imgBackground.getElementsByTagName('img');
    var i = 0;

    $("#slide-right").click( () => {
        slides[i].classList.remove('activeAgents');
        i = (i + 1) % slides.length;
        slides[i].classList.add('activeAgents');
    });

    $("#slide-left").click( () => {
        slides[i].classList.remove('activeAgents');
        i = (i - 1 + slides.length) % slides.length;
        slides[i].classList.add('activeAgents');
    });

    const agentsInfo = document.querySelector('.agentsInfo');
    const slidesInfo = agentsInfo.getElementsByTagName('div');
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
