// // Dashboard load karne ka main function
// async function loadVisitors() {

//     // Backend se visitor data lao
//     const response = await fetch("/api/visitors");

//     // JSON me convert karo
//     const visitors = await response.json();

//     // =============================
//     // Dashboard Cards
//     // =============================

//     // Total Visitors
//     document.getElementById("totalVisitors").innerText = visitors.length;

//     // GitHub Visitors
//     const githubVisitors = visitors.filter(v => v.page === "GitHub");
//     document.getElementById("githubVisitors").innerText = githubVisitors.length;

//     // LinkedIn Visitors
//     const linkedinVisitors = visitors.filter(v => v.page === "LinkedIn");
//     document.getElementById("linkedinVisitors").innerText = linkedinVisitors.length;

//     // Today's Visitors
//     const today = new Date();

// const todayVisitors = visitors.filter(v => {

//     const visitDate = new Date(v.time);

//     return (
//         visitDate.getDate() === today.getDate() &&
//         visitDate.getMonth() === today.getMonth() &&
//         visitDate.getFullYear() === today.getFullYear()
//     );

// });

// document.getElementById("todayVisitors").innerText = todayVisitors.length;
//     // =============================
//     // Visitor Table
//     // =============================

//     const tableBody = document.getElementById("tableBody");

//     // Purana data remove karo
//     tableBody.innerHTML = "";

//     // Latest visitor sabse upar
//     visitors.slice().reverse().forEach(visitor => {

//         tableBody.innerHTML += `
//             <tr>
//                 <td>${visitor.page}</td>
//                 <td>${visitor.time}</td>
//                 <td>${visitor.ip}</td>
//                 <td>${visitor.browser}</td>
//             </tr>
//         `;

//     });

// }

// // Pehli baar page load hote hi
// loadVisitors();

// // Har 5 second baad refresh
// setInterval(loadVisitors, 5000);




// ==========================================
// Visitor Dashboard
// ==========================================

async function loadVisitors() {

    try {

        // Backend se data lao
        const response = await fetch("/api/visitors");

        const visitors = await response.json();

        // ===============================
        // Dashboard Cards
        // ===============================

        // Total Visitors
        document.getElementById("totalVisitors").innerText = visitors.length;

        // GitHub Visitors
        const githubVisitors = visitors.filter(visitor => visitor.page === "GitHub");

        document.getElementById("githubVisitors").innerText = githubVisitors.length;

        // LinkedIn Visitors
        const linkedinVisitors = visitors.filter(visitor => visitor.page === "LinkedIn");

        document.getElementById("linkedinVisitors").innerText = linkedinVisitors.length;

        // Today's Visitors
        const today = new Date();

        const todayVisitors = visitors.filter(visitor => {

            const visitDate = new Date(visitor.time);

            return visitDate.toDateString() === today.toDateString();

        });

        document.getElementById("todayVisitors").innerText = todayVisitors.length;

        // ===============================
        // Visitor Table
        // ===============================

        const tableBody = document.getElementById("tableBody");

        tableBody.innerHTML = "";

        // Latest visitor sabse upar
        visitors.slice().reverse().forEach(visitor => {

            const row = `
                <tr>
                    <td>${visitor.page}</td>
                    <td>${visitor.displayTime}</td>
                    <td>${visitor.ip}</td>
                    <td>${visitor.browser}</td>
                </tr>
            `;

            tableBody.innerHTML += row;

        });

    } catch (error) {

        console.error("Dashboard Error :", error);

    }

}


// ==========================================
// Page Load
// ==========================================

loadVisitors();


// ==========================================
// Auto Refresh Every 5 Seconds
// ==========================================

setInterval(loadVisitors, 5000);