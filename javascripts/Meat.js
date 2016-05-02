// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrices = {"turkey": 0.9, "bacon": 1.5, "ham": 1, "roast_beef": 2, "salami": 1.5};

  maker.getMeat = function() {
    return meatPrices;
  }

  // Augment the original object with another method
  maker.addMeat = function(selectedTopping) {
    var toppingPrice = meatPrices[selectedTopping];
    console.log(selectedTopping);
    console.log(toppingPrice);
    return {price:toppingPrice, item:selectedTopping}
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});
