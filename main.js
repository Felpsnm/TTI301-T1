import 'dotenv/config'

const apiKey = process.env.APIKEY
const city = process.env.CITY

async function getCoordinates() {
    try {
        const res = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`);
        
        const data = await res.json();

        let response = {lat: data[0]["lat"], lon: data[0]["lon"]}
        
        return response

    } catch (err) {
        console.log(err.message); //can be console.error
    }
}

async function getWeather() {
    try {
        let coord = await getCoordinates()

        let lat = coord["lat"]
        let lon = coord["lon"]

        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`);
  
        const data = await res.json();
    
        let response = {feels_like: data["main"]["feels_like"], description: data["weather"][0]["description"]}
        
        return response 

    } catch (err) {
        console.log(err.message); //can be console.error
    }
}

let weather = await getWeather()

console.log(weather)