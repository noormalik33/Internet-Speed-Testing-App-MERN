import express from "express";
import { exec } from "node:child_process";
import cors from "cors";
import axios from "axios";
import "dotenv/config";

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000", // Frontend URL
  })
);
const PORT = process.env.PORT;

// Fetch user IP and location using ip-api
const getUserDetails = async () => {
  try {
    const response = await axios.get("http://ip-api.com/json/");
    return {
      ip: response.data.query,
      location: `${response.data.city}, ${response.data.country}`,
    };
  } catch (error) {
    console.error("IP-API error:", error);
    return { ip: "N/A", location: "N/A" };
  }
};

// Fetch download speed using fast-cli
const getSpeed = async () => {
  return new Promise((resolve, reject) => {
    exec("fast --download --json", (err, stdout, stderr) => {
      if (err || stderr) {
        console.error("Fast CLI error:", err || stderr);
        reject("Error fetching speed");
      } else {
        try {
          const result = JSON.parse(stdout);
          resolve(result.downloadSpeed);
        } catch (parseError) {
          console.error("Parsing error:", parseError);
          reject("Error parsing speed data");
        }
      }
    });
  });
};

// Main route
app.get("/", async (req, res) => {
  try {
    const [userDetails, downloadSpeed] = await Promise.all([
      getUserDetails(),
      getSpeed(),
    ]);

    res.json({
      downloadSpeed,
      userIp: userDetails.ip,
      userLocation: userDetails.location,
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
