// main-header nav

$(function () {
    $("ul.gnb>li").hover(function () {
      $("ul.sub, .nav-bg").stop().slideDown();
    }, function () {
      $("ul.sub, .nav-bg").stop().slideUp();
    });
  });