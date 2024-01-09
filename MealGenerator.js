/* MAIN IDEA

   A program that generates a message containing a random cuisine and beverage for a select meal of the day.

*/


// There will be a List of strings for each of the 3 random components (cuisine, drink, mealtime)
let mealtimes = [];
let cuisines = [];
let drinks = [];

// A String is selected from each list

function getRandomPosInt(max) {
    return Math.floor(Math.random() * max);
}

let mealtime = mealtimes[getRandomPosInt(mealtimes.length)];
let cuisine = cuisines[getRandomPosInt(cuisines.length)];
let drink = drinks[getRandomPosInt(drinks.length)];

// Message will be stored and displayed by logging the message to the console through a concatenation of strings

console.log(`Today for your ${mealtime} you will be having amazing ${cuisine} food with a lovely glass of ${drink} to wash it down!`);