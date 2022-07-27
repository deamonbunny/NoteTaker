const express = require("express");
const router = express.Router();

const noteRoutes = require("./notes");
router.use("/notes",noteRoutes);

module.exports = router;