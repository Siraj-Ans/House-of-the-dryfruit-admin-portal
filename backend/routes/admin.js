const express = require("express");
const adminsControllers = require("../controllers/admin");

const router = express.Router();

router.post("/createAdmin", adminsControllers.createAdmin);

module.exports = router;
