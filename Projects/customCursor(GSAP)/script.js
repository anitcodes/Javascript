function cursorAnimation() {
  let main = document.querySelector("#main");
  let cursor = document.querySelector("#cursor");
  let image = document.querySelector("#image");

  main.addEventListener("mousemove", function (det) {
    gsap.to(cursor, {
      x: det.x,
      y: det.y,
      duration: 1,
    });
  });

  image.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      innerHTML: "View More",
      backgroundColor: "#dbd6d638",
      scale: 6,
    });
  });

  image.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      innerHTML: "",
      backgroundColor: "",
      scale: 1,
    });
  });
}

cursorAnimation();
