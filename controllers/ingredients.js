const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("ingredients page");
});

router.get("/new", (req, res) => {
  res.send("create an ingredient");
});
//
router.get("/:recipeId", (req, res) => {
  res.send("get a specific ingredient by id");
});
module.exports = router;
