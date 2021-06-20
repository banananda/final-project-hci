$(function () {
  var xDown = null;
  var yDown = null;

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
    yDown = firstTouch.clientY;
  }

  function handleTouchMove(evt) {
    if (!xDown || !yDown) {
      return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    console.log(xDiff);

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      // check lebih besar swipe y atau x
      if (xDiff > 0) {
        /* left swipe */
        if (position < 3) {
          position += 1;
        }
      } else {
        /* right swipe */
        if (position > 1) {
          position -= 1;
        }
      }
    } else {
      //   do nothing
    }

    /* reset values */
    xDown = null;
    yDown = null;
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
