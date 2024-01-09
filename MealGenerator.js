let mealtimes = ['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Midnight Snack', 'Afternoon Tea', 'Brunch', 'Morning Tea', 'Pre-workout Snack', 'Post-workout Snack'];
let cuisines = ['Italian', 'Chinese', 'Indian', 'Japanese', 'Thai', 'Indonesian', 'Malaysian', 'Mexican', 'American', 'Australian', 'Lebanese'];
let drinks = ['Water', 'Milk', 'Orange Juice', 'Apple Juice', 'Coca Cola', 'Fanta', 'Lemonade', 'Sprite', 'Beer', 'Iced Tea', 'Iced Coffee'];

function getRandomPosInt(max) {
    return Math.floor(Math.random() * max);
}

let mealtime = mealtimes[getRandomPosInt(mealtimes.length)];
let cuisine = cuisines[getRandomPosInt(cuisines.length)];
let drink = drinks[getRandomPosInt(drinks.length)];

console.log(`Today for your ${mealtime} you will be having amazing ${cuisine} food with a lovely glass of ${drink} to wash it down!`);