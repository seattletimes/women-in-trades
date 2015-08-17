require("./lib/social");
require("./lib/ads");
var track = require("./lib/tracking");

var qsa = s => Array.prototype.slice.call(document.querySelectorAll(s));
var reflow = () => document.body.offsetWidth;

var modal = document.querySelector(".modal");
var modalImages = modal.querySelector(".images");
var modalCaption = modal.querySelector(".caption");

var onClickGroup = function(e) {

  var images = Array.prototype.slice.call(e.currentTarget.querySelectorAll(".thumb"));
  console.log(modalImages);
  modalImages.innerHTML = "";
  images.forEach(img => { modalImages.innerHTML += `<img src="./assets/${img.getAttribute("data-image")}">` });

  modal.classList.add("show");
  reflow();
  modal.classList.add("enter");

}

qsa(".group").forEach(e => e.addEventListener("click", onClickGroup));
modal.addEventListener("click", e => modal.classList.remove("show", "enter"));