
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

// Display the calculated count if the element exists
const countElement = document.getElementById("place-count");

if (countElement) {
    countElement.textContent = placeCount;
}

// Display the dynamic copyright
const copyrightElement = document.getElementById("copyright");

if (copyrightElement) {
    copyrightElement.textContent = `© ${currentYear} ${guideName}`;
}

// Display three labelled values in the console
console.log("Guide name:", guideName);
console.log("Current year:", currentYear);
console.log("Places reviewed:", placeCount);
