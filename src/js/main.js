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
    case 39:
    case 32:
      slideChange(1);
    break;

    case 37:
      slideChange(-1);
    break;
  }
});