$(function () {
  var xDown = null;

  let container = $("#card-container");
  var position = 2;

  document
    .getElementById("card-container")
    .addEventListener("touchstart", handleTouchStart, false);
  document
    .getElementById("card-container")
    .addEventListener("touchmove", handleTouchMove, false);

  console.log($("#slider-navigation *"));

  function getTouches(evt) {
    return (
      evt.touches || // browser API
      evt.originalEvent.touches
    ); // jQuery
  }

  function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
  }

  function handleTouchMove(evt) {
    if (!xDown) {
      return;
    }

    var xUp = evt.touches[0].clientX;

    var xDiff = xDown - xUp;

    console.log(xDiff);

    /*most significant*/
    if (xDiff > 0) {
      /* left swipe */
      if (position < 3) {
        position += 1;
      }
    } else {
      // right swipe
      if (position > 1) {
        position -= 1;
      }
    }

    /* reset values */
    xDown = null;
    swiper();
  }

  swiper = () => {
    if (position == 3) {
      container.css({
        transform: "translateX(-340px)",
        transition: "200ms ease",
      });

      $("#slider-navigation *").css({
        opacity: "0.5",
      });
      console.log($(".circle:nth-of-type(" + position + ")"));
      $(".circle:nth-of-type(" + position + ")").css({
        opacity: "1",
      });
    } else if (position == 2) {
      container.css({
        transform: "translateX(0px)",
        transition: "200ms ease",
      });
      $("#slider-navigation *").css({
        opacity: "0.5",
      });
      console.log($(".circle:nth-of-type(" + position + ")"));
      $(".circle:nth-of-type(" + position + ")").css({
        opacity: "1",
      });
    } else {
      container.css({
        transform: "translateX(340px)",
        transition: "200ms ease",
      });
      $("#slider-navigation *").css({
        opacity: "0.5",
      });
      console.log($(".circle:nth-of-type(" + position + ")"));
      $(".circle:nth-of-type(" + position + ")").css({
        opacity: "1",
      });
    }
  };
});
