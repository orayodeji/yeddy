// to get location of a btoswer
let key = "4466c5c22630358d3d7567fb8bcf03b7"

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getPlace(showPlace)
    }else{
        x.innerHtml = "sorry is not supported bythis browser "
    }
}

function getPlace(place){
    let longtitude = place.coords.longtitude;
    let latitude = place.coords.latitude;

    function getCondition(longtitude, latitude)
}

function getCondition(longtitude, latitude){
    let api = `api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longtitude}&appid=${key}`

    fetch(api)
    .then((res)=> res.json())
    .then((data)=>{
    weather.temperature.value = Math.floor(data.main.temp - 273);
    weather.city = 

    })
}