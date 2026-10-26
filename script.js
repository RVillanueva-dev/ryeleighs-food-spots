
const guideName = "Ryeleigh's Food Spots";
const currentYear = new Date().getFullYear();

let placeCount = 0;

// Display the guide name
const guideElement = document.getElementById("guide-name");

if (guideElement) {
    guideElement.textContent = guideName;
}

// Count the food spots on the page
const places = document.querySelectorAll(".place-card");
placeCount = places.length;

// Display the calculated count
const countElement = document.getElementById("place-count");

if (countElement) {
    countElement.textContent = placeCount;
}

// Display the dynamic copyright
const copyrightElement = document.getElementById("copyright");

if (copyrightElement) {
    copyrightElement.textContent = `© ${currentYear} ${guideName}`;
}

// ========================================
// ACTIVITY 8.3 - MAKE YOUR GUIDE DECIDE
// ========================================

// 1. Rating decision using if / else if / else
const placeRating = 4.5;
let ratingLabel;

if (placeRating >= 4) {
    ratingLabel = "Highly recommended";
} else if (placeRating >= 2.5) {
    ratingLabel = "Worth a visit";
} else {
    ratingLabel = "Only if you're nearby";
}

// Display the rating decision
const ratingElement = document.getElementById("rating-result");

if (ratingElement) {
    ratingElement.textContent = ratingLabel;
}

// 2. Budget decision using && and a ternary operator
const priceLevel = 2;
const budgetLimit = 2;
const isOpen = true;

const isWithinBudget = priceLevel <= budgetLimit;

const budgetMessage =
    isWithinBudget && isOpen
        ? "Good option right now"
        : "Maybe another time";

// Display the budget decision
const budgetElement = document.getElementById("budget-result");

if (budgetElement) {
    budgetElement.textContent = budgetMessage;
}

// 3. Distance decision using a boolean and ternary operator
const isWithinWalkingDistance = true;

const distanceMessage = isWithinWalkingDistance
    ? "Walking distance"
    : "Better to commute";

// Display the distance decision
const distanceElement = document.getElementById("distance-result");

if (distanceElement) {
    distanceElement.textContent = distanceMessage;
}

// Display labelled values in the console
console.log("Guide name:", guideName);
console.log("Current year:", currentYear);
console.log("Places reviewed:", placeCount);
console.log("Place rating:", placeRating);
console.log("Rating label:", ratingLabel);
console.log("Budget decision:", budgetMessage);
console.log("Distance decision:", distanceMessage);
