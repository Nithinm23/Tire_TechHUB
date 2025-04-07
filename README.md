# Tire_Tech_HUB

## Overview
<p align="justify">
TyreTech Hub is a real-time monitoring and maintenance system designed specifically for dumper tyres. This system continuously monitors tyre conditions (temperature and pressure) through sensors, displaying the data on an easy-to-use web interface. The website is built using HTML, CSS, and JavaScript, and is connected to Google Firebase for real-time data storage and retrieval. The hardware components include the ESP8266 module, a temperature sensor, and an air pressure sensor for accurate tyre condition monitoring.
</p>

## Abstract
<p align="justify">
TyreTech Hub provides a comprehensive solution for monitoring and maintaining dumper tyres through real-time data tracking. By leveraging sensors, such as a temperature sensor and air pressure sensor, the system continuously collects tyre health data, including temperature and pressure, providing operators with crucial insights for maintenance. The data is displayed on a web interface and stored in Firebase for real-time updates and historical tracking. The integration of the ESP8266 module enables wireless communication between the sensors and the cloud, making this system efficient and accessible from anywhere.
</p>

## Table of Contents
- [Demo](#Demo)
- [Features](#Features)
- [Hardware](#Hardware)
- [Tech Stack](#Tech-Stack)
- [Installation Guide](#Installation-Guide)
- [Result](#Result)
- [Conclusion](#Conclusion)

---

## Demo
[TyreTech Hub Demo](https://nithinm23.github.io/Tire_Tech_HUB/)

<p align="center"><b>Simulation Demo</b></p>

---

## Features

- **Real-Time Data Monitoring**:  
  View live tyre data such as temperature and pressure, updated in real-time.

- **User-Friendly Web Interface**:  
  A sleek, responsive web interface built with HTML, CSS, and JavaScript to ensure smooth navigation.

- **Google Firebase Integration**:  
  Real-time data is collected, stored, and retrieved seamlessly with Firebase.

- **Tyre Maintenance Alerts**:  
  Receive instant alerts when abnormal temperature or pressure readings are detected, helping prevent tyre failures.

- **Data Visualization**:  
  Graphical representation of real-time data for better tracking and analysis.

---

## Hardware

### Components Used
| Component               | Quantity | Description                                      |
| :---------------------- | :------: | :----------------------------------------------: |
| **ESP8266**             | 1        | Microcontroller for Wi-Fi communication and data transfer |
| **Temperature Sensor**  | 1        | Sensor used to measure the tyre temperature      |
| **Air Pressure Sensor** | 1        | Sensor used to monitor tyre air pressure         |
| **Power Supply**        | 1        | Powers the ESP8266 and sensors                   |

### **Hardware Pinout Diagram**
![Screenshot 2025-03-02 124358](https://github.com/user-attachments/assets/0452a31c-06cc-4bdd-8353-a60d2da876a7)

---

## Tech Stack

- **Frontend**:
  - HTML
  - CSS
  - JavaScript

- **Backend**:
  - Firebase (for real-time database, authentication, and hosting)

- **Hardware**:
  - **ESP8266**: Wireless communication module to send sensor data to the cloud.
  - **DHT22**: Temperature sensor used to monitor tyre temperature.
  - **BMP180/BMP280**: Air pressure sensor used to monitor tyre pressure.

---

## Installation Guide

To get the project running locally on your machine, follow the steps below:

### 1. Clone the Repository:
   
```bash
git clone https://nithinm23.github.io/Tire_Tech_HUB/
```

### 2. **Set Up Hardware**:
- Connect the ESP8266 to the temperature sensor and air pressure sensor.
- Ensure the sensors are connected to the appropriate pins on the ESP8266 (refer to your specific sensor's datasheet for wiring details).

### 3. **Install Dependencies**:
- Install Arduino IDE if you haven't already, and set it up to work with the ESP8266 board.
- Install the necessary libraries for the sensors (e.g., DHT22 library for temperature sensor, BMP180/BMP280 library for pressure sensor).

### 4. **Upload Code to ESP8266**:
- Write and upload the code to read sensor data and send it to Firebase via Wi-Fi using ESP8266.

### 5. **Configure Firebase**:
- Set up a Firebase project and configure your web app with Firebase to store and retrieve data.

---

## **Result**

TyreTech Hub has successfully demonstrated its ability to monitor dumper tyre conditions in real-time using hardware components and real-time cloud integration. Key achievements include:

- **Accurate Sensor Data**: The system provides real-time temperature and pressure readings from the tyre sensors.
- **Wireless Communication**: The ESP8266 module ensures seamless data transfer from the sensors to the cloud.
- **Instant Alerts**: Alerts are triggered when abnormal conditions (such as high temperature or pressure) are detected.
- **Firebase Integration**: All data is securely stored and accessible for real-time monitoring and historical analysis.

---

## **Conclusion**

TyreTech Hub combines hardware and software to provide an efficient and accurate solution for monitoring dumper tyre health. With ESP8266, temperature sensors, and pressure sensors, the system ensures continuous monitoring and alerts for better maintenance. Firebase's real-time data storage and web interface enable users to track and analyze tyre conditions from anywhere, making it a critical tool for heavy-duty vehicle fleets. This project sets the foundation for more advanced solutions in vehicle maintenance and safety.

---

This version now uses plain formatting as requested, removing the bold asterisks. Let me know if you'd like any further adjustments!
