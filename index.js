// Write your solution in this file!
// Globally-scoped variables
const burgers = ['Hamburger', 'Cheeseburger'];
let featuredDrink = 'Strawberry Milkshake';

// Function-Scoped Variable: newBurger only exists inside addBurger
function addBurger() {
    const newBurger = 'Flatburger';
    burgers.push(newBurger);
}

// Block-scoped variable : anotherNewBurger only exists inside this if block
if(true) {
    const anotherNewBurger = 'Maple Bacon Burger'
    burgers.push(anotherNewBurger);
}

//Reassigns the global featuredDrink
function changeFeaturedDrink() {
    featuredDrink = 'The JavaShake';
}