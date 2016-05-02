// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different cheese prices
  var cheesePrices = {"cheddar": 1, "pepper_jack": 1.25, "munster": 1, "provolone": 0.8};

  maker.getCheese = function() {
    return cheesePrices;
  }

  // Augment the original object with another method
  maker.addCheese = function(selectedTopping) {
    var toppingPrice = cheesePrices[selectedTopping];
    console.log(selectedTopping)
    return {price:toppingPrice, item:selectedTopping}
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});
