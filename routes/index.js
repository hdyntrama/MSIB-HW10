const express = require("express");
const moviesRoute = require("./moviesRoute");
const usersRoute = require("../routes/usersRoute");
const router = express.Router();

router.use("/users", usersRoute);
router.use("/movies", moviesRoute);

module.exports = router;
