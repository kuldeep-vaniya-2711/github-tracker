const fs = require("fs");

function saveVisitor(page, req) {

    let visitors = [];

    try {

        const data = fs.readFileSync("visitors.json", "utf8");
        visitors = JSON.parse(data);

    } catch {

        visitors = [];

    }

    const visitor = {

        page,

        time: new Date().toISOString(),

        displayTime: new Date().toLocaleString(),

        ip: req.ip,

        browser: req.headers["user-agent"]

    };

    visitors.push(visitor);

    fs.writeFileSync(
        "visitors.json",
        JSON.stringify(visitors, null, 2)
    );

    console.log("==================================");
    console.log("New Visitor Saved");
    console.log(visitor);
    console.log("==================================");

}

module.exports = saveVisitor;