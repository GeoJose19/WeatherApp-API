
const url="https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=72d03d947e5fbccb70c86a8e66dfcece&q="
let searchBox=document.querySelector('.search input')
let searchBtn=document.querySelector('.searchBtn')
let imageIcon=document.querySelector('.imageIcon')
let imageIconDiv=document.querySelector(".imageIcon")
async function checkWeather(city){
    const response=await fetch(url+city)
    var data=await response.json()
    console.log(data)
    console.log(data.name)
    console.log(data.weather[0].main)
    console.log(data.main.humidity)
    console.log(data.wind.speed)

    document.querySelector('.city-name').innerHTML=data.name
    document.querySelector('.temp').innerHTML=Math.round(data.main.temp)+'°C'
    document.querySelector('.humidity').innerHTML=data.main.humidity+'%'
    document.querySelector('.wind').innerHTML=data.wind.speed+'km/h'

    console.log(imageIconDiv)
    if(data.weather[0].main=="Clear"){
        imageIcon.src="images/clear.png"
    }
    else if(data.weather[0].main=="Clouds"){
        imageIcon.src="images/clouds.png"
    }
    else if(data.weather[0].main=="Rain"){
        imageIcon.src="images/rain.png"
    }
    else if(data.weather[0].main=="Drizzle"){
        imageIcon.src="images/drizzle.png"
    }
    else if(data.weather[0].main=="Misty"){
        imageIcon.src="images/mist.png"
    }

    
    
}
searchBtn.addEventListener('click',()=>{
    checkWeather(searchBox.value)
})

