class Weather {
    constructor(city) {
        this.apiKey = "c025da23c3fa730bd5a60314d393f61b";
        this.city = city;
        this.country = country;
    }

    // Fetch weather from API
    async getWeather() {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&units=imperial&APPID=${this.apiKey}`
        )
        const responseData = await response.json();
        return responseData
    }

    // Change weather location
    changeLocation(city, country) {
        this.city = city;
        this.country = country;
    }
}


