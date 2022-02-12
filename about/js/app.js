/* handle line animation  */

const menuItems = document.querySelectorAll('.menu-item')
menuItems.forEach(item => {
    item.onclick = () => {
        document.querySelectorAll('.line').forEach(e => {
            if(e.classList.contains('active')){
                e.classList.remove('active')
            }
        }) 
        item.querySelector('.line').classList.add('active')
    }
})

const line2 = document.querySelector('.line2')
const absLine = document.querySelector('.abs-line')
const heading = document.querySelectorAll('.banner__heading-wrap h2')
heading.forEach((item, index) => {
    absLine.style.left = heading[0].offsetLeft +'px';
    absLine.style.width = heading[0].offsetWidth + 'px';
    item.onclick = function() {
        
        absLine.style.left = this.offsetLeft +'px';
        absLine.style.width = this.offsetWidth + 'px';
    }
})

/* handle slick slider */
$(document).ready(function(){
    $('.course__list').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        responsive: [
            {
              /* breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              } */
            },
            {
              breakpoint: 1023.98,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });
    
    $('.mentor__card-list').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        responsive: [
            {
              /* breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              } */
            },
            {
              breakpoint: 1023.98,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                dots: true,
                arrows: false,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });
    
})
/* handle menu header */

const toggle = document.querySelector('.menu-toggle')
const menu = document.querySelector('.menu')
toggle.onclick = () => {
    menu.classList.add('active')
}

window.addEventListener('click', function(e){   
    if (!menu.contains(e.target) && !e.target.matches('.menu-toggle')){
        menu.classList.remove('active')

    } /* else{
        document.querySelector('.menu').classList.remove('active')

    } */
  })