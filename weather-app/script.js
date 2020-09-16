// creates
let createApi = () => {
    let cityName = document.getElementById("location").value;
    let APIKey = config;
    let fetchAdress = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=metric&APPID=" + APIKey;
    fetchweather(fetchAdress);

}
//trigger for the modified url to gather specific api data
document.getElementById("trigger").addEventListener("click", createApi)
var weather = {
    temperatureMax: "",
    temperatureMin: "",
    temperatureAverage: "",
    humidity: "",
    windSpeed:"",

}

function fetchweather(url) {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data)
        for (let i = 0; i < 6; i++) {
            weather.temperatureMax = data["list"][i]["main"]["temp_max"];
            weather.temperatureMin = data["list"][i]["main"]["temp_min"];
            weather.temperatureAverage = data["list"][i]["main"]["temp"];
            weather.humidity = data["list"][i]["main"]["humidity"];
            weather.windSpeed = data["list"][i]["wind"]["speed"];
            console.log(JSON.stringify(weather));
        }
    })
        .catch(function (error) {
            console.log(error)
        })

}


