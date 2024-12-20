// Firebase configuration (use your actual Firebase config)
var firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "tyre-tech-hub.firebaseapp.com",
    databaseURL: "https://tyre-tech-hub-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "tyre-tech-hub",
    storageBucket: "tyre-tech-hub.appspot.com",
    messagingSenderId: "269127952242",
    appId: "1:269127952242:web:53d16ca1d42d38504a5feb"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

// Function to update tire temperature from Firebase (for Tire 1)
function updateTireTemperature() {
    // Reference to the temperature data for Tire 1 in Firebase
    var tire1TempRef = database.ref('sensor/temperature'); // Make sure this path matches your Firebase structure

    // Real-time listener for Tire 1 temperature
    tire1TempRef.on('value', function(snapshot) {
        var tire1Temp = snapshot.val();
        console.log('Fetched Tire 1 Temp:', tire1Temp);  // Log to check if the data is fetched

        // Update UI with the retrieved temperature
        if (tire1Temp !== null) {
            document.getElementById('Temperature1').innerText = tire1Temp.toFixed(2) + '°C';
        } else {
            document.getElementById('Temperature1').innerText = 'No data available';
        }
    });
}

// Initialize the tire temperature update function
updateTireTemperature();

// TKPH Calculation Logic
function calculateTKPH() {
    // Get input values for the TKPH calculation
    var emptyLoad = parseFloat(document.getElementById("emptyLoad").value);
    var loadedLoad = parseFloat(document.getElementById("loadedLoad").value);
    var operatingHours = parseFloat(document.getElementById("operatingHours").value);
    var cyclesPerDay = parseFloat(document.getElementById("cyclesPerDay").value);
    var distancePerCycle = parseFloat(document.getElementById("distancePerCycle").value);

    // Validate input values
    if (isNaN(emptyLoad) || isNaN(loadedLoad) || isNaN(operatingHours) ||
        isNaN(cyclesPerDay) || isNaN(distancePerCycle) ||
        emptyLoad <= 0 || loadedLoad <= 0 || operatingHours <= 0 || cyclesPerDay <= 0 || distancePerCycle <= 0) {
        alert("Please enter valid positive numbers for all fields.");
        return;
    }

    // Calculate average load and speed
    var averageLoad = (emptyLoad + loadedLoad) / 2;
    var averageSpeed = (distancePerCycle * cyclesPerDay) / operatingHours;

    // Calculate TKPH (Ton-Kilometer per Hour)
    var tkph = averageSpeed * (averageLoad / 1000); // Convert kg to tonnes

    // Display the result in the UI
    document.getElementById("result").innerHTML = `
        Average Load: ${averageLoad} kg (${(averageLoad / 1000).toFixed(2)} tonnes)<br>
        Average Speed: ${averageSpeed.toFixed(2)} km/h<br>
        TKPH: ${tkph.toFixed(2)}<br>
    `;
}

// Reset Form Logic
function resetForm() {
    document.getElementById("emptyLoad").value = '';
    document.getElementById("loadedLoad").value = '';
    document.getElementById("operatingHours").value = '';
    document.getElementById("cyclesPerDay").value = '';
    document.getElementById("distancePerCycle").value = '';
    document.getElementById("result").innerHTML = '';
}
