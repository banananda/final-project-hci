$(function () {
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
        display: "flex",
        transition: "all 500ms",
      });
      preRegButton.css({
        display: "block",
      });
      toggleState = true;
    } else {
      dropdownMenu.css({
        display: "none",
        transition: "all 500ms",
      });
      preRegButton.css({
        display: "none",
      });
      toggleState = false;
    }
  };

  toggleInfo = () => {
    if (toggleStateInfo == false) {
      dropdownInfo.css({
        display: "block",
      });
      menuTitleInfo.css({
        "border-bottom": "2px solid #ffd60a",
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
        "border-bottom": "2px solid #ffd60a",
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
});
