document.getElementById('convert-btn').addEventListener('click', function () {
    const degreeInput = document.getElementById('degree').value;
    const type = document.getElementById('type').value;
    const resultElement = document.getElementById('result');

    if (degreeInput === '') {
        resultElement.innerText = 'Please enter a value!';
        return;
    }

    const degree = parseFloat(degreeInput);

    if (isNaN(degree)) {
        resultElement.innerText = 'Please enter a valid number!';
        return;
    }

    let convertedResults = '';

    if (type === 'celsius') {
        const fahrenheit = (degree * 9 / 5) + 32;
        const kelvin = degree + 273.15;
        convertedResults = `${fahrenheit.toFixed(2)} °F | ${kelvin.toFixed(2)} K`;
    } else if (type === 'fahrenheit') {
        const celsius = (degree - 32) * 5 / 9;
        const kelvin = celsius + 273.15;
        convertedResults = `${celsius.toFixed(2)} °C | ${kelvin.toFixed(2)} K`;
    } else if (type === 'kelvin') {
        const celsius = degree - 273.15;
        const fahrenheit = (celsius * 9 / 5) + 32;
        convertedResults = `${celsius.toFixed(2)} °C | ${fahrenheit.toFixed(2)} °F`;
    }

    resultElement.innerText = convertedResults;
});