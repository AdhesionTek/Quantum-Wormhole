const lang = navigator.language.toLowerCase();

console.log(lang);

translatesElements = document.getElementsByClassName("need-translate");
Array.from(translatesElements).forEach(element =>{
    switch (element.innerHTML){
        case "generate":
            if (lang==="zh-cn"){
                element.innerHTML="生成";
            }else {
                element.innerHTML="Generate";
            }
            return;
        case "quantum-wormhole":
            if (lang==="zh-cn"){
                element.innerHTML="量子虫洞";
            }else {
                element.innerHTML="Quantum Wormhole";
            }
            return;
        case "full-name":
            console.log("He")
            if (lang==="zh-cn"){
                element.innerHTML="姓名";
            }else {
                element.innerHTML="Full Name";
            }
            return;
        case "birthday":
            if (lang==="zh-cn"){
                element.innerHTML="生日";
            }else {
                element.innerHTML="Birthday";
            }
            return;
        default:
            return;
    }
})