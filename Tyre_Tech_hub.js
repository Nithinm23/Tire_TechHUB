// Firebase configuration (use your actual Firebase config)
var firebaseConfig = {
    apiKey: "AIzaSyC9xBA-9YeXho9rSsTBIfEIbfQ_8zIHkN8",
    authDomain: "tyre-tech-hub.firebaseapp.com",
    databaseURL: "https://tyre-tech-hub-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "tyre-tech-hub",
    storageBucket: "tyre-tech-hub.firebasestorage.app",
    messagingSenderId: "269127952242",
    appId: "1:269127952242:web:53d16ca1d42d38504a5feb"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database
var database = firebase.database();

// Function to update tire temperature and pressure from Firebase
function updateTireData() {
    // Reference to the sensor data (pressure and temperature)
    var sensorRef = database.ref('sensor');

    // Real-time listener for tire data
    sensorRef.on('value', function(snapshot) {
        var data = snapshot.val();

        // Fetch pressure and temperature for Tire 1
        if (data) {
            var pressure1 = data.pressure;
            var temperature1 = data.temperature;

            // Update UI with the retrieved data
            if (pressure1 !== null) {
                document.getElementById('Tire 1').innerText = pressure1 + ' PSI';
            } else {
                document.getElementById('pressure1').innerText = 'No data available';
            }

            if (temperature1 !== null) {
                document.getElementById('Temperature1').innerText = temperature1 + '°C';
            } else {
                document.getElementById('Temperature1').innerText = 'No data available';
            }
        }
    });
}

// Call the function to update tire data initially
updateTireData();

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
