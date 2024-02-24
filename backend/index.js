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

const upload = multer({
  storage: storage,
});

//creating upload endpoint for images
app.use("/images", express.static("upload/images"));
app.post("/upload", upload.single("product"), (req, res) => {
  res.json({
    success: 1,
    profile_url: `http://localhost:${port}/images/${req.file.filename}`,
  });
});

//creating schema for products
const Products = mongoose.model("product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
});

app.post("/add-product", async (req, res) => {
  let products = await Products.findOne({});
  let id;
  if (products.length > 0) {
    let last_product_array = products.slice(-1);
    let last_product = last_product_array[0];
    id = last_product.id + 1;
  } else id = 1;
  const product = new Products({
    id: id,
    name: req.body.name,
    image: req.body.image,
    category: req.body.category,
    new_price: req.body.new_price,
    old_price: req.body.old_price,
  });
  console.log(product);
  await product.save();
  console.log("save");
  res.json({
    success: true,
    name: req.body.name,
  });
});

//API for deleting products
app.post("/remove-product", async (req, res) => {
  await Products.findOneAndDelete({
    id: req.body.id,
  });
  console.log("removed");
  res.json({
    success: true,
    name: req.body.name,
  });
});

//API for getting all products
app.get("/get-products", async (req, res) => {
  let products = await Products.find({});
  res.json(products);
});

app.listen(port, (error) => {
  if (!error) {
    console.log("Server running in " + port);
  } else {
    console.log("Error: " + error);
  }
});
