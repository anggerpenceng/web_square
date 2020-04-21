$(function () {
    $(document).scroll(function () {
      var $nav = $("#nav-fix");
      var $navItem = $(".in-navs");
      $nav.toggleClass('nav-scroll', $(this).scrollTop() > $nav.height());
      $navItem.toggleClass('nav-item-scroll', $(this).scrollTop() > $nav.height());
    });
});