
let slideIndex = 0;
showSlides ();
function showSlides (){
    let i;
    let slides = document.getElementsByClassName('myslides');
    for(i = 0; i< slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if(slideIndex >slides.length){
        slideIndex = 1;
    }
    slides[slideIndex-1].style.display = 'block';
    setTimeout(showSlides,5000);
}

function reveal() {
    var reveal = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveal.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveal[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveal[i].classList.add("active");
      } else {
        reveal[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  