//Image effect
window.onload = function () {
  $("#img-content1").animate({
    opacity: "1.0",
    width: "600px",
  });
};

// Text effect
var textWrapper = document.querySelector(".ml2");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml2 .letter",
    scale: [4, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70 * i,
  })
  .add({
    targets: ".ml2",
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 10000,
  });

// Wrap every letter in a span
var textWrapper = document.querySelector(".ml13");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: true })
  .add({
    targets: ".ml13 .letter",
    translateY: [100, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1400,
    delay: (el, i) => 300 + 30 * i,
  })
  .add({
    targets: ".ml13 .letter",
    translateY: [0, -100],
    opacity: [1, 0],
    easing: "easeInExpo",
    duration: 1200,
    delay: (el, i) => 100 + 30 * i,
  });

//Responsive menu and icon switch
$("#flip").click(function () {
  var listaMenu = $("#panel");

  if (listaMenu.is(":hidden") == true) {
    var icon = $("#flip").find("i");
    icon.removeClass("fa-solid fa-bars");
    icon.addClass("fa-solid fa-xmark");
    listaMenu.slideToggle();
  } else {
    var icon = $("#flip").find("i");
    icon.removeClass("fa-solid fa-xmark");
    icon.addClass("fa-solid fa-bars");
    listaMenu.slideToggle();
  }
});
