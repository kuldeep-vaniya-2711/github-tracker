const express = require("express");

const router = express.Router();

const fs = require("fs");

const path = require("path");

router.get("/", (req, res) => {

    res.sendFile(
        path.join(__dirname, "..", "public", "admin.html")
    );

});

router.get("/api/visitors", (req, res) => {

    try {

        const data = fs.readFileSync("visitors.json", "utf8");

        res.json(JSON.parse(data));

    } catch {

        res.json([]);

    }

});

module.exports = router;