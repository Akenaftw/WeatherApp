// creates
let createApi = () => {
    let cityName = document.getElementById("location").value;
    let APIKey = config;
    let fetchAdress = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=metric&APPID=" + APIKey;
    console.log(fetchAdress)
    fetchweather(fetchAdress);

}
//trigger for the modified url to gather specific api data
document.getElementById("trigger").addEventListener("click", createApi)
var weather = {
    date: "",
    image: "",
    weather: "",
    temperatureMax: "",
    temperatureMin: "",
    temperatureAverage: "",
    humidity: "",
    windSpeed: "",
}

function fetchweather(url) {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data)
        for (var i = 0; i < 6; i++) {
            weather.image = data["list"][i]["weather"][0]["icon"];
            weather.temperatureMax = data["list"][i]["main"]["temp_max"];
            weather.temperatureMin = data["list"][i]["main"]["temp_min"];
            weather.temperatureAverage = data["list"][i]["main"]["temp"];
            weather.humidity = data["list"][i]["main"]["humidity"];
            weather.windSpeed = data["list"][i]["wind"]["speed"];
            console.log(JSON.stringify(weather));
            today(i,weather)
            }

    })
        .catch(function (error) {
            console.log(error)
        })

}
function displayWeather(data){
    let extraDay = document.createElement("div");
    let target = document.getElementById("target")
    extraDay.classList.add("days");
    extraDay.innerHTML =
        data.date +
        "<br> <img src=\"http://openweathermap.org/img/wn/"+ data.image +"@2x.png\">
        "<br> Max-temperature= " + data.temperatureMax +
        "<br> Min-temperature= " + data.temperatureMin +
        "<br> Average temperature = "+ data.temperatureAverage +
        "<br> humidity = " + data.humidity +
        "<br> windspeed = " + data.windSpeed + ".";
    target.appendChild(extraDay);
};

function today(i,weather) {
    var today = new Date()
    var dd = today.getDate()+ i;
    var mm = today.getMonth();
    var yyyy = today.getFullYear();
    today= dd + "/" + mm + "/" + yyyy;
    weather.date = today;
    displayWeather(weather);
    console.log(today);
}





