const sendTelegram = require("./sendTelegram");

const fs = require("fs");
const geoip = require("geoip-lite");
const UAParser = require("ua-parser-js");


function saveVisitor(page, req) {

    let visitors = [];

    try {

        const data = fs.readFileSync("visitors.json", "utf8");
        visitors = JSON.parse(data);

    } catch {

        visitors = [];

    }


    const now = new Date();

    const geo = geoip.lookup(req.ip);


    const parser = new UAParser(req.headers["user-agent"]);
    const result = parser.getResult();


    const visitor = {

        page,

        time: now.toISOString(),

        displayTime: now.toLocaleString(),

        ip: req.ip,

        country: geo ? geo.country : "Unknown",

        city: geo ? geo.city : "Unknown",

        browser: result.browser.name || "Unknown",

        browserVersion: result.browser.version || "Unknown",

        os: result.os.name || "Unknown",

        device: result.device.type || "Desktop"

    };


    visitors.push(visitor);


    fs.writeFileSync(
        "visitors.json",
        JSON.stringify(visitors, null, 2)
    );


    sendTelegram(visitor);


    console.log("==================================");
    console.log("New Visitor Saved");
    console.log(visitor);
    console.log("==================================");

}


// Analytics ke liye
saveVisitor.getVisitors = function(){

    try {

        const data = fs.readFileSync("visitors.json", "utf8");

        return JSON.parse(data);

    } catch {

        return [];

    }

};


module.exports = saveVisitor;