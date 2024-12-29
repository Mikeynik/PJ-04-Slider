let slides = document.querySelectorAll('#silds .content');
let indicators = document.querySelectorAll('#indicators .slider-indictr');
let navigation = document.querySelectorAll('#nav .nav-elem');
let next = document.getElementById('next');
let previous = document.getElementById('previous');

let currentSlide = 0;

function goToSlide(n){
    slides[currentSlide].className = 'content';
    indicators[currentSlide].className = 'slider-indictr';
    navigation[currentSlide].className ='nav-elem';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].className = 'sliders show';
    indicators[currentSlide].className = 'slider-indictr indicator-active';
    navigation[currentSlide].className = 'nav-elem elem-act';
};

function nextSlide(){
    goToSlide(currentSlide + 1);
};

function previousSlide() {
	goToSlide(currentSlide - 1);
};

next.onclick = function() {
	nextSlide();
};

previous.onclick = function() {
	previousSlide();
};