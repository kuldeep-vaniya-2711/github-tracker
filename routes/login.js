const express = require("express");
const router = express.Router();

// Temporary credentials
const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

router.post("/", (req, res) => {

    const { username, password } = req.body;

    if (
        username === ADMIN_USERNAME &&
        password === ADMIN_PASSWORD
    ) {

        req.session.loggedIn = true;

        return res.json({
            success: true
        });

    }

    res.status(401).json({
        success: false,
        message: "Invalid Credentials"
    });

});

module.exports = router;