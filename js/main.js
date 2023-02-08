(function ($) {
  "use strict";

  // offcanvas-js
  $(".dash-button").click(function () {
    $(".main__left-sidebar").addClass("active");
    $(".offcanvas-overlay").addClass("active");
  });
  // $(".main__left-sidebar a").click(function () {
  //   $(".main__left-sidebar").removeClass("active");
  //   $(".offcanvas-overlay").removeClass("active");
  // });
  $(".left-bar-close").click(function () {
    $(".main__left-sidebar").removeClass("active");
    $(".offcanvas-overlay").removeClass("active");
  });
  $(document).mouseup(function (e) {
    var container = $(".offmenu");

    // If the target of the click isn't the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $(".main__left-sidebar").removeClass("active");
      $(".offcanvas-overlay").removeClass("active");
    }
  });

  // init Isotope
  var $grid = $(".game__card__wrap-isotope").isotope({
    // options
    layoutMode: "fitRows",
  });
  // filter items on button click
  $(".game-isotope-nav").on("click", "a", function (event) {
    event.preventDefault();
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
  });
})(jQuery);

$(document).ready(function () {
  // scroll up
  $(function () {
    $.scrollUp();
  });

  // preloader
  $("#preloader").fadeOut(500);
});
