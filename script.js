const pageViewsElement = document.getElementById("pageviews");
const priceElement = document.getElementById("price");
const switcher = document.getElementById("switching");
const slider = document.getElementById("mySlider");

const pricingTiers = [
  {views: "10K", price: 8},
  {views: "50K", price: 12},
  {views: "100K", price: 16},
  {views: "500K", price: 24},
  {views: "1M", price: 36},
];

function updatePricing(sliderValue) {
  const {views, price} = pricingTiers[sliderValue];
  const finalPrice = switcher.checked ? calculateDiscount(price) : price;
  pageViewsElement.innerHTML = `${views} PAGEVIEWS`;
  priceElement.innerHTML = `$${finalPrice}.00`;
}

function calculateDiscount(price) {
  return price * 12 * 0.75;
}

function updateSliderBackground(value) {
  slider.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) ${value}%, #ddd ${value}%, #ddd 100%)`;
}

slider.addEventListener("input", () => {
  const value = ((slider.value - slider.min) / (slider.max - slider.min)) * 100;
  updateSliderBackground(value);
  updatePricing(slider.value);
});

switcher.addEventListener("change", () => updatePricing(slider.value));
