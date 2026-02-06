// Immediately check for updates
(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json";

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();

// Playful messages for the "No" button
const messages = [
    "Are you sure? 🤔",
    "Really sure?? 😢",
    "Positive?? ❤️",
    "Pookie, please...",
    "Think about it carefully!",
    "If you say no, I’ll be sad 😭",
    "I’ll be very sad... 😢",
    "Nooo... 😭😭",
    "Okay, fine, I’ll stop 😅",
    "Just kidding, say yes! 💖"
];

let messageIndex = 0;

// Handle "No" button click
function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');

    // Update text with playful message
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    // Slight shake animation for "No" button
    noButton.classList.add('shake');
    setTimeout(() => noButton.classList.remove('shake'), 500);

    // Slight bounce animation for "Yes" button
    yesButton.style.transform = "scale(1.2)";
    setTimeout(() => yesButton.style.transform = "scale(1)", 300);
}

// Handle "Yes" button click
function handleYesClick() {
    // Optional: small confetti effect before redirect
    launchConfetti();
    setTimeout(() => {
        window.location.href = "yes_page.html";
    }, 800);
}

// Optional: simple confetti effect
function launchConfetti() {
    const colors = ["#FF69B4", "#FF1493", "#FFC0CB", "#FFB6C1"];
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement("div");
        confetti.style.position = "fixed";
        confetti.style.width = confetti.style.height = "10px";
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * window.innerWidth + "px";
        confetti.style.top = "-20px";
        confetti.style.opacity = Math.random();
        confetti.style.borderRadius = "50%";
        confetti.style.zIndex = 9999;
        confetti.style.pointerEvents = "none";
        document.body.appendChild(confetti);

        // Animate falling
        const fallDuration = 2000 + Math.random() * 2000;
        confetti.animate(
            [
                { transform: `translateY(0px) rotate(0deg)` },
                { transform: `translateY(${window.innerHeight + 50}px) rotate(${360 + Math.random() * 360}deg)` }
            ],
            { duration: fallDuration, iterations: 1, easing: "ease-out" }
        );

        setTimeout(() => confetti.remove(), fallDuration);
    }
}

// Optional: add subtle "shake" animation in CSS
const style = document.createElement('style');
style.innerHTML = `
.shake {
  animation: shakeAnim 0.5s;
}

@keyframes shakeAnim {
  0% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  50% { transform: translateX(5px); }
  75% { transform: translateX(-5px); }
  100% { transform: translateX(0); }
}
`;
document.head.appendChild(style);
