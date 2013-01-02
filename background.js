// Receive Request
function onError(errors, sender, sendResponse) {
	// Show the app icon thing.
	chrome.pageAction.show(sender.tab.id);
};


function openConsole(){

}


chrome.pageAction.onClicked.addListener(openConsole);

// Listen for the content script to send a message to the background page.
chrome.extension.onRequest.addListener(onError);