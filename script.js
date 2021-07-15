var currentURL;

//using chrome developers, I build this code wich send an alert tab when I open a facebook page
//chrome tabs.query provides tab control
chrome.tabs.query({ 'active': true, 'lastFocusedWindow': true, 'currentWindow': true },
    function (tabs) {
        getCurrentURL(tabs[0].url);
    });

function getCurrentURL (tab) {
    if (tab == 'https://www.facebook.com/') {
        currentURL = tab;
        alert(currentURL);
    }
}
