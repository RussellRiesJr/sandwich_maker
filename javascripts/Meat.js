// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different meat prices
  var meatPrices = {"turkey": 0.90, "bacon": 1.50, "ham": 1.00, "roast_beef": 2.00, "salami": 1.50};

  maker.getMeat = function() {
    return meatPrices;
  }

  // Augment the original object with another method
  maker.addMeat = function(selectedTopping) {
    var toppingPrice = meatPrices[selectedTopping];
    console.log(selectedTopping);
    console.log(toppingPrice);
    return toppingPrice
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});
