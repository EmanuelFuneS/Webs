import fs from "fs";
import path from "path";

import dotenv from "dotenv";
import { Sections } from "../types/common";

dotenv.config();

interface ImageObject {
  url: string;
  mime: string;
  [key: string]: unknown;
}

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
    return data;
  } catch (error) {
    console.error("Error fetching and save Data:", error);
    process.exit(1);
  }
}
export async function collectImages(
  obj: unknown,
  images: ImageObject[],
): Promise<ImageObject[]> {
  if (!obj || typeof obj !== "object") return images;

  if ("url" in obj && "mime" in obj) {
    images.push(obj as ImageObject);
    return images;
  }

  if (Array.isArray(obj)) {
    for (const item of obj) await collectImages(item, images);
  } else {
    for (const value of Object.values(obj)) await collectImages(value, images);
  }
  return images;
}

export async function downloadImages(sections: Sections[]) {
  const images = await collectImages(sections, []);

  if (images.length === 0) {
    throw new Error("No images found in data");
  }

  if (fs.existsSync("public/strapi-images")) {
    fs.rmSync("public/strapi-images", { recursive: true });
  }

  fs.mkdirSync("public/strapi-images", { recursive: true });

  for (const img of images) {
    const url = `${STRAPI_URL}${img.url}`;
    const filename = path.basename(img.url);
    const localPath = `public/strapi-images/${filename}`;

    const response = await fetch(url);
    const buffer = await response.arrayBuffer();

    fs.writeFileSync(localPath, Buffer.from(buffer));
    img.url = `/strapi-images/${filename}`;

    console.log(`Image saved to ${localPath}`);
  }
}

const result = await fetchAndSave();

if (!result) {
  throw new Error("Data is not defined");
}
await downloadImages(result.data.sections);
