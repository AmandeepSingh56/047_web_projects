function showMessage() {
    alert("Welcome to my portfolio 😊");
}

function submitForm() {
    document.getElementById("result").innerText =
        "Thanks! I will contact you soon.";
}

function toggleSection(id, btn) {
    const section = document.getElementById(id);

    if (section.style.display === "none") {
        section.style.display = "block";
        btn.innerText = btn.innerText.replace("Show", "Hide");
    } else {
        section.style.display = "none";
        btn.innerText = btn.innerText.replace("Hide", "Show");
    }
}

// Scroll to top button
const topBtn = document.createElement("button");
topBtn.innerHTML = "⬆";
topBtn.id = "topBtn";
document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
    topBtn.style.display =
        document.documentElement.scrollTop > 200 ? "block" : "none";
});

topBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
