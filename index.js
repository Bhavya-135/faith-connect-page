let webPage = document.createElement("div");
document.body.appendChild(webPage);

let webpageHeading = document.createElement("h1");
webpageHeading.textContent = "🌿 Grace in Every Step 🌿";
webpageHeading.style.textAlign = "center";
webpageHeading.style.backgroundColor = "white";
webpageHeading.style.borderRadius = "140px";

document.body.style.backgroundImage = "url('https://images.squarespace-cdn.com/content/v1/5d5db203cea3eb0001733a1e/1588374712780-DTZ7WQ6QIQ01CSLOBKXF/hspirit.jpg')";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";
document.body.style.height = "100vh";
webpageHeading.style.color = "brown";

webPage.appendChild(webpageHeading);

let webpagePara = document.createElement("p");
webpagePara.textContent = "“Walk with faith, work with purpose, and success will follow.”";
webpagePara.style.fontWeight = "bold";
webpagePara.style.textAlign = "center";

webPage.appendChild(webpagePara);

let listArrays = [
    "✨ Guided by faith, strengthened by grace.",
    "🌿 Walking with faith, trusting every step.",
    "🌸 Grace found me when I needed it most.",
    "✨ Saved by grace, growing every day.",
    "🌼 Faith in my heart, peace in my soul.",
    "🌿 His grace is enough for every journey.",
    "✨ Grace leads, faith follows.",
    "🌸 Covered in grace, moving with purpose.",
    "🌿 Living by faith, growing with grace.",
    "✨ Grace changed my story."
];

for (let listArray of listArrays) {
    let mummy1 = document.createElement("li");
    mummy1.textContent = listArray;
    webPage.appendChild(mummy1);
}
