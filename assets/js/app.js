gsap.from(".main__title", { opacity: 0, duration: 1, y: -50 });
gsap.from(".main__subtitle", { opacity: 0, duration: 1.5, x: -100 });

var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".navigation").style.top = "0";
  } else {
    document.querySelector(".navigation").style.top = "-6rem";
  }
  prevScrollpos = currentScrollPos;
};