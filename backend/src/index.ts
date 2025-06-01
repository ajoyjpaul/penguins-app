import express, { Request, Response } from "express";
import { http } from "@google-cloud/functions-framework";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/api/health", (req: Request, res: Response) => {
  res.send("GCF backend is healthy!");
});

// Export the app as a Google Cloud Function (temp)
http("penguinsApi", app);
