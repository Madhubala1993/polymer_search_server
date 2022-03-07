import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";
import { repoRouter } from "./routes/repo.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT;

const MONGO_URL = process.env.MONGO_URL;

async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect();
  console.log("Mongo is connected");
  return client;
}

export const client = await createConnection();

app.use(express.json());
app.use(cors());

app.get("/", (request, response) => {
  response.send("Hello!");
});

app.use("/repo", repoRouter);

app.listen(PORT, () => console.log("SERVER STARTED ON PORT", PORT));
