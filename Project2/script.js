document.getElementById('convert-button').addEventListener('click', function () {
    var fromValue = document.getElementById('value-input').value;
    var fromUnit = document.getElementById('from-unit').value;
    var toUnit = document.getElementById('to-unit').value;
    var result;

    if (fromUnit === 'cm' && toUnit === 'inch') {
        result = fromValue / 2.54;
    } else if (fromUnit === 'inch' && toUnit === 'cm') {
        result = fromValue * 2.54;
    }

    document.getElementById('result').textContent = "Result: " + result.toFixed(2) + " " + toUnit;
});

document.getElementById('value-input').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        document.getElementById('convert-button').click();
    }
});