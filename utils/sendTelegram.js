// await sendTelegram(visitor);
const axios = require("axios");


async function sendTelegram(visitor) {

    try {

        const message = `
🔔 New Visitor

📄 Page: ${visitor.page}

🌍 Country: ${visitor.country}

🏙️ City: ${visitor.city}

💻 OS: ${visitor.os}

🌐 Browser: ${visitor.browser}

📱 Device: ${visitor.device}

🕒 Time: ${visitor.displayTime}
        `;


        const url =
        `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`;


        await axios.post(url, {

            chat_id: process.env.TELEGRAM_CHAT_ID,

            text: message

        });


        console.log("✅ Telegram Notification Sent");


    } catch(error) {


        console.log(
            "❌ Telegram Error:",
            error.message
        );


    }

}


module.exports = sendTelegram;