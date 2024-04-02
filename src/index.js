
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
// import multer from "multer";
// import multerS3 from 'multer-s3';

const app = express();


// use middleware
app.use(cors());
app.use(express.json());
dotenv.config();
const port = process.env.PORT || 5000;

import path from "path"; // Import the 'path' module
import multer from "multer";
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


import paymentRoute from "./routes/payment/payment.route.js";
// user route
import course from "./routes/courses/courses.route.js";
import userRoute from "./routes/user/user.route.js";
import quiz from "./routes/PolitiQTest/testimonial.route.js";
import faq from "./routes/faq/testimonial.route.js";
import testimonial from "./routes/testimonial/testimonial.route.js";
import contact from "./routes/contact/testimonial.route.js";
import newslatter from "./routes/newsLatter/testimonial.route.js";
import askquestions from "./routes/askquestions/testimonial.route.js";
import teacher from "./routes/teacher/testimonial.route.js";
import admin from "./routes/admin/user.route.js";
import talent from "./routes/talents/user.route.js";
import experience from "./routes/experience/user.route.js";
import mentor from "./routes/mentor/user.route.js";
import org from "./routes/org/user.route.js";
import constituenly from "./routes/constituenly/user.route.js";
import matchmaking from "./routes/matchmaking/user.route.js";
import training_workshop_seminar from "./routes/training_workshop_seminar/user.route.js";
import consultancy from "./routes/consultancy/user.route.js";
import partner from "./routes/partner/user.route.js";
import apply_internship from "./routes/apply_internship/user.route.js";
import contribute_course from "./routes/contribute_course/user.route.js";
import team_staff from "./routes/team_staff/user.route.js";


// connect to database
dbConnection();

// route
// using
app.use("/api/v1/websiteInfo", websiteInfo);
app.use("/api/v1/blogs", blogs);
app.use("/api/v1/user", userRoute);
app.use("/api/v1/services", services); 
// using end



// others buttons
app.use("/api/v1/contact", contact);
app.use("/api/v1/matchmaking", matchmaking);
app.use("/api/v1/training_workshop_seminar", training_workshop_seminar);
app.use("/api/v1/consultancy", consultancy);
app.use("/api/v1/partner", partner);
app.use("/api/v1/apply_internship", apply_internship);
app.use("/api/v1/contribute_course", contribute_course);
app.use("/api/v1/team_staff", team_staff);
// others buttons end

app.use("/api/v1/payment", paymentRoute);

app.use("/api/v1/course", course);


app.use("/api/v1/quiz", quiz);
app.use("/api/v1/faq", faq);
app.use("/api/v1/talent", faq);
app.use("/api/v1/testimonial", testimonial);
app.use("/api/v1/newsletter", newslatter);
app.use("/api/v1/askquestions", askquestions);
app.use("/api/v1/admin", admin);
app.use("/api/v1/teacher", teacher);
app.use("/api/v1/talentperson", talent);
app.use("/api/v1/experience", experience);
app.use("/api/v1/mentor", mentor);
app.use("/api/v1/organization", org);
app.use("/api/v1/constituenly", constituenly);




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
