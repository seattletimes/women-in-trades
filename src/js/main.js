require("./lib/social");
require("./lib/ads");
var track = require("./lib/tracking");

var slides = Array.prototype.slice.call(document.querySelectorAll(".slide"));
var counterDiv = document.querySelector(".counter");

var getActive = () => document.querySelector(".slide.active");

var setActive = function(current, target) {
  current.classList.remove("active");
  target.classList.add("active");
  var id = target.getAttribute("data-index");
  window.history.replaceState({}, "", `#${id}`);
  var index = slides.indexOf(target);
  counterDiv.innerHTML = `${index + 1} / ${slides.length}`;
  document.body.classList.add("interacted");
};

var slideChange = function(shift) {
  var current = getActive();
  var target = shift > 0 ? current.nextElementSibling : current.previousElementSibling;
  if (!target || !target.classList.contains("slide")) return;
  setActive(current, target);
};

var jump = function(id) {
  var current = getActive();
  var dest = document.querySelector(`.slide[data-index="${id}"]`);
  setActive(current, dest);
};

if (window.location.hash) {
  var index = window.location.hash.replace(/#/, "");
  var active = getActive();
  var dest = document.querySelector(`[data-index="${index}"]`);
  setActive(active, dest);
};

document.body.addEventListener("keyup", function(e) {
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

  //slide direct links
  if (e.target.hasAttribute("data-jump")) {
    console.log(e.target);
    var id = e.target.getAttribute("data-jump");
    jump(id);
  }
});

document.querySelector("")