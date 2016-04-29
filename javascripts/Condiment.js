// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different condiment prices
  var condimentPrices = {"mayo": 0.25, "mustard": 0.25, "salt": 0.05, "pepper": 0.05, "oil": 0.10};

  // Augment the original object with another method
  maker.addCondiment = function() {
    return 0;
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});
