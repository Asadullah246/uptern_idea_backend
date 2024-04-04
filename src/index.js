
import cors from "cors";
import dotenv from "dotenv";
import express from "express";

const app = express();


// use middleware
app.use(cors());
app.use(express.json());
dotenv.config();
const port = process.env.PORT || 5000;
import path from "path"; // Import the 'path' module
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
console.log("path is ",path.join(__dirname, "uploads") )

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/src/uploads", express.static(path.join(__dirname, "uploads")));


// database adding
import dbConnection from "./db/db.js";

// routes
import websiteInfo from "./routes/websiteInfo/testimonial.route.js";
import blogs from "./routes/blogs/testimonial.route.js";
import services from "./routes/services/testimonial.route.js";
import userRoute from "./routes/user/user.route.js";
import team from "./routes/team/testimonial.route.js";
import testimonial from "./routes/testimonial/testimonial.route.js";


// connect to database
dbConnection();

// route
app.use("/api/v1/websiteInfo", websiteInfo);
app.use("/api/v1/blogs", blogs);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/services", services);
app.use("/api/v1/team", team);
app.use("/api/v1/testimonial", testimonial);

// routes

app.get("/", (req, res, next) => {
  console.log("connected");
  res.send("server running");
});





app.all("*", (req, res, next) => {
  res.status(404).json({
    message: `Can't find ${req.originalUrl} on this server!`,
  });
});
app.listen(port, () => {
  console.log(` server running on port: ${port}`);
});
