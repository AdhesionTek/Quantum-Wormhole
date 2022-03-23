const lang = navigator.language.toLowerCase();

console.log(lang);

translatesElements = document.getElementsByClassName("need-translate");
Array.from(translatesElements).forEach(element => {
    switch (element.innerHTML) {
        case "generate":
            if (lang === "zh-cn") {
                element.innerHTML = "生成";
            } else {
                element.innerHTML = "Generate";
            }
            return;
        case "quantum-wormhole":
            if (lang === "zh-cn") {
                element.innerHTML = "量子虫洞";
            } else {
                element.innerHTML = "Quantum Wormhole";
            }
            return;
        case "full-name":
            console.log("He")
            if (lang === "zh-cn") {
                element.innerHTML = "姓名";
            } else {
                element.innerHTML = "Full Name";
            }
            return;
        case "birthday":
            if (lang === "zh-cn") {
                element.innerHTML = "生日";
            } else {
                element.innerHTML = "Birthday";
            }
            return;
        case "watch":
            element.innerHTML = "Watch";
            return;
        case "discussions":
            if (lang === "zh-cn") {
                element.innerHTML = "讨论";
            } else {
                element.innerHTML = "Discussions";
            }
            return;
        case "view-on-github":
            if (lang === "zh-cn") {
                element.innerHTML = "在Github上查看";
            } else {
                element.innerHTML = "View On Github";
            }
            return;
        case "star":
            if (lang === "zh-cn") {
                element.innerHTML = "给星星";
            } else {
                element.innerHTML = "Star";
            }
            return;
        case "bottom-texts":
            if (lang === "zh-cn") {
                element.innerHTML = "粘连科技用❤️制作 Copyleft 2022";
            } else {
                element.innerHTML = "Made with ❤️ by AdhesionTek. Copyleft 2022";
            }
            return;
        default:
            return;
    }
})