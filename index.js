if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("serviceWorker.js").then(registration => {
        //console.log("Service Worker Registered.");
    }).catch(error => {
        console.log("Service Worker Failed.");
        console.log(error);
    })
}else{
    console.log("Service Worker Failed.");
    console.log("No serviceWorker in navigator.");
}