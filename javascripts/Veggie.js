// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different veggie prices
  var veggiePrices = {"lettuce": 0.25, "tomato": 0.3, "onion": 0.3, "pickle": 0.1};

  maker.getVeggie = function() {
    return veggiePrices;
  }

  // Augment the original object with another method
  maker.addVeggie = function(selectedTopping) {
    var toppingPrice = veggiePrices[selectedTopping];
    console.log(selectedTopping)
    return {price:toppingPrice, item:selectedTopping}
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});
