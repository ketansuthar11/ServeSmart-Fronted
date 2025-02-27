// Function to Toggle Navbar in Mobile View
function toggleMenu() {
    let navItems = document.getElementById("nav-items");
    if (navItems.style.display === "flex") {
        navItems.style.display = "none";
    } else {
        navItems.style.display = "flex";
    }
}

// Function to Post Meal
function postMeal() {
    let menuText = document.getElementById("menu-input").value;
    if (menuText.trim() === "") {
        alert("Please enter a menu.");
        return;
    }
    document.getElementById("menu-display").innerHTML = "<h3>Today's Meal:</h3><p>" + menuText + "</p>";
    document.getElementById("menu-input").value = "";
}

// Function to Increase Bookings
let bookingCount = 0;
function increaseBooking() {
    bookingCount++;
    document.getElementById("booking-count").innerText = "Total Meals Booked: " + bookingCount;
}

// QR Scanner
function onScanSuccess(decodedText, decodedResult) {
    document.getElementById("qr-result").innerText = "QR Code: " + decodedText;
    console.log(`QR Code detected: ${decodedText}`);
}

function onScanError(errorMessage) {
    console.warn(`QR Scan Error: ${errorMessage}`);
}

let html5QrcodeScanner = new Html5QrcodeScanner("qr-reader", { fps: 10, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess, onScanError);

function showPage(pageId) {
    document.getElementById("dashboard").style.display = "none";
    document.getElementById("analytics").style.display = "none";
    document.getElementById(pageId).style.display = "block";
}

const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const lunchBookings = labels.map(() => Math.floor(Math.random() * 200) + 50);
const dinnerBookings = labels.map(() => Math.floor(Math.random() * 200) + 50);

const ctx = document.getElementById("mealLineChart").getContext("2d");
new Chart(ctx, {
    type: "line",
    data: {
        labels: labels,
        datasets: [
            {
                label: "Lunch Bookings",
                data: lunchBookings,
                borderColor: "#28a745",
                backgroundColor: "rgba(40, 167, 69, 0.2)",
                fill: true,
                tension: 0.4
            },
            {
                label: "Dinner Bookings",
                data: dinnerBookings,
                borderColor: "#dc3545",
                backgroundColor: "rgba(220, 53, 69, 0.2)",
                fill: true,
                tension: 0.4
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});