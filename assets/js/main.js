$(function () {
    $(document).scroll(function () {
      var $nav = $("#nav-fix");
      var $navItem = $(".in-navs");
      var $navIco = $(".icon");
      var $homeIco = $(".home-ico");
      var $homeIcoBlack = $("#home-black");
      var $upArrows = $(".up-arrows");
      var $burgerMenu = $(".burger-menu");
      var $headMenu = $(".header-img");


      $nav.toggleClass('nav-scroll', $(this).scrollTop() > $nav.height());
      $navItem.toggleClass('nav-item-scroll', $(this).scrollTop() > $nav.height());
      $navIco.toggleClass('nav-img-scroll', $(this).scrollTop() > $nav.height());
      $homeIco.toggleClass('home-ico-hide', $(this).scrollTop() > $nav.height());
      $upArrows.toggleClass('up-arrows-active', $(this).scrollTop() > $nav.height());
      $burgerMenu.toggleClass('burger-scroll-invers', $(this).scrollTop() > $headMenu.height());

      if ($(this).scrollTop() > $nav.height())
      {
        $homeIcoBlack.removeClass('home-ico-hide')
      }else{
        $homeIcoBlack.addClass('home-ico-hide')
      }
    });
    
});

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  $("#close-menu").on('click' , function(event){
    $(".side-menu").css({
      "display" : "none"
    })
  })

  $("#burger").on('click' , function(event){
    $(".side-menu").css({
      "display" : "block"
    })
  })
});