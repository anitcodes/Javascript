let button = document.getElementById("toggle");

button.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    button.textContent = "Light Mode";
    button.style.color = "white";
    button.style.borderColor = "white";
  } else {
    button.textContent = "Dark Mode";
    button.style.color = "rgb(74, 50, 192)";
    button.style.borderColor = "rgb(103, 90, 190)";
  }
});
