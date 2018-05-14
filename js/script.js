$(document).ready(function(){
  $('.slick').slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    mobileFirst: true,
    adaptiveHeight: true,
    fade: true,
    respondTo: 'min',
    appendArrows: ('div .block__slider'),
    appendDots: ('div .block__slider'),
    prevArrow: '<button class="slick-prev"><svg class="arrows" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.0001 39.9999"><g id="circle" data-name="" style="isolation: isolate"><g><g id="circle" data-name=""><path d="M20,2A18,18,0,1,1,2,20,18.02,18.02,0,0,1,20,2m0-2A20,20,0,1,0,40,20,20,20,0,0,0,20,0h0Z" /></g><g id="nc" data-name=""><polygon points="23.286 15.516 21.719 14 15 20.5 21.719 27 23.286 25.483 18.135 20.5 23.286 15.516" style=""/></g></g></g></svg></button>',
    nextArrow: '<button class="slick-next"><svg class="arrows" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40.0001 39.9999"><title>right</title><g id="circle" data-name="" style="isolation: isolate"><g><g id="circle" data-name=""><path d="M20,2.0878a18,18,0,1,1-18,18,18.02,18.02,0,0,1,18-18m0-2a20,20,0,1,0,20,20,20,20,0,0,0-20-20h0Z" transform="translate(0 -0.0878)" /></g><g id="nc" data-name="Forma 1 копия 8"><polygon points="19.281 14 17.714 15.516 22.865 20.5 17.714 25.483 19.281 27 26 20.5 19.281 14" style=""/></g></g></g></svg></button>'
  });
  $('.burger').click(function(){
    $('#burger-menu').slideToggle('slow'),
    $(this).toggleClass('burger-animate')
  });
  $('.avatar').click(function(){
    $('#avatar-list').slideToggle('slow')
  })
  $('.bell').click(function(){
    $('#bell-list').slideToggle('slow')
  })
});