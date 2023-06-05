$(document).ready(function () {
  AOS.init();
  let scrollRef = 0;

  $(".loader").hide();

  window.addEventListener("scroll", function () {
    // increase value up to 10, then refresh AOS
    scrollRef <= 10 ? scrollRef++ : AOS.refresh();
  });

  $("#headerCarousel").carousel({
    interval: false,
  });

  // services slider
  $(".services .slider").slick({
    slidesToShow: 4,
    nextArrow: '<i class="fa next d-none d-md-flex fa-chevron-right"></i>',
    prevArrow: '<i class="fa prev d-none d-md-flex fa-chevron-left"></i>',
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".partners .slider").slick({
    slidesToShow: 6,
    nextArrow: '<i class="fa next d-none d-md-flex fa-chevron-right"></i>',
    prevArrow: '<i class="fa prev d-none d-md-flex fa-chevron-left"></i>',
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  //============================================
  //  what we do section (chevron) and slide down
  //============================================
  let bar = $("nav .bar");

  $(bar).on("click", function (e) {
    //getting the sibilibg's cheveron
    let siblingChev = $(this).parent().siblings(".skill").find(".cheveron");

    //slide toggle the text of the clicked element text
    $(this).next(".text").slideToggle().addClass("active");

    //slide up every slided down text
    $(this).parent().siblings(".skill").find(".text").slideUp();
    $(this)
      .parent()
      .addClass("opened")
      .siblings(".skill")
      .removeClass("opened");
    //toggle cheveron class of the clicked element
    $(this).find(".cheveron").toggleClass("cheveron-down cheveron-up");

    //check the other skills element to see if there
    //is a slided down text in order to change the cheveron
    if ($(siblingChev).hasClass("cheveron-up")) {
      $(this)
        .parent()
        .siblings(".skill")
        .find(".cheveron.cheveron-up")
        .toggleClass("cheveron-up cheveron-down");
    }
  });

  $("#file").change(function () {
    var file = $("#file")[0].files[0].name;
    $(this).siblings("input").val(file);
  });

  $(".recruitment input#number").keyup(function () {
    this.value = this.value.replace(/[^0-9\.]/g, "");
  });
});