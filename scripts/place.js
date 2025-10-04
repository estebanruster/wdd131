const temperature = 24;
const wind = 11;
const windChill = document.querySelector(".windchill");

function formula(t, v) {
    return 13.12 + 0.6215 * t - 11.37 * (Math.pow(v, 0.16)) + 0.3965 * t * (Math.pow(v, 0.16));
}

if (temperature <= 10 && wind > 4.8 ) {
    windChill.textContent = `${formula(temperature, wind)} °C`;
}
else {
    windChill.textContent = "N/A";
}
