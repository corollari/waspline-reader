
chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
	chrome.storage.local.get({
		color1: "#0000FF",
		color2: "#FF0000",
		color_text: "#000000",
		gradient_size: 50,
		enabled: false
	}, function(result) {
		// When the page loads, inject the content script
		chrome.tabs.executeScript(tabId, {file: "/contentScript.js"});
		// Apply gradient to every new tab if addon is enabled
		if(result.enabled) {
			chrome.tabs.sendMessage(tabId, {
				command: "apply_gradient",
				colors: [result.color1, result.color2],
				color_text: result.color_text,
				gradient_size: result.gradient_size
			});
		}
	});
}); 