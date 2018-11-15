/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.getElementsByClassName("menu-btn")[0].style.marginRight = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

function modal() {
  document.getElementsByClassName("modal")[0].style.display = "block";
}

function enlargeFalls() {
  document.getElementsByClassName("modal-content")[0].src = "img/falls.jpg";
  document.getElementById("caption").innerHTML = "Tangadan Falls";
}

function enlargeRiver() {
  document.getElementsByClassName("modal-content")[0].src = "img/river.jpg";
  document.getElementById("caption").innerHTML = "Tapuacan River";
}

function enlargeThunder() {
  document.getElementsByClassName("modal-content")[0].src =
    "img/Thunderbird.jpg";
  document.getElementById("caption").innerHTML = "Thunderbird Resort";
}

function closephoto() {
  document.getElementsByClassName("modal")[0].style.display = "none";
  document.getElementsByClassName("modal-content")[0].src =
    "img/Thunderbird.jpg";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
