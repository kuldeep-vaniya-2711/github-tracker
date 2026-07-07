const express = require("express");

const router = express.Router();

const saveVisitor = require("../utils/saveVisitor");

router.get("/", (req, res) => {

    saveVisitor("LinkedIn", req);

    res.redirect("https://www.linkedin.com/in/kuldeep-vaniya-12166b247");

});

module.exports = router;