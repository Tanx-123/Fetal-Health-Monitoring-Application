# Fetal Health Monitoring Application

This project is a web application that predicts the fetal health status (Normal, Suspect, or Pathological) based on various input features related to fetal monitoring. The application consists of three main components:

1. A Flask API that loads a pre-trained machine learning model and provides an endpoint to make predictions.
2. An Express.js server that acts as a proxy between the React application and the Flask API.
3. A React application that provides a user interface to input the required features and displays the predicted fetal health status.

## Prerequisites

Before running the application, make sure you have the following installed:

- Python (version 3.8 or later)
- Node.js (version 12 or later)
- npm (usually bundled with Node.js)
