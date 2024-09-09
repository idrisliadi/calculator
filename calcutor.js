let display = document.getElementById('display');

// Append character to the display
function appendCharacter(char) {
    display.value += char;
}

// Clear the entire display
function clearDisplay() {
    display.value = '';
}

// Delete the last character
function deleteChar() {
    display.value = display.value.slice(0, -1);
}

// Calculate the result
function calculateResult() {
    try {
        display.value = eval(display.value); // Use eval to compute the math expression
    } catch (error) {
        display.value = 'Error';
    }
}
