#include <Arduino.h>
#if defined(ESP32)
  #include <WiFi.h>
#elif defined(ESP8266)
  #include <ESP8266WiFi.h>
#endif
#include <Firebase_ESP_Client.h>

// Firebase configuration
#define WIFI_SSID ""        // Replace with your WiFi SSID
#define WIFI_PASSWORD ""  // Replace with your WiFi password

// Firebase project configuration
#define API_KEY ""  // Replace with your Firebase API Key
#define DATABASE_URL ""  // Replace with your Firebase Database URL

// Firebase configuration objects
FirebaseData fbdo;
FirebaseAuth auth;
FirebaseConfig config;

bool signupOK = false;
unsigned long previousMillis = 0;
const long interval = 3000; // Interval between readings (3 seconds)

void setup() {
  // Start the serial communication
  Serial.begin(115200);
  
  // Simulate sensor initialization
  Serial.println("Initializing sensors...");
  delay(1000); // Simulate sensor boot-up time
  Serial.println("DS18B20 Temperature Sensor: OK");
  Serial.println("MPX5700AP Pressure Sensor: OK");
  
  // Connect to Wi-Fi
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to Wi-Fi");
  
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(300);
  }
  
  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
  
  // Set Firebase configuration
  config.api_key = API_KEY;
  config.database_url = DATABASE_URL;

  // Sign up to Firebase
  if (Firebase.signUp(&config, &auth, "", "")) {
    Serial.println("Firebase sign up successful.");
    signupOK = true;
  } else {
    Serial.printf("Error during Firebase sign up: %s\n", config.signer.signupError.message.c_str());
  }

  // Initialize Firebase
  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);
}

void loop() {
  unsigned long currentMillis = millis();
  
  if (currentMillis - previousMillis >= interval) {
    previousMillis = currentMillis;
    
    // Read data from real sensors here
    // Example:
    // float temperature = getTemperature();
    // float pressure = getPressure();
    
    // For now, print dummy values
    float temperature = 30.0; // Replace with real sensor reading
    float pressure = 30.0;    // Replace with real sensor reading
    
    // Print the readings to the Serial Monitor
    Serial.print("Reading sensors... ");
    Serial.print("Temperature: ");
    Serial.print(temperature, 1);
    Serial.print(" °C, Pressure: ");
    Serial.print(pressure, 1);
    Serial.println(" PSI");

    // Send data to Firebase if connection is ready
    if (Firebase.ready() && signupOK) {
      // Create a JSON object for the sensor data
      FirebaseJson json;
      json.set("temperature", temperature);
      json.set("pressure", pressure);
      
      // Send data to Firebase under the 'sensor' node
      if (Firebase.RTDB.setJSON(&fbdo, "/sensor", &json)) {
        Serial.println("Sensor data sent to Firebase successfully");
      } else {
        Serial.println("Failed to send sensor data to Firebase");
        Serial.println("Reason: " + fbdo.errorReason());
      }
    }
    
    Serial.println("----------------------------------");
  }
}
