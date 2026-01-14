const nameEl = document.getElementById("name");
const roleEl = document.getElementById("role");
const details = document.getElementById("details");
const toggleBtn = document.getElementById("toggleBtn");
const changeBtn = document.getElementById("changeBtn");
const profileImg = document.getElementById("profileImg");
const card = document.getElementById("card");

const emailEl = document.getElementById("email");
const addressEl = document.getElementById("address");

// Added elements for new buttons
const randomCardColorBtn = document.getElementById("randomCardColor");
const randomPageColorBtn = document.getElementById("randomPageColor");

// Variable to track current profile
let isJennie = true;

// Toggle details visibility (using visibility for no layout shift)
toggleBtn.addEventListener("click", () => {
    if (details.style.visibility === "hidden") {
        details.style.visibility = "visible";
        toggleBtn.textContent = "Hide Details";
    } else {
        details.style.visibility = "hidden";
        toggleBtn.textContent = "Show Details";
    }
});

// Change profile (toggle between Jennie and Jisoo) - details remain hidden until show button is clicked
changeBtn.addEventListener("click", () => {
    if (isJennie) {
        // Change to Jisoo
        nameEl.textContent = "Kim Jisoo";
        roleEl.textContent = "Singer";
        profileImg.src = "https://vcdn1-giaitri.vnecdn.net/2025/03/19/jisoo-1-1742349532-1742349698-5135-1742349805.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=Eg4mSMyJMHWoMUFmPNjoXw";
        profileImg.alt = "jisooya";
        emailEl.textContent = "Email: soo_ya@example.com";
        addressEl.textContent = "Address: Busan, South Korea";
    } else {
        // Change back to Jennie
        nameEl.textContent = "Jennie Kim";
        roleEl.textContent = "Artist";
        profileImg.src = "https://i.mydramalist.com/LwQ5Ny_5c.jpg";
        profileImg.alt = "Profile Pic";
        emailEl.textContent = "Email: liseuxdenini@gmail.com";
        addressEl.textContent = "Address: Seoul, South Korea";
    }
    isJennie = !isJennie; // Toggle the flag

    // Keep details hidden after profile change
    details.style.visibility = "hidden";
    toggleBtn.textContent = "Show Details";
});

// Added event listeners for random color buttons
randomCardColorBtn.addEventListener("click", () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    card.style.background = randomColor;
});

randomPageColorBtn.addEventListener("click", () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    document.body.style.background = `linear-gradient(135deg, ${randomColor} 0%, ${randomColor} 100%)`; // Apply to gradient
});