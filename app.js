document
  .getElementById("weatherForm")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    const city = document.getElementById("cityInput").value;
    const weatherResult = document.getElementById("weatherResult");
    weatherResult.innerHTML = "Loading...";

    try {
      const response = await fetch(`http://localhost:8000/weather/${city}`);
      if (!response.ok) throw new Error("City not found");

      const data = await response.json({ message: "Didn't find the city " });

      weatherResult.innerHTML = `
        <h2>Weather in ${data.city}</h2>
        <p>Temperature: ${data.temperature} °C</p>
        <p>Description: ${data.description}</p>
        <p>Humidity: ${data.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
      `;
    } catch (error) {
      weatherResult.innerHTML = `<p style="color: red;">${error.message}</p>`;
    }
  });
