'use strict';
// Define references to DOM elements
const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const color_text = document.getElementById('color_text');
const gradient_size = document.getElementById('gradient_size');
const enabled = document.getElementById('enabled');

// Listen for clicks on the input elements, and send the appropriate message
// to the content script in the page.
function eventHandler(e) {
	// Send message to content script to color lines
	function apply_gradient(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {
			command: "apply_gradient",
			colors: [color1.value, color2.value],
			color_text: color_text.value,
			gradient_size: gradient_size.value
		});
	}

	// Send message to content script to reset lines
	function reset(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {
			command: "reset",
			color_text: color_text.value
		});
	}

	// Just log the error to the console.
	function reportError(error) {
		console.error(`${error}`);
	}

	// Store attributes into local storage
	chrome.storage.local.set({
		color1: color1.value,
		color2: color2.value,
		color_text: color_text.value,
		gradient_size: gradient_size.value,
		enabled: enabled.checked,
	});

	// Dispatch depending on checkbox enabled state
	if (enabled.checked) {
		try {
			chrome.tabs.query({ active: true, currentWindow: true }, apply_gradient);
		} catch (e) { reportError(e); }
	} else {
		try {
			chrome.tabs.query({ active: true, currentWindow: true }, reset);
		} catch (e) { reportError(e); }
	}
}

// Load settings from local storage, or use these defaults
chrome.storage.local.get({
	color1: "#0000FF",
	color2: "#FF0000",
	color_text: "#000000",
	gradient_size: 50,
	enabled: false
}, function(result) {
	color1.value = result.color1;
	color2.value = result.color2;
	color_text.value = result.color_text;
	gradient_size.value = result.gradient_size;
	enabled.checked = result.enabled;
})

// Register event listeners to update page when options change
document.getElementById("enabled").addEventListener("change", eventHandler);
document.getElementById("gradient_size").addEventListener("change", eventHandler);
document.getElementById("color1").addEventListener("change", eventHandler);
document.getElementById("color2").addEventListener("change", eventHandler);
document.getElementById("color_text").addEventListener("change", eventHandler);