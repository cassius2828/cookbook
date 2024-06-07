const express = require("express");
const router = express.Router();

///////////////////////////
// Landing Page Route
///////////////////////////
router.get("/", (req, res) => {
  // Render the index page for recipes
  res.render("recipes/index.ejs");
});

///////////////////////////
// New Recipe Form Route
///////////////////////////
router.get("/new", (req, res) => {
  // Render the new recipe form
  res.render("recipes/new.ejs");
});

///////////////////////////
// Create New Recipe Route
///////////////////////////
router.post("/new", (req, res) => {
  // Process the form submission and create a new recipe
  res.send("create new recipe action");
});

///////////////////////////
// View Recipe Details Route
///////////////////////////
router.get("/:recipeId", (req, res) => {
  // Render the page to show details of the specific recipe
  res.render("recipes/show.ejs");
});

///////////////////////////
// Edit Recipe Form Route
///////////////////////////
router.put("/:recipeId", (req, res) => {
  // Render the form for editing the specific recipe
  res.send("edit recipe");
});

///////////////////////////
// Delete Recipe Action Route
///////////////////////////
router.delete("/:recipeId", (req, res) => {
  // Process the request to delete the specific recipe
  res.render("recipes/show.ejs");
});

module.exports = router;
