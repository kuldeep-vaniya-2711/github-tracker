// // // const express = require("express");

// // // const app = express();

// // // const PORT = 3000;

// // // // GitHub Tracking Route
// // // app.get("/github", (req, res) => {

// // //     console.log("==================================");
// // //     console.log("New Visitor");
// // //     console.log("Time:", new Date());
// // //     console.log("IP:", req.ip);
// // //     console.log("Browser:", req.headers["user-agent"]);
// // //     console.log("==================================");

// // //     res.redirect("https://github.com/kuldeep-vaniya-2711");

// // // });

// // // app.listen(PORT, () => {
// // //     console.log(`Server Running on http://localhost:${PORT}`);
// // // });


// // // A NEW STEP FOR GITHUB TRACKING PROJECT WHERE WE START TO SAVE VISITERS DATA IN JSON FILE


// // const express = require("express");
// // const fs = require("fs");

// // const app = express();
// // const PORT = 3000;
// // const path = require("path");


// // // Visitor ko file me save karne ka function
// // function saveVisitor(page, req) {

// //     // visitors.json read karo
// //     let visitors = [];

// //     try {
// //         const data = fs.readFileSync("visitors.json", "utf8");
// //         visitors = JSON.parse(data);
// //     } catch (err) {
// //         visitors = [];
// //     }

// //     // New visitor object
// //     const visitor = {
// //         page: page,
// //         time: new Date().toLocaleString(),
// //         ip: req.ip,
// //         browser: req.headers["user-agent"]
// //     };

// //     // Array me add karo
// //     visitors.push(visitor);

// //     // Dobara file me save karo
// //     fs.writeFileSync(
// //         "visitors.json",
// //         JSON.stringify(visitors, null, 2)
// //     );

// //     console.log("New Visitor Saved");
// // }

// // // GitHub Tracking
// // app.get("/github", (req, res) => {

// //     saveVisitor("GitHub", req);

// //     res.redirect("https://github.com/kuldeep-vaniya-2711");

// // });

// // app.get("/admin", (req, res) => {

// //     res.sendFile(path.join(__dirname, "public", "admin.html"));

// // });

// // app.get("/api/visitors", (req, res) => {

// //     const data = fs.readFileSync("visitors.json");

// //     const visitors = JSON.parse(data);

// //     res.json(visitors);

// // });

// // app.listen(PORT, () => {

// //     console.log(`Server Running`);
// // });

// // const express = require("express");

// // const app = express();

// // const PORT = 3000;

// // // GitHub Tracking Route
// // app.get("/github", (req, res) => {

// //     console.log("==================================");
// //     console.log("New Visitor");
// //     console.log("Time:", new Date());
// //     console.log("IP:", req.ip);
// //     console.log("Browser:", req.headers["user-agent"]);
// //     console.log("==================================");

// //     res.redirect("https://github.com/kuldeep-vaniya-2711");

// // });

// // app.listen(PORT, () => {
// //     console.log(`Server Running on http://localhost:3000`);
// // });


// // A NEW STEP FOR GITHUB TRACKING PROJECT WHERE WE START TO SAVE VISITERS DATA IN JSON FILE

// const express = require("express");
// const fs = require("fs");
// const path = require("path");

// const app = express();
// const PORT = 3000;

// // ✅ Public folder ki static files (CSS, JS, Images) serve karega
// app.use(express.static("public"));


// // Visitor ko file me save karne ka function
// function saveVisitor(page, req) {

//     // visitors.json read karo
//     let visitors = [];

//     try {
//         const data = fs.readFileSync("visitors.json", "utf8");
//         visitors = JSON.parse(data);
//     } catch (err) {
//         visitors = [];
//     }

//     // New visitor object
//     const visitor = {
//         page: page,
//         time: new Date().toLocaleString(),
//         ip: req.ip,
//         browser: req.headers["user-agent"]
//     };

//     // Array me add karo
//     visitors.push(visitor);

//     // Dobara file me save karo
//     fs.writeFileSync(
//         "visitors.json",
//         JSON.stringify(visitors, null, 2)
//     );

//     console.log("==================================");
//     console.log("New Visitor Saved");
//     console.log(visitor);
//     console.log("==================================");
// }


// // ======================
// // GitHub Tracking Route
// // ======================
// app.get("/github", (req, res) => {

//     saveVisitor("GitHub", req);

//     res.redirect("https://github.com/kuldeep-vaniya-2711");

// });


// // ======================
// // Admin Dashboard
// // ======================
// app.get("/admin", (req, res) => {

//     res.sendFile(path.join(__dirname, "public", "admin.html"));

// });


// // ======================
// // Visitor API
// // ======================
// app.get("/api/visitors", (req, res) => {

//     try {

//         const data = fs.readFileSync("visitors.json", "utf8");
//         const visitors = JSON.parse(data);

//         res.json(visitors);

//     } catch (err) {

//         res.json([]);

//     }

// });


// // ======================
// // Start Server
// // ======================
// app.listen(PORT, () => {

//     console.log(`🚀 Server Running at http://localhost:${PORT}`);

