// On an error, do something
window.onerror = function (msg, url, num) {

	chrome.extension.sendRequest([msg, url, num]);

};