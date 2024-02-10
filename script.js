document.getElementById("mySlider").oninput = function () {
  var value = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background =
    "linear-gradient(to right, #4CAF50 0%, #4CAF50 " + value + "%, #ddd " + value + "%, #ddd 100%)";
};
