$(document).ready(function() {
    var slideContainer = $('#slide');
    var slideWidth = slideContainer.width();
    var slideCount = $('#slide>div').length;
    var currentSlide = 0;

    function slideNext() {
        slideContainer.css('transform', 'translateX(' + (-slideWidth * currentSlide / 5) + 'px)');
        slideContainer.css('transition', 'transform 1s');
        currentSlide = (currentSlide + 1) % slideCount;
    }
    
    setInterval(slideNext, 2000);
});