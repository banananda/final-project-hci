$(function(){
let slides = $(".slide");
slides.hide();
    let currIdx = 0;
    let minIdx = 0;
    let maxIdx = slides.length -1;
    slides.eq(0).show();

    $("#slide-right").click(()=>{
        slides.eq(currIdx).hide();
        currIdx++;
        if (currIdx > maxIdx) currIdx = minIdx;
        slides.eq(currIdx).show();
    });

    $("#slide-left").click(()=>{
        slides.eq(currIdx).hide();
        currIdx--;
        if (currIdx < minIdx) currIdx = maxIdx;
        slides.eq(currIdx).show();
    });
});
