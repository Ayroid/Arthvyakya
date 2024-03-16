// MODULES IMPORT
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { Database } from "./config/database.js";

// ROUTERS
import { USERROUTER } from "./routers/userRouter.js";
import { ATTACKROUTER } from "./routers/ddosRouter.js";

// CONFIG
dotenv.config();

// CONSTANTS
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

// INTIALIZING EXPRESS
const app = express();

// DATABASE
const database = new Database(MONGODB_URI);
database.connect();

// MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Serve static files from the 'images' directory
app.use("/api/images", express.static("public/images"));

// TEST ROUTE
app.use("/api/test", (req, res) => {
  res.send("Server is running ✅");
});

//ROUTES
app.use("/api/user", USERROUTER);
app.use("/api/attacks", ATTACKROUTER);

// DATABASE DISCONNECTION
process.on("SIGINT", () => {
  database
    .disconnect()
    .then(() => {
      process.exit(0);
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
});

// LISTEN
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} ✅`);
});
