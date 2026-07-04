const typing = document.getElementById("typing");
const openBtn = document.getElementById("openBtn");
const letter = document.getElementById("letter");
const popup = document.getElementById("popup");

const text = "Hi Misha... I made this only for you ❤️";

let i = 0;

function typeWriter() {
    if (i < text.length) {
        typing.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 60);
    }
}

typeWriter();

openBtn.addEventListener("click", () => {
    letter.classList.remove("hidden");
    openBtn.style.display = "none";
});

const messages = {
    angry: `Misha ❤️

I know you're angry, and I completely understand.

I'm not here to prove a point or win an argument.
I'm here because you're important to me.

Take all the time you need.
I'll still be here, caring about you.`,

    sad: `Hey Misha ❤️

If you're feeling sad, I wish I could sit beside you right now.

You don't have to go through everything alone.

I'll always have your back, no matter what.`,

    miss: `Missing me?

Truth is...

I'm probably missing you even more.

I miss your smile,
our conversations,
and simply knowing you're okay.

I love you, Misha. ❤️`
};

function showMsg(key) {
    popup.innerHTML = `
        <h3>${key === "angry" ? "😠" : key === "sad" ? "🥺" : "❤️"}</h3>
        <p style="white-space:pre-line">${messages[key]}</p>
        <br>
        <button onclick="closePopup()">Close ❤️</button>
    `;

    popup.classList.remove("hidden");
}

function closePopup() {
    popup.classList.add("hidden");
}

window.showMsg = showMsg;
window.closePopup = closePopup;

// Floating hearts
setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 20) + "px";
    heart.style.animationDuration = (6 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);

}, 400);