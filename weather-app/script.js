let BuildApi = () =>{
    let cityName = document.getElementById("location").value;
    let APIKey= "e28b71496518be640110fa72f6af25b7"
    let url = "api.openweathermap.org/data/2.5/weather?q=" + cityName +"&APPID=" + APIKey
}

console.log("hello")