const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const path = require("path")
const app = express();
const urlRoutes = require("./routes/Urlroutes.js");
app.use(express.json());
app.use(express.static(path.join(__dirname, '/public')));
dotenv.config();

app.use("/api", urlRoutes);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.error("MongoDB connection error:", error));

app.listen(3000, () => console.log("Server started on http://localhost:3000"));