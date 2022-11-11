let  slidePosition = 1;
slideShow(slidePosition);

function plusSlides(n){
    slideShow(slidePosition += n);
}

function currentSlide(n){
    slideShow(slidePosition = n);
}

function slideShow(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let circles = document.getElementsByClassName("dots");
    if (n > slides.length) {slidePosition = 1}
    if (n < 1) {slidePosition = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < circles.length; i++) {
        circles[i].className = circles[i].className.replace(" active", "");
    }
    slides[slidePosition-1].style.display = "block";
    circles[slidePosition-1].className += " enable";
  } 