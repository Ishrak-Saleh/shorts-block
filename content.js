
let lastUrl = window.location.href; //initial value
let already_blocked = false;

window.addEventListener("popstate", goBack); //go back when popstate event fires (click back)


function checkUrl() {
    
    let currentUrl = window.location.href;

    if(currentUrl !== lastUrl)
    {
        lastUrl = currentUrl;
           
    }
    if ((lastUrl.includes("/shorts/") || lastUrl.includes("/reels/")) && already_blocked == false) {
        
        document.documentElement.innerHTML = "<h1>Blocked With Text test</h1>"; //replaces what's already loaded with blocked message (at start)
        window.stop(); //tells browswer to stop loading anything else
        already_blocked = true;
    }
    else if (!(lastUrl.includes("/shorts/") || lastUrl.includes("/reels/"))) //if any other links
    {
        already_blocked = false;
    }

}

    function goBack(){
        //if blocked, reload the page contents to go to the previous page
        if (already_blocked) {
            window.location.reload();
            already_blocked = false;
        }
    }


checkUrl();

setInterval(checkUrl, 250); //250ms


