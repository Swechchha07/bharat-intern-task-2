// script.js

function convertToFar() {
    const celsiusInput = document.getElementById('celsius').value;
    const resultElement = document.getElementById('result');

    if (celsiusInput !== '') {
        const celsius = parseFloat(celsiusInput);
        const fahrenheit = (celsius * 9/5) + 32;
        resultElement.textContent = `${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`;
    } else {
        resultElement.textContent = 'Please enter a temperature in Celsius.';
    }
}

function refreshPage() {
    location.reload();
}
