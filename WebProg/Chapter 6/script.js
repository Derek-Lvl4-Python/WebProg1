document.getElementById("calculateBtn").addEventListener("click", function() {
    // Get the input values
    var costPerLiter = parseFloat(document.getElementById("costPerLiter").value);
    var litersPurchased = parseFloat(document.getElementById("litersPurchased").value);
    
    // Calculate the total cost
    var totalCost = costPerLiter * litersPurchased;
    
    // Display the total cost
    document.getElementById("totalCost").textContent = "Total cost: $" + totalCost.toFixed(2);
});