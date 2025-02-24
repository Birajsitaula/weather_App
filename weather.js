import axios from "axios";
import "dotenv/config";

const apiKey = process.env.WEATHER_API_KEY;

async function getWeather(city) {
  try {
    const response = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    const data = response.data;
    return {
      city: data.name,
      temperature: data.main.temp,
      description: data.weather[0].description,
      humidity: data.main.humidity,
      wind: data.wind, // removing .speed
    };
  } catch (err) {
    console.error(err);
  }
}

export default getWeather;
