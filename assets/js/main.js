$(function () {
    $(document).scroll(function () {
      var $nav = $("#nav-fix");
      var $navItem = $(".in-navs");
      var $navIco = $(".icon");
      var $homeIco = $(".home-ico");
      var $homeIcoBlack = $("#home-black");


      $nav.toggleClass('nav-scroll', $(this).scrollTop() > $nav.height());
      $navItem.toggleClass('nav-item-scroll', $(this).scrollTop() > $nav.height());
      $navIco.toggleClass('nav-img-scroll', $(this).scrollTop() > $nav.height());
      $homeIco.toggleClass('home-ico-hide', $(this).scrollTop() > $nav.height());

      if ($(this).scrollTop() > $nav.height())
      {
        $homeIcoBlack.removeClass('home-ico-hide')
      }else{
        $homeIcoBlack.addClass('home-ico-hide')
      }
    });
});