const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

//Database Connection with mongo
mongoose.connect(
  "mongodb+srv://ksavaliya607:Abcd!234@cluster0.6djdv1x.mongodb.net/e-cart"
);

//Api creation

app.get("/", (req, res) => {
  res.send("Express app is running");
});

//Image storage engine
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

app.listen(port, (error) => {
  if (!error) {
    console.log("Server running in " + port);
  } else {
    console.log("Error: " + error);
  }
});
