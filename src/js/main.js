require("./lib/social");
require("./lib/ads");
var track = require("./lib/tracking");

var slideChange = function(shift) {
  var current = document.querySelector(".slide.active");
  var target = shift > 0 ? current.nextElementSibling : current.previousElementSibling;
  if (!target || !target.classList.contains("slide")) return;
  current.classList.remove("active");
  target.classList.add("active");
};

document.body.addEventListener("keyup", function(e) {
  console.log(e.keyCode);
  switch (e.keyCode) {
    case 32: //space
    case 34: //pagedown
    case 39: //right
      slideChange(1);
    break;

    case 33: //pageup
    case 37: //left
      slideChange(-1);
    break;
  }
});

document.body.addEventListener("click", function(e) {
  //slide buttons
  if (e.target.classList.contains("change-slide")) {
    slideChange(e.target.classList.contains("next") ? 1 : -1);
  }

  //fullscreen button
  if (e.target.classList.contains("fullscreen")) {
    var slideContainer = document.querySelector(".slide-container");
    if (slideContainer.requestFullscreen) slideContainer.requestFullscreen();
    else if (slideContainer.msRequestFullscreen) slideContainer.msRequestFullscreen();
    else if (slideContainer.webkitRequestFullscreen) slideContainer.webkitRequestFullscreen();
    else if (slideContainer.mozRequestFullScreen) slideContainer.mozRequestFullScreen();
  }
});