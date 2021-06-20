$(function () {
  let toggleState = false; //initial state of main dropdown menu
  let toggleStateInfo = false;
  let toggleStateSocials = false;

  toggleDropdown = () => {
    let dropdownMenu = $("#menu");
    if (toggleState == false) {
      dropdownMenu.css({
        display: "flex",
        transition: "all 500ms",
      });
      toggleState = true;
    } else {
      dropdownMenu.css({
        display: "none",
        transition: "all 500ms",
      });
      toggleState = false;
    }
  };

  toggleInfo = () => {
    let dropdownInfo = $("#dropdown-info");
    let menuTitleInfo = $("#menu-title-info");
    if (toggleStateInfo == false) {
      dropdownInfo.css({
        display: "block",
      });
      menuTitleInfo.css({
        "border-bottom": "2px solid #ffd60a",
      });
      toggleStateInfo = true;
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
    let dropdownSocials = $("#dropdown-socials");
    let menuTitleSocials = $("#menu-title-socials");
    if (toggleStateSocials == false) {
      dropdownSocials.css({
        display: "block",
      });
      menuTitleSocials.css({
        "border-bottom": "2px solid #ffd60a",
      });
      toggleStateSocials = true;
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
});
