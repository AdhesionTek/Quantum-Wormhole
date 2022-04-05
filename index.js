if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/serviceWorker.js").then(registration => {
        //console.log("Service Worker Registered.");
    }).catch(error => {
        console.log("Service Worker Failed.");
        console.log(error);
    })
}else{
    console.log("Service Worker Failed.");
    console.log("No serviceWorker in navigator.");
}


let version = "1.1.4.a"; // Version for index
let versionView = document.getElementById("versionNumber");
versionView.innerText = "v "+version

const nameInput = document.getElementById("nameInput");
const birthInput = document.getElementById("birthdayInput");

function generateOnClick() {
    if (!nameInput.value || !birthInput.value) {
        alert("Input is not valid.");
    }else {
        const valueToHash = nameInput.value + birthInput.valueAsNumber;
        seed = getHash(valueToHash);
        paintCanvas(seed);
        if (nameInput.value.toLowerCase()==="ybb"||nameInput.value.includes("海子")){
            canvasSrt="https://www.bilibili.com/video/BV1wo4y1X7Tk";
        }
        if (nameInput.value.toLowerCase().includes("罕见")){
            canvasSrt="https://www.bilibili.com/video/BV1p64y1X7j2";
        }
        if (nameInput.value.includes("嘉心糖") || nameInput.value.includes("嘉然")) {
            canvasSrt="https://www.bilibili.com/video/BV1FX4y1g7u8";
        }
        if (nameInput.value.includes("何同学")) {
            canvasSrt="https://www.bilibili.com/video/BV1244y1p7kt";
        }
        if (nameInput.value.toLowerCase().match("/(win|windows)11/g")) { // This code has bug
            canvasSrt="https://www.bilibili.com/video/BV1yb4y1x7Ky";
        }
        if (nameInput.value.toLowerCase().includes("ceylan") || nameInput.value.includes("锡兰")) {
            canvasSrt="https://www.youtube.com/user/CeylanLC/featured";
        }
        if (nameInput.value==="原版") {
            canvasSrt="https://youtu.be/pKKlGQtc_ss";
        }
        if (nameInput.value==="弹幕附"||nameInput.value==="弹幕付") {
            canvasSrt="https://youtu.be/jfTK-Om5wiY";
        }
    }
}

/**
 * Get hash value of a string
 * @param input
 * @returns {number}
 */
function getHash(input) {
    let hash = 0, i, chr;
    if (input.length === 0) return hash;
    for (i = 0; i < input.length; i++) {
        chr = input.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}