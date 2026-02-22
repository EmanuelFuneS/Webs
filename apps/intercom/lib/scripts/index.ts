import fs from "fs";
import path from "path";

import dotenv from "dotenv";

dotenv.config();

const STRAPI_URL = process.env.STRAPI_URL || "http://localhost:1337";
const API_TOKEN = process.env.STRAPI_API_TOKEN;

async function fetchAndSave() {
  try {
    if (!API_TOKEN) {
      throw new Error("API_TOKEN is not defined");
    }
    const response = await fetch(`${STRAPI_URL}/api/feature-page`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${API_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    const outputPath = path.join(
      process.cwd(),
      "lib/data",
      "feature-page.json",
    );

    fs.writeFileSync(outputPath, JSON.stringify(data, null, 2), "utf-8");
    console.log(`Data saved to ${outputPath}`);
  } catch (error) {
    console.error("Error fetching and save Data:", error);
    process.exit(1);
  }
}

fetchAndSave();
