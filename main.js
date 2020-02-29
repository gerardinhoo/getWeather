// INIT LOCAL STORAGE
const storage = new Storage();

// Get stored location data
const weatherLocation = storage.getLocationData()
// Init weather object
const weather = new Weather(weatherLocation.city, weatherLocation.country);
// Init UI
const ui = new UI();


// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change Location event
document.querySelector("#w-change-btn").addEventListener("click", () => {
    const city = document.querySelector("#city").value;
    const country = document.querySelector("#country").value;

    // Change Location
    weather.changeLocation(city, country);

    // Set Location to local storage
    storage.setLocationData(city, country);

    // Get and display weather
    getWeather();

    // Close Modal
    $("#locModal").modal("hide");
})


function getWeather() {
    weather.getWeather()
        .then(results => {
            ui.paint(results);
        })
        .catch(err => console.log(err));
}





