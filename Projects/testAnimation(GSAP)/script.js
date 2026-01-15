function breakThText() {
  let h1 = document.querySelector("h1");
  let h1Text = h1.textContent;

  let splittedText = h1Text.split("");

  let clutter = "";

  splittedText.forEach(function (elem) {
    clutter += `<span>${elem}</span>`;
  });

  h1.innerHTML = clutter;
}
breakThText();

gsap.from("h1 span",{
    y: 100,
    opacity: 0,
    duration: 0.8,
    delay: 0.5,
    stagger: 0.15
})