const express = require("express");

const router = express.Router();

const saveVisitor = require("../utils/saveVisitor");

router.get("/", (req, res) => {

    saveVisitor("GitHub", req);

    res.redirect("https://github.com/kuldeep-vaniya-2711");

});

module.exports = router;