import express from "express";
import weather from "./weather.js";
import cors from "cors";

import "dotenv/config";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // Enable CORS for all routes

app.get("/weather/:city", async (req, res) => {
  const { city } = req.params;
  try {
    const weatherData = await weather(city);
    res.status(200).json(weatherData);
  } catch (err) {
    console.error("There is an error while get the city ", city);
  }
});

app.listen(8000, () => {
  console.log("The server is started successfully");
});
