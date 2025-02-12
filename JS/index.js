// const fruits = ["banana", "apple", "pineapple", "avocado", "orange"];
// console.log(fruits[0], fruits[1], fruits[fruits.length - 1]);

// fruits[fruits.length - 1] = "beer";
// console.log(fruits);

// fruits[fruits.length] = "vodka";
// console.log("fruits", fruits);
// function array() {
//   const firstWord = "price_per_droid";
//   const result = firstWord.split("_").join("-");
//   console.log(result);
// }

// // array();

// function calculateEngravingPrice(message, pricePerWord) {
//   console.log(message.split(" ").length * pricePerWord);
// }

// calculateEngravingPrice("My name is Samir", 10);

// function planets() {
//   const planets = ["Earth", "Pluto", "Mercury", "Mars"];
//   for (i = 0; i < planets.length; i += 1) {
//     console.log(planets[i]);
//   }
// }
// planets();

function countNumbers() {
  const numbers = [2, 3, 44, 12, 14, 33, 123, 33];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 0) {
      console.log(numbers[i]);
    }
  }
}

countNumbers();
