const mainContent = document.getElementById("mainContent");

function startExperience() {
        if (mainContent.classList.contains('hidden')) {
                mainContent.classList.remove("hidden");
        }
        document.body.classList.remove("container");
}

window.addEventListener("load", startExperience);

// Explosion Effect
document.addEventListener("click", (e) => {
        createHearts(e.clientX, e.clientY);
});

document.addEventListener("touchstart", (e) => {
        createHearts(e.touches[0].clientX, e.touches[0].clientY);
});

function createHearts(x, y) {
        const numHearts = 15;
        const icons = Array.from(explosionIcon).filter(char => char.trim() !== "");

        for (let i = 0; i < numHearts; i++) {
                const heart = document.createElement("div");
                heart.innerHTML = icons[Math.floor(Math.random() * icons.length)] || "💗";
                heart.className = "heart";

                const angle = Math.random() * Math.PI * 2;
                const distance = 50 + Math.random() * 150;
                const dx = Math.cos(angle) * distance;
                const dy = Math.sin(angle) * distance;

                heart.style.setProperty("--x", dx);
                heart.style.setProperty("--y", dy);
                heart.style.left = x + "px";
                heart.style.top = y + "px";
                heart.style.fontSize = Math.random() * 20 + 10 + "px";
                heart.style.setProperty("--r", Math.random() * 360 - 180 + "deg");

                document.body.appendChild(heart);

                setTimeout(() => {
                        heart.remove();
                }, 1000);
        }
}

// Global Click Pop Sound
const popSound = document.getElementById("pop-sound");
window.addEventListener("mousedown", () => {
        if (popSound) {
                const sound = popSound.cloneNode(true);
                sound.play();
        }
}, true);
