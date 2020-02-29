class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feelsLike = document.getElementById('w-feels-like');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather) {
        this.location.textContent = `WEATHER: ${weather.name}, ${weather.sys.country}`;
        this.desc.textContent = `Description: ${weather.weather[0].description}`;
        this.string.textContent = `Temperature:${weather.main.temp}`
        this.details.textContent = `Longitude: ${weather.coord.lon} Latitude:${weather.coord.lat}`
        this.icon.setAttribute('src', weather.weather[0].icon);
        this.humidity.textContent = `Humidity: ${weather.main.humidity}`;
        this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like}`;
        this.wind.textContent = `Wind: ${weather.wind.speed} ${weather.wind.deg}`;
    }
}