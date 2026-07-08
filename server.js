require("dotenv").config();



const express = require("express");
const path = require("path");
const session = require("express-session");
const app = express();
const auth = require("./middleware/auth");

console.log("SESSION_SECRET =", process.env.SESSION_SECRET);

app.use(session({

    secret: process.env.SESSION_SECRET,

    resave: false,

    saveUninitialized: false,

    cookie: {

        maxAge: 1000 * 60 * 60

    }

}));

// console.log(process.env.SESSION_SECRET);

const PORT = process.env.PORT || 3000;

// Static Files
app.use(express.json());
app.use(express.static("public"));

// Home
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Routes
app.use("/github", require("./routes/github"));
app.use("/linkedin", require("./routes/linkedin"));
app.use("/resume", require("./routes/resume"));
app.use("/login", require("./routes/login"));
app.use("/logout", require("./routes/logout"));
app.use("/admin", auth, require("./routes/admin"));

/* ==========================================================
   Analytics API
========================================================== */

app.get("/api/analytics", auth, (req, res) => {

    const visitors = require("./utils/saveVisitor").getVisitors();

    const totalVisitors = visitors.length;

    const github = visitors.filter(v => v.page === "GitHub").length;

    const linkedin = visitors.filter(v => v.page === "LinkedIn").length;

    const resume = visitors.filter(v => v.page === "Resume").length;


    const today = new Date().toISOString().split("T")[0];

const todayVisitors = visitors.filter(v =>
    v.time.startsWith(today)
).length;


//     const today = new Date().toISOString().split("T")[0];

// const todayVisitors = visitors.filter(v =>
//     v.time.startsWith(today)
// ).length;

    // const todayVisitors = visitors.filter(v =>
    //     new Date(v.time).toLocaleDateString() === today
    // ).length;

    /* ==========================================
       Hourly Visitor Trend
    ========================================== */

    const hourlyMap = {};

    visitors.forEach(visitor => {

        const hour = new Date(visitor.time).getHours();

        hourlyMap[hour] = (hourlyMap[hour] || 0) + 1;

    });

    const hourlyLabels = [];
    const hourlyCounts = [];

    for (let i = 0; i < 24; i++) {

        hourlyLabels.push(i + ":00");
        hourlyCounts.push(hourlyMap[i] || 0);

    }

    /* ==========================================
       Browser Analytics
    ========================================== */

    const browserMap = {};

    visitors.forEach(v => {

        browserMap[v.browser] = (browserMap[v.browser] || 0) + 1;

    });

    const browserLabels = Object.keys(browserMap);

    const browserCounts = Object.values(browserMap);

    /* ==========================================
       Device Analytics
    ========================================== */

    const deviceMap = {};

    visitors.forEach(v => {

        const device = v.device || "Desktop";

        deviceMap[device] = (deviceMap[device] || 0) + 1;

    });

    const deviceLabels = Object.keys(deviceMap);

    const deviceCounts = Object.values(deviceMap);

    /* ==========================================
       Country Analytics
    ========================================== */

    const countryMap = {};

    visitors.forEach(v => {

        const country = v.country || "Unknown";

        countryMap[country] = (countryMap[country] || 0) + 1;

    });

    const countryLabels = Object.keys(countryMap);

    const countryCounts = Object.values(countryMap);

    /* ==========================================
       Response
    ========================================== */

    res.json({

        totalVisitors,

        github,

        linkedin,

        resume,

        todayVisitors,

        visitors,

        hourlyLabels,

        hourlyCounts,

        browserLabels,

        browserCounts,

        deviceLabels,

        deviceCounts,

        countryLabels,

        countryCounts

    });

});

app.get("/export/csv", (req, res) => {

    const visitors = require("./utils/saveVisitor").getVisitors();

    let csv =
`Page,Time,Country,City,Browser,OS,Device,IP\n`;

    visitors.forEach(v => {

        csv += `${v.page},${v.displayTime},${v.country},${v.city},${v.browser},${v.os},${v.device},${v.ip}\n`;

    });

    res.header("Content-Type", "text/csv");
    res.attachment("visitors.csv");
    res.send(csv);

});

/* ========================================================== */

app.listen(PORT, () => {

    console.log("====================================");
    console.log("🚀 Server Running");
    console.log(`🌐 http://localhost:${PORT}`);
    console.log("====================================");

});