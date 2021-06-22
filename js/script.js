mainFunc = () => {
  var screenWidth = window.innerWidth;
  console.log(screenWidth);
  if (screenWidth <= 800) {
    let toggleState = false; //initial state of main dropdown menu
    let toggleStateInfo = false;
    let toggleStateSocials = false;

    let dropdownInfo = $("#dropdown-info");
    let menuTitleInfo = $("#menu-title-info");

    let dropdownSocials = $("#dropdown-socials");
    let menuTitleSocials = $("#menu-title-socials");
    toggleDropdown = () => {
      let dropdownMenu = $("#menu");
      let preRegButton = $("#pre-reg-btn");
      if (toggleState == false) {
        dropdownMenu.css({
          right: "0px",
          transition: "all 400ms ease",
          boxShadow: "0 0 5px #001d3d",
        });
        preRegButton.css({
          right: "0px",
          transition: "all 400ms ease",
          boxShadow: "0 0 5px #ffd60a",
        });
        toggleState = true;
      } else {
        dropdownMenu.css({
          right: "-240px",
          transition: "all 400ms ease",
          boxShadow: "none",
        });
        preRegButton.css({
          right: "-240px",
          transition: "all 400ms ease",
          boxShadow: "none",
        });
        toggleState = false;
      }
    };
    toggleInfo = () => {
      if (toggleStateInfo == false) {
        dropdownInfo.css({
          transition: "all 500ms ease",

          display: "block",
        });
        menuTitleInfo.css({
          "border-bottom": "3px solid #ffd60a",
        });
        toggleStateInfo = true;

        dropdownSocials.css({
          display: "none",
        });
        menuTitleSocials.css({
          "border-bottom": "1px solid #001226",
        });
        toggleStateSocials = false;
      } else {
        dropdownInfo.css({
          display: "none",
        });
        menuTitleInfo.css({
          "border-bottom": "1px solid #001226",
        });
        toggleStateInfo = false;
      }
    };

    toggleSocials = () => {
      if (toggleStateSocials == false) {
        dropdownSocials.css({
          display: "block",
        });
        menuTitleSocials.css({
          "border-bottom": "3px solid #ffd60a",
        });
        toggleStateSocials = true;

        dropdownInfo.css({
          display: "none",
        });
        menuTitleInfo.css({
          "border-bottom": "1px solid #001226",
        });
        toggleStateInfo = false;
      } else {
        dropdownSocials.css({
          display: "none",
        });
        menuTitleSocials.css({
          "border-bottom": "1px solid #001226",
        });
        toggleStateSocials = false;
      }
    };
  }
};
$(document).ready(mainFunc);
$(document).ajaxComplete(mainFunc);
$(window).resize(mainFunc);
