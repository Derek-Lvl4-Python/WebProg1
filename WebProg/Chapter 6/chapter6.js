// Function to generate a random RGB color
function generateRGB() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`; // Return the RGB color string
}

// Function to set the colors for the game
function setColors() {
    // Generate the correct RGB color
    var correctColor = generateRGB();

    // Display the correct RGB color to guess
    document.getElementById("rgbValue").textContent = correctColor;

    // Get the color options container
    var colorOptions = document.getElementById("colorOptions");
    colorOptions.innerHTML = ""; // Clear previous color options

    // Loop to create color options
    for (var i = 0; i < 3; i++) {
        // Create a div element for the color option
        var colorOption = document.createElement("div");
        colorOption.className = "colorOption"; // Add CSS class
        colorOption.style.backgroundColor = i === 0 ? correctColor : generateRGB(); // Set background color
        // Add onclick event to check if the color option is correct
        colorOption.onclick = function() {
            if (this.style.backgroundColor === correctColor) {
                document.getElementById("result").textContent = "Correct!"; // Display correct message
            } else {
                document.getElementById("result").textContent = "Incorrect!"; // Display incorrect message
            }
        };
        colorOptions.appendChild(colorOption); // Append color option to container
    }
}

// Function to start a new game
function newGame() {
    document.getElementById("result").textContent = ""; // Clear previous result
    setColors(); // Set new colors for the game
}

newGame(); // Start a new game when the page loads