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

