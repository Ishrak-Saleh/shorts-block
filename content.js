
let lastUrl = window.location.href; //initial value
let already_blocked = false;

window.addEventListener("popstate", goBack); //go back when popstate event fires


function checkUrl() {
    
    let currentUrl = window.location.href;

    if(currentUrl !== lastUrl)
    {
        lastUrl = currentUrl;
           
    }
    if (lastUrl.includes("/shorts/") && already_blocked == false) {
            
        document.documentElement.innerHTML = "<h1>Blocked With Text test</h1>"; //replaces what's already loaded with blocked message (at start)
        window.stop(); //tells browswer to stop loading anything else
        already_blocked = true;
    }
    else if (!lastUrl.includes("/shorts/")) //if any other links
    {
        already_blocked = false;
    }

}


checkUrl();

setInterval(checkUrl, 250); //250ms


function goBack(){
    window.location.href = "https://www.youtube.com";
}