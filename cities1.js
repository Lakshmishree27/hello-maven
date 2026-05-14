// Log message
console.log("Hello, World!");

// Function to calculate sum
function calculateSum(num1, num2) {
    const sum = num1 + num2;

    console.log(`The sum of ${num1} and ${num2} is: ${sum}`);
}

// Call function
calculateSum(8, 12);// Step 1: Create an array of cities

const cities = [
    "New York",
    "London",
    "Paris",
    "Tokyo",
    "Sydney"
];

console.log("Initial cities array:", cities);


// Step 2: Log total number of cities

console.log(
    "Total number of cities:",
    cities.length
);


// Step 3: Add a new city at the end

cities.push("Berlin");

console.log(
    "Cities after adding a new city:",
    cities
);


// Step 4: Remove the first city

const removedCity = cities.shift();

console.log(
    "Cities after removing the first city:",
    cities
);

console.log("Removed city:", removedCity);


// Step 5: Find index of a specific city

const cityToFind = "Tokyo";

const cityIndex = cities.indexOf(cityToFind);

if (cityIndex !== -1) {

    console.log(
        `The index of ${cityToFind} is:`,
        cityIndex
    );

} else {

    console.log(
        `${cityToFind} is not in the list of cities.`
    );
}