const pageViews = document.getElementById("pageviews");
const price = document.getElementById("price");
const period = price.nextElementSibling;
const switcher = document.getElementById("switching");

const slider = document.getElementById("mySlider");

slider.addEventListener("change", e => {
  const value = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;

  slider.style.background =
    "linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) " +
    value +
    "%, #ddd " +
    value +
    "%, #ddd 100%)";
});
