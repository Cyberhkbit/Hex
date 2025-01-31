document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const menuItems = document.querySelectorAll(".menu-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const category = button.getAttribute("data-category");

            menuItems.forEach(item => {
                if (category === "all" || item.getAttribute("data-category") === category) {
                    item.style.display = "block";
                    item.classList.add("fade-in");
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
});
function toggleMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');

    // Prevent body scrolling when menu is open
    if (nav.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

// ✅ Close menu when clicking on a link
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav').classList.remove('active');
        document.body.style.overflowY = 'auto';
    });
});

// Simulate OTP generation
let otp = "1234"; // For simplicity, using a static OTP. In a real scenario, this would be dynamic.
let userProfile = {}; // To store user details

// Function to send OTP
function sendOTP() {
    const phone = document.getElementById("phone").value;
    if (phone) {
        alert("OTP sent to " + phone); // Simulate sending OTP
        document.getElementById("otp-section").style.display = "block";
    } else {
        alert("Please enter your phone number");
    }
}

// Function to verify OTP
function verifyOTP() {
    const enteredOTP = document.getElementById("otp").value;
    if (enteredOTP === otp) {
        alert("OTP Verified! You can now order.");
        userProfile.phone = document.getElementById("phone").value; // Store the user's phone number
        document.getElementById("login-section").style.display = "none";
        document.getElementById("order-section").style.display = "block"; // Show the order section
    } else {
        alert("Incorrect OTP. Please try again.");
    }
}

// Function to review order
function reviewOrder() {
    const brownieQuantity = document.getElementById("brownie-quantity").value;
    const cookieQuantity = document.getElementById("cookie-quantity").value;

    const orderDetails = `Brownie x ${brownieQuantity} - $${brownieQuantity * 5}<br>Cookie x ${cookieQuantity} - $${cookieQuantity * 3}`;
    
    document.getElementById("order-details").innerHTML = orderDetails;
    document.getElementById("order-summary").style.display = "block";
}

// Proceed to Checkout (Simulate checkout for now)
function proceedToCheckout() {
    alert("Proceeding to checkout... (You can integrate a payment gateway here)");
}