// });


// // const express = require("express");

// // const app = express();

// // const PORT = 3000;

// // // GitHub Tracking Route
// // app.get("/github", (req, res) => {

// //     console.log("==================================");
// //     console.log("New Visitor");
// //     console.log("Time:", new Date());
// //     console.log("IP:", req.ip);
// //     console.log("Browser:", req.headers["user-agent"]);
// //     console.log("==================================");

// //     res.redirect("https://github.com/kuldeep-vaniya-2711");

// // });

// // app.listen(PORT, () => {
// //     console.log(`Server Running on http://localhost:${PORT}`);
// });


// // A NEW STEP FOR GITHUB TRACKING PROJECT WHERE WE START TO SAVE VISITERS DATA IN JSON FILE


// const express = require("express");
// const fs = require("fs");

// const app = express();
// const PORT = 3000;
// const path = require("path");


// // Visitor ko file me save karne ka function
// function saveVisitor(page, req) {

//     // visitors.json read karo
//     let visitors = [];

//     try {
//         const data = fs.readFileSync("visitors.json", "utf8");
//         visitors = JSON.parse(data);
//     } catch (err) {
//         visitors = [];
//     }

//     // New visitor object
//     const visitor = {
//         page: page,
//         time: new Date().toLocaleString(),
//         ip: req.ip,
//         browser: req.headers["user-agent"]
//     };

//     // Array me add karo
//     visitors.push(visitor);

//     // Dobara file me save karo
//     fs.writeFileSync(
//         "visitors.json",
//         JSON.stringify(visitors, null, 2)
//     );

//     console.log("New Visitor Saved");
// }

// // GitHub Tracking
// app.get("/github", (req, res) => {

//     saveVisitor("GitHub", req);

//     res.redirect("https://github.com/kuldeep-vaniya-2711");

// });

// app.get("/admin", (req, res) => {

//     res.sendFile(path.join(__dirname, "public", "admin.html"));

// });

// app.get("/api/visitors", (req, res) => {

//     const data = fs.readFileSync("visitors.json");

//     const visitors = JSON.parse(data);

//     res.json(visitors);

// });

// app.listen(PORT, () => {

//     console.log(`Server Running`);
// });


// =============================
// CURRENT WORKING VERSION
// =============================

const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// Static Files
app.use(express.static("public"));


// ==========================================
// Visitor Save Function
// ==========================================
function saveVisitor(page, req) {

    let visitors = [];

    try {

        visitors = JSON.parse(
            fs.readFileSync("visitors.json", "utf8")
        );

    } catch (err) {

        visitors = [];

    }

    const now = new Date();

    const visitor = {

        page,

        // Machine Friendly
        time: now.toISOString(),

        // Human Friendly
        displayTime: now.toLocaleString(),

        ip: req.ip,

        browser: req.headers["user-agent"]

    };

    // Duplicate Request Protection
    const lastVisitor = visitors[visitors.length - 1];

    if (

        lastVisitor &&
        lastVisitor.page === visitor.page &&
        lastVisitor.ip === visitor.ip &&
        lastVisitor.browser === visitor.browser &&
        (new Date(visitor.time) - new Date(lastVisitor.time)) < 3000

    ) {

        console.log("⚠ Duplicate Visitor Ignored");

        return;

    }

    visitors.push(visitor);

    fs.writeFileSync(

        "visitors.json",

        JSON.stringify(visitors, null, 2)

    );

    console.log("====================================");
    console.log("✅ New Visitor Saved");
    console.log(visitor);
    console.log("====================================");

}


// ==========================================
// GitHub Tracking
// ==========================================
app.get("/github", (req, res) => {

    saveVisitor("GitHub", req);

    res.redirect("https://github.com/kuldeep-vaniya-2711");

});

// ==========================================
// Home Page
// ==========================================

app.get("/", (req, res) => {

    res.sendFile(path.join(__dirname, "public", "index.html"));

});


// ==========================================
// Admin Dashboard
// ==========================================
app.get("/admin", (req, res) => {

    res.sendFile(path.join(__dirname, "public", "admin.html"));

});

// ==========================================
// LinkedIn Tracking
// ==========================================
app.get("/linkedin", (req, res) => {

    saveVisitor("LinkedIn", req);

    res.redirect("https://www.linkedin.com/in/kuldeep-vaniya-12166b247");

});


// ==========================================
// Resume Tracking
// ==========================================

app.get("/resume", (req, res) => {

    saveVisitor("Resume", req);

    const resumePath = path.join(__dirname, "resume", "resume.pdf");

    res.download(resumePath);

});

// ==========================================
// Visitor API
// ==========================================
app.get("/api/visitors", (req, res) => {

    try {

        const visitors = JSON.parse(

            fs.readFileSync("visitors.json", "utf8")

        );

        res.json(visitors);

    } catch (err) {

        res.json([]);

    }

});


// ==========================================
// Start Server
// ==========================================
app.listen(PORT, () => {

    console.log(`🚀 Server Running at http://localhost:${PORT}`);

});