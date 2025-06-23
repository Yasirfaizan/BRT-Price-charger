document.getElementById('calculateBtn').addEventListener('click', function() {
    const distanceInput = document.getElementById('distanceInput');
    const resultArea = document.getElementById('resultArea');
    let Distance = Number(distanceInput.value);

    if (isNaN(Distance) || distanceInput.value.trim() === "") {
        resultArea.textContent = "Please enter a valid distance.";
    } else if (Distance <= 0) {
        resultArea.textContent = "Distance never be zero or less than zero.";
    } else if (Distance >= 0.1 && Distance <= 5) {
        resultArea.textContent = "Amount is 15";
    } else if (Distance >= 5.1 && Distance <= 10) {
        resultArea.textContent = "Amount is 20";
    } else if (Distance >= 10.1 && Distance <= 15) {
        resultArea.textContent = "Amount is 25";
    } else if (Distance >= 15.1 && Distance <= 20) {
        resultArea.textContent = "Amount is 30";
    } else if (Distance >= 20.1 && Distance <= 25) {
        resultArea.textContent = "Amount is 35";
    } else if (Distance >= 25.1 && Distance <= 30) {
        resultArea.textContent = "Amount is 40";
    } else if (Distance >= 30.1 && Distance <= 35) {
        resultArea.textContent = "Amount is 50";
    } else if (Distance >= 40.1 &&Distance <= 45) {
        resultArea.textContent = "Amount is 60";
    } else {
        resultArea.textContent = "BRT Line is not long enough.";
    }
});