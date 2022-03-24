const lang = navigator.language.toLowerCase();

console.log(lang);

if (!lang.includes("cn")){
    customFontElements = document.querySelectorAll(".josefin-sans");
    Array.from(customFontElements).forEach(element =>{
        element.style.fontFamily="JosefinSans,sans-serif";
    })
}

translatesElements = document.getElementsByClassName("need-translate");
Array.from(translatesElements).forEach(element => {
    switch (element.innerHTML) {
        case "gen":
            if (lang === "zh-cn") {
                element.innerHTML = "生成";
            }
            else if (lang.includes("zh")){
                element.innerHTML = "生成";
            }
            else if (lang==="ja-jp"){
                element.innerHTML = "生成する";
            }
            else {
                element.innerHTML = "Generate";
            }
            return;
        case "quantum-wormhole":
            if (lang === "zh-cn") {
                element.innerHTML = "量子虫洞";
            }
            else if (lang.includes("zh")){
                element.innerHTML = "量子蟲洞";
            }
            else if (lang==="ja-jp"){
                element.innerHTML = "量子ワームホール";
            }
            else {
                element.innerHTML = "Quantum Wormhole";
            }
            return;
        case "full-name":
            if (lang === "zh-cn") {
                element.innerHTML = "姓名";
            }
            else if (lang.includes("zh")){
                element.innerHTML = "姓名";
            }
            else if (lang==="ja-jp"){
                element.innerHTML = "氏名";
            }
            else {
                element.innerHTML = "Full Name";
            }
            return;
        case "birthday":
            if (lang === "zh-cn") {
                element.innerHTML = "生日";
            }
            else if (lang.includes("zh")){
                element.innerHTML = "生日";
            }
            else if (lang==="ja-jp"){
                element.innerHTML = "誕生日";
            }
            else {
                element.innerHTML = "Birthday";
            }
            return;
        case "watch":
            if (lang === "zh-cn") {
                element.innerHTML = "视监";
            }
            else if (lang==="ja-jp"){
                element.innerHTML = "じーー";
            }
            else {element.innerHTML = "Watch";
            }
            return;
        case "discussions":
            if (lang === "zh-cn") {
                element.innerHTML = "讨论";
            }
            else if (lang.includes("zh")){
                element.innerHTML = "討論";
            }
            else if (lang==="ja-jp"){
                element.innerHTML = "ディスカッション ";
            }
            else {
                element.innerHTML = "Discussions";
            }
            return;
        case "view-on-github":
            if (lang === "zh-cn") {
                element.innerHTML = "在Github上查看";
            }
            else if (lang.includes("zh")) {
                element.innerHTML = "在Github上查看";
            }
            else if (lang==="ja-jp"){
                element.innerHTML = "Githubで表示";
            }
            else {
                element.innerHTML = "View On Github";
            }
            return;
        case "star":
            if (lang === "zh-cn") {
                element.innerHTML = "给星星";
            }
            else if (lang.includes("zh")) {
                element.innerHTML = "給星星";
            }
            else if (lang==="ja-jp"){
                element.innerHTML = "スター";
            }
            else {
                element.innerHTML = "Star";
            }
            return;
        case "bottom-texts":
            if (lang === "zh-cn") {
                element.innerHTML = "粘连科技用❤️制作 Copyleft 2022";
            }
            else if (lang.includes("zh")) {
                element.innerHTML = "粘連科技用❤️製作 Copyleft 2022";
            }
            else {
                element.innerHTML = "Made with ❤️ by AdhesionTek. Copyleft 2022.";
            }
            return;
        case "eth-wallet":
            element.innerHTML = "ETH: 0xb48fD1DF1A76e17b40d212dca73C647eCbd908Cd";
        default:
            return;
    }
})