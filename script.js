// script.js

// Numeric mapping based on the rules provided
const alphabetValues = { A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, J: 10, K: 11, L: 12, M: 13, N: 14, O: 15, P: 16, R: 17, S: 18, T: 19, U: 20, V: 21, W: 22, Y: 23, Z: 24 };
const unitsMapping = { 1: "IN", 2: "ON", 3: "UN", 4: "AN", 5: "EN", 6: "INIS", 7: "ONOS", 8: "UNUS", 9: "ANAS" };
const tensMapping = { 10: "KET", 20: "LET", 30: "MET", 40: "NET", 50: "PET", 60: "SET", 70: "TET", 80: "VET", 90: "WET" };
const hundredsMapping = { 100: "KETO", 200: "LETO", 300: "METO", 400: "NETO", 500: "PETO", 600: "SETO", 700: "TETO", 800: "VETO", 900: "WETO" };

// Function to calculate the numeric value of a name
function calculateNameValue(name) {
    let total = 0;
    for (const char of name.toUpperCase()) {
        if (alphabetValues[char]) {
            total += alphabetValues[char];
        }
    }
    return total;
}

// Function to convert the numeric value to the corresponding phrase
function convertToPhrase(number) {
    let phrase = "";
    let hundreds = Math.floor(number / 100) * 100;
    let tens = Math.floor((number % 100) / 10) * 10;
    let units = number % 10;

    if (hundredsMapping[hundreds]) phrase += hundredsMapping[hundreds] + " ";
    if (tensMapping[tens]) phrase += tensMapping[tens] + " ";
    if (unitsMapping[units]) phrase += unitsMapping[units];

    return phrase.trim();
}

// Main function to handle name conversion
function convertName() {
    const nameInput = document.getElementById("nameInput").value;
    if (!nameInput) {
        document.getElementById("result").innerText = "Please enter a name!";
        return;
    }

    const nameValue = calculateNameValue(nameInput);
    const phrase = convertToPhrase(nameValue);
    document.getElementById("result").innerText = `${nameInput.toUpperCase()} is ${nameValue}, equivalent to ${phrase}`;
}
