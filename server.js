const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const morgan = require("morgan");
const session = require("express-session");
const passUserToView = require("./middleware/pass-user-to-view.js");
const isSignedIn = require("./middleware/is-signed-in.js");
const path = require("path");
///////////////////////////
// Import Controllers
///////////////////////////
const authCtrl = require("./controllers/auth.js");
const recipeCtrl = require("./controllers/recipes.js");
const ingredientCtrl = require("./controllers/ingredients.js");

///////////////////////////
// Set Up Port
///////////////////////////
const port = process.env.PORT ? process.env.PORT : 3000;

///////////////////////////
// Set Up Public Dir
///////////////////////////
const staticDir = path.join(__dirname, "public");
app.use(express.static(staticDir));

///////////////////////////
// Connect to MongoDB
///////////////////////////
mongoose.connect(process.env.MONGODB_URI);

mongoose.connection.on("connected", () => {
  console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
});

///////////////////////////
// Middleware
///////////////////////////
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(morgan("dev"));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
// custom middleware
app.use(passUserToView);
// app.use(isSignedIn)
///////////////////////////
// Routes
///////////////////////////

// Landing Page
app.get("/", (req, res) => {
  res.render("index.ejs", {
    user: req.session.user,
  });
});

// VIP Lounge
app.get("/vip-lounge", (req, res) => {
  if (req.session.user) {
    res.send(`Welcome to the party ${req.session.user.username}.`);
  } else {
    res.send("Sorry, no guests allowed.");
  }
});

// Auth Routes
app.use("/auth", authCtrl);
// recipe routes
app.use("/recipes", recipeCtrl);
// ingredient routes
app.use("/ingredients", ingredientCtrl);

///////////////////////////
// Start Server
///////////////////////////
app.listen(port, () => {
  console.log(`The express app is ready on port ${port}!`);
});
