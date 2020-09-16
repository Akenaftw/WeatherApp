let BuildApi = () =>{
    let cityName = document.getElementById("location").value;
    let APIKey= config
    let url = "api.openweathermap.org/data/2.5/weather?q=" + cityName +"&APPID=" + APIKey
}

