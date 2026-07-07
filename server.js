// const express = require("express");

// const app = express();

// const PORT = 3000;

// // GitHub Tracking Route
// app.get("/github", (req, res) => {

//     console.log("==================================");
//     console.log("New Visitor");
//     console.log("Time:", new Date());
//     console.log("IP:", req.ip);
//     console.log("Browser:", req.headers["user-agent"]);
//     console.log("==================================");

//     res.redirect("https://github.com/kuldeep-vaniya-2711");

// });

// app.listen(PORT, () => {
//     console.log(`Server Running on http://localhost:${PORT}`);
// });


// A NEW STEP FOR GITHUB TRACKING PROJECT WHERE WE START TO SAVE VISITERS DATA IN JSON FILE


const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3000;
const path = require("path");


// Visitor ko file me save karne ka function
function saveVisitor(page, req) {

    // visitors.json read karo
    let visitors = [];

    try {
        const data = fs.readFileSync("visitors.json", "utf8");
        visitors = JSON.parse(data);
    } catch (err) {
        visitors = [];
    }

    // New visitor object
    const visitor = {
        page: page,
        time: new Date().toLocaleString(),
        ip: req.ip,
        browser: req.headers["user-agent"]
    };

    // Array me add karo
    visitors.push(visitor);

    // Dobara file me save karo
    fs.writeFileSync(
        "visitors.json",
        JSON.stringify(visitors, null, 2)
    );

    console.log("New Visitor Saved");
}

// GitHub Tracking
app.get("/github", (req, res) => {

    saveVisitor("GitHub", req);

    res.redirect("https://github.com/kuldeep-vaniya-2711");

});

app.get("/admin", (req, res) => {

    res.sendFile(path.join(__dirname, "public", "admin.html"));

});

app.get("/api/visitors", (req, res) => {

    const data = fs.readFileSync("visitors.json");

    const visitors = JSON.parse(data);

    res.json(visitors);

});

app.listen(PORT, () => {

    console.log(`Server Running`);
});