const pageViews = document.getElementById("pageviews");
const priceEL = document.getElementById("price");
const period = priceEL.nextElementSibling;
const switcher = document.getElementById("switching");

const slider = document.getElementById("mySlider");

function setValuesInDom(value, price) {
  pageViews.innerHTML = `<span class="page__views" id="pageviews">${value}${
    value === 1 ? "M" : "K"
  } PAGEVIEWS</span>`;
  priceEL.innerHTML = `<span id="price">$${price}.00</span>`;
}

slider.addEventListener("input", e => {
  const value = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
  const sliderValue = +slider.value;
  console.log(sliderValue);

  slider.style.background =
    "linear-gradient(to right, hsl(174, 77%, 80%) 0%, hsl(174, 77%, 80%) " +
    value +
    "%, #ddd " +
    value +
    "%, #ddd 100%)";

  // - 10K pageviews / $8 per month
  // - 50K pageviews / $12 per month
  // - 100K pageviews / $16 per month
  // - 500k pageviews / $24 per month
  // - 1M pageviews / $36 per month

  switch (sliderValue) {
    case 0:
      setValuesInDom(10, 8);
      break;
    case 1:
      setValuesInDom(50, 12);
      break;
    case 2:
      setValuesInDom(100, 16);
      break;

    case 3:
      setValuesInDom(500, 24);
      break;
    case 4:
      setValuesInDom(1, 36);
      break;
  }
});
