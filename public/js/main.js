(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // // Fixed Navbar
  // var flag;
  // $(window).ready(() => {
  //   flag = $(".nav-link").hasClass("text-white");
  // });
  // $(window).scroll(function () {
  //   if ($(window).width() < 992) {
  //     if ($(this).scrollTop() > 45) {
  //       $(".fixed-top").addClass("bg-primary shadow");
  //       if (flag) $(".nav-link").removeClass("");
  //     } else {
  //       $(".fixed-top").removeClass("bg-primary shadow");
  //       if (flag) $(".nav-link").addClass("");
  //     }
  //   } else {
  //     if ($(this).scrollTop() > 45) {
  //       $(".fixed-top").addClass("bg-primary shadow").css("top", -45);
  //       $(".nav-link").removeClass("");
  //       if (flag) $(".nav-link").removeClass("");
  //     } else {
  //       $(".fixed-top").removeClass("bg-primary shadow").css("top", 0);
  //       if (flag) $(".nav-link").addClass("");
  //     }
  //   }
  // });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Causes progress
  $(".causes-progress").waypoint(
    function () {
      $(".progress .progress-bar").each(function () {
        $(this).css("width", $(this).attr("aria-valuenow") + "%");
      });
    },
    { offset: "80%" }
  );
})(jQuery);
