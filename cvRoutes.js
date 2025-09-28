const express = require("express");
const router = express.Router();
const path = require("path");

// mỗi request mới, require lại controller
router.get("/", (req, res) => {
    const cvController = require(path.join(__dirname, "../controllers/cvController"));
    cvController.getHome(req, res);
});

module.exports = router;
