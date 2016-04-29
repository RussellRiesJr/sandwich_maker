// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different veggie prices
  var veggiePrices = {"lettuce": 0.25, "tomato": 0.30, "onion": 0.30, "pickle": 0.10};

  // Augment the original object with another method
  maker.addVeggie = function() {
    return 0;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});
