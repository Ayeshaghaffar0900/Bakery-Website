Swal.fire({
  title: "ThankYou!",
  text: "For come to our website.",
  imageUrl: "../images/red-velvet.jpg",
  imageWidth: 400,
  imageHeight: 200,
  imageAlt: "Custom image"
});

// navbar start
const navEl = document.querySelector( '.navbar');

window.addEventListener('scroll', ()=> {
  if (window.scrollY >= 100) {
    navEl.classList.add('scrolled-nav');
  } else if (window.scrollY < 100) {
    navEl.classList.remove('scrolled-nav');
  }
});
// navbar end

// slick-slider start
$(document).ready(function(){
    $('.slick-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000, // 2 seconds
        dots: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 2,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1,
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
    });
});
// slick-slider end
