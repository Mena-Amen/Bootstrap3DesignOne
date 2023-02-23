/*global $, jQuery, alert*/
$(document).ready(function () {
  "use strict";

  //Nice Scroll

  $("html").niceScroll({
    cursorcolor: "rgb(46, 204, 113)",
    cursorwidth: "12px",
  });

  $(".carousel").carousel({
    interval: 6000,
  });

  // Show Color Option Div When Click On The Gear

  $(".gear-check").click(function () {
    $(".color-option").fadeToggle();
  });

  // Change Theme Color On Click

  var colorLi = $(".color-option ul li"),
    scrollButton = $("#scroll-top");

  colorLi
    .eq(0)
    .css("backgroundColor", "#E41B17")
    .end()
    .eq(1)
    .css("backgroundColor", "pink")
    .end()
    .eq(2)
    .css("backgroundColor", "limegreen")
    .end()
    .eq(3)
    .css("backgroundColor", "#e8b771")
    .end()
    .eq(4)
    .css("backgroundColor", "#009AFF");

  colorLi.click(function () {
    $("link[href*='theme']").attr("href", $(this).attr("data-value"));
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() >= 800) {
      scrollButton.show();
    } else {
      scrollButton.hide();
    }
  });

  // Click On Button To Scroll top

  scrollButton.click(function () {
    $("html,body").animate({ scrollTop: 0 }, 900);
  });
});

// Loding Screen

$(window).load(function () {
  "use strict";

  // Show The Scroll

  $("body").css("overflow", "auto");

  // Loading Elements

  $(".loading-overlay .spinner").fadeOut(2000, function () {
    $(this)
      .parent()
      .fadeOut(2000, function () {
        $(this).remove();
      });
  });
});
