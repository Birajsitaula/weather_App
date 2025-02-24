import express from "express";
import weather from "./weather.js";
import cors from "cors";

import "dotenv/config";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // Enable CORS for all routes
const { PORT } = process.env;

app.get("/weather/:city", async (req, res) => {
  const { city } = req.params;
  try {
    const weatherData = await weather(city);
    res.status(200).json(weatherData);
  } catch (err) {
    console.error("There is an error while get the city ", city);
  }
});

const server = app.listen(PORT, () => {
  console.log("The server is started successfully");
});

const shutdown = () => {
  console.log("The server is shutting down...");
  server.close(() => {
    console.log("The server is shut down successfully");
  });
};

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
