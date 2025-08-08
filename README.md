# Weather_Card


A simple  web application that displays the current weather information for any city in the world. The project features a clean, responsive design with dynamic background images that change based on the current weather conditions.

## ✨ Features

* **Real-time Weather Data:** Fetches and displays real-time weather information from a third-party API.
* **Dynamic Backgrounds:** The card's background image changes dynamically to match the weather condition (e.g., sunny, cloudy, rainy).
* **Essential Data Points:** Shows key weather information including temperature, humidity, wind speed, and weather description.
* **City Search:** Allows users to search for the weather in any city.
* **Error Handling:** Provides user-friendly alerts for invalid city names or network issues.
* **Responsive Design:** The UI is optimized for both desktop and mobile screens.

## 📸 Screenshot

Here's a visual representation of the weather card's design and functionality:



## 🛠️ Technologies Used

* **HTML:** For the project's structure.
* **CSS:** For styling, including the modern, elegant UI and background transitions.
* **JavaScript:** To handle the API calls, DOM manipulation, and dynamic content updates.
* **OpenWeatherMap API:** A free and easy-to-use API for fetching weather data.

## 🚀 Setup and Installation

Follow these steps to get a copy of the project running on your local machine.

### Prerequisites

* A web browser.
* A code editor (e.g., VS Code).
* A free API key from [OpenWeatherMap](https://openweathermap.org/).

### Instructions

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/Indhumathi-SivaShanmugam/Weather_Card.git
    cd Weather
    ```

2.  **Get an API Key:**
    * Sign up for a free account on [OpenWeatherMap](https://openweathermap.org/).
    * Go to the "API keys" tab to find your personal key.

3.  **Update the JavaScript File:**
    * Open `script.js` in your code editor.
    * Replace `"YOUR_API_KEY"` with your actual API key:
        ```javascript
        const apiKey = "YOUR_API_KEY"; // <-- Paste your key here
        const apiUrl = "[https://api.openweathermap.org/data/2.5/weather?units=metric&q=](https://api.openweathermap.org/data/2.5/weather?units=metric&q=)";
        // ... rest of the code
        ```

4.  **Run the Project:**
    * Open the `index.html` file in your web browser. You can simply double-click it.

## 💡 Usage

* Enter the name of any city in the search box.
* Click the "Search" button or press `Enter`.
* The weather card will update with the current weather conditions for that city.

