const apikey = "a6d6b0e82fbd6b3068655d76b62d27a2";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();
        console.log(data);
    
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "image/cloud.png";
    
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "image/clear1.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "image/rainicon.png";
    
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "image/drizzle1.png";
    
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "image/mist.png";
        }
        
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
   

}

searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value);
})

