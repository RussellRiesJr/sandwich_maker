// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;
var itemsOrder = "";
// Variable to hold topping that the user selects
var selectedTopping;

// Get a reference to the <select> element that has all the meat options
var meatChooser = document.getElementById("meat_button");
var breadChooser = document.getElementById("bread_button");
var cheeseChooser = document.getElementById("cheese_button");
var condimentChooser = document.getElementById("con_button");
var veggieChooser = document.getElementById("veggie_button");

var price = document.getElementById("purchase_total");
var orderFinal = document.getElementById("sandwich_items");



/*
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
meatChooser.addEventListener("click", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
  if (event.target.type === "checkbox") {
    var order = SandwichMaker.addMeat(selectedTopping);
  // Determine the price of the topping chosen
  // Add the topping to the SandwichMaker to increase the total price
    finalSandwichPrice += order.price;
    itemsOrder += order.item + " ";
    price.innerHTML = "<h1>$" + finalSandwichPrice.toFixed(2) + "</h1>";
    orderFinal.innerHTML = "<h4>" + itemsOrder.replace(/_/g, " ") + "</h4>";
    console.log(finalSandwichPrice, itemsOrder);
  }
});

breadChooser.addEventListener("click", function(event) {
  selectedTopping = event.target.value;
  if (event.target.type === "radio") {
    var order = SandwichMaker.addBread(selectedTopping)
    finalSandwichPrice += order.price;
    itemsOrder += order.item + " ";
    price.innerHTML = "<h1>$" + finalSandwichPrice.toFixed(2) + "</h1>";
    orderFinal.innerHTML = "<h4>" + itemsOrder.replace(/_/g, " ") + "</h4>";
    console.log(finalSandwichPrice, itemsOrder);
  }
});

cheeseChooser.addEventListener("click", function(event) {
  selectedTopping = event.target.value;
  if (event.target.type === "checkbox") {
    var order = SandwichMaker.addCheese(selectedTopping)
    finalSandwichPrice += order.price;
    itemsOrder += order.item + " ";
    price.innerHTML = "<h1>$" + finalSandwichPrice.toFixed(2) + "</h1>";
    orderFinal.innerHTML = "<h4>" + itemsOrder.replace(/_/g, " ") + "</h4>";
    console.log(finalSandwichPrice, itemsOrder);
  }
});

condimentChooser.addEventListener("click", function(event) {
  selectedTopping = event.target.value;
  if (event.target.type === "checkbox") {
    var order = SandwichMaker.addCondiment(selectedTopping);
    finalSandwichPrice += order.price;
    itemsOrder += order.item + " ";
    price.innerHTML = "<h1>$" + finalSandwichPrice.toFixed(2) + "</h1>";
    orderFinal.innerHTML = "<h4>" + itemsOrder.replace(/_/g, " ") + "</h4>";
    console.log(finalSandwichPrice, itemsOrder);
  }
});

veggieChooser.addEventListener("click", function(event) {
  selectedTopping = event.target.value;
  if (event.target.type === "checkbox") {
    var order = SandwichMaker.addVeggie(selectedTopping)
    finalSandwichPrice += order.price;
    itemsOrder += order.item + " ";
    price.innerHTML = "<h1>$" + finalSandwichPrice.toFixed(2) + "</h1>";
    orderFinal.innerHTML = "<h4>" + itemsOrder.replace(/_/g, " ") + "</h4>";
    console.log(finalSandwichPrice, itemsOrder);
  }
});
