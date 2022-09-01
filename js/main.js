// main-header nav

$(function () {
  $("ul.gnb>li").hover(function () {
    $("ul.sub, .nav-bg").stop().slideDown();
  }, function () {
    $("ul.sub, .nav-bg").stop().slideUp();
  });
});




// main-visual slide

$(function () {
  const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: true,
    speed: 1000,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },

  });
});
