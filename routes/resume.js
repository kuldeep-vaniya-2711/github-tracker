const express = require("express");

const router = express.Router();

const path = require("path");

const saveVisitor = require("../utils/saveVisitor");

router.get("/", (req, res) => {

    saveVisitor("Resume", req);

    res.download(
        path.join(__dirname, "..", "resume", "resume.pdf")
    );

});

module.exports = router;