// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different condiment prices
  var condimentPrices = {"mayo": 0.25, "mustard": 0.25, "salt": 0.05, "pepper": 0.05, "oil": 0.1};

  // maker.getCondiment = function() {
  //   return condimentPrices;
  // }

  // Augment the original object with another method
  maker.addCondiment = function(selectedTopping) {
    var toppingPrice = condimentPrices[selectedTopping];
    console.log(selectedTopping);
    return {price:toppingPrice, item:selectedTopping}
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});
