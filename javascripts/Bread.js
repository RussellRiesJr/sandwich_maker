// This SandwichMaker IIFE augments the original one
var SandwichMaker = (function(maker) {

  // Private variable to store the different bread prices
  var breadPrices = {"white": 1.00, "whole wheat": 1.50, "rye": 1.75, "sourdough": 2.00};

  maker.getBread = function() {
    return breadPrices;
  }

  // Augment the original object with another method
  maker.addBread = function(selectedTopping) {
    var toppingPrice = breadPrices[selectedTopping];
    console.log(selectedTopping)
    return toppingPrice
  };

  // Return the new, augmented object with the new method on it
  return maker;
})(SandwichMaker || {});
