// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different bread prices
  var breadPrices = {"white": 1, "wheat": 1.5, "rye": 1.75, "sourdough": 2, "none": 0};

  maker.getBread = function() {
    return breadPrices;
  }

  // Augment the original object with another method
  maker.addBread = function(selectedTopping) {
    var toppingPrice = breadPrices[selectedTopping];
    console.log(selectedTopping)
    return {price:toppingPrice, item:selectedTopping}
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});
