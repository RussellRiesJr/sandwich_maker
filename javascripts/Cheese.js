// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different cheese prices
  var cheesePrices = {"cheddar": 1.00, "pepper jack": 1.25, "munster": 1.00, "provolone": 0.80};

  // Augment the original object with another method
  maker.addCheese = function() {
    return ???;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});
