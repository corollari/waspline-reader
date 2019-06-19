(function() {
'use strict';
const DEFAULT_GRADIENT_LENGTH = 0.5;
const DEFAULT_GRADIENT_COLORS = ["#FF0000", "#0000FF"];
const DEFAULT_TEXT_COLOR = "#000000";

// Linear interpolate between v0 and v1 at percent t
function lerp(v0, v1, t)
{
	return v0 * (1 - t) + v1 * t
}

// Convert a hex triplet (#XXXXXX) to an array containing red, green, and blue
function hex_to_rgb(hex)
{
	return hex.replace('#', '').match(/.{1,2}/g).map(
		x => parseInt(x, 16)
	);
}

// Color all lines in the page
function applyGradient(colors, color_text, gradient_size)
{
	const paragraphs = document.getElementsByTagName('p');
	const base_color = hex_to_rgb(color_text);

	for (let paragraph of paragraphs) {
		const lines = lineWrapDetector.getLines(paragraph);

		for (let lineno in lines) {
			const line = lines[lineno];

			// Alternate between left and right for every color
			const active_color = hex_to_rgb(colors[
				Math.floor((lineno % (colors.length * 2)) / 2)
			]);
			const is_left = (lineno % 2 === 0);

			for (let loc in line) {
				let t = Math.min((gradient_size / 100) + (loc / line.length), 1)
				if (!is_left) { t = 1 - t; }

				const red = lerp(base_color[0], active_color[0], t);
				const green = lerp(base_color[1], active_color[1], t);
				const blue = lerp(base_color[2], active_color[2], t);

				line[loc].style.color = "rgb(" + (red|0) + "," + (green|0) + "," + (blue|0) + ")";
			}
		}
	}
}

try {
	chrome.storage.local.get(
		["GRADIENT_LENGTH_PERCENTAGE"],
		(result) => applyGradient(
			DEFAULT_GRADIENT_COLORS,
			DEFAULT_TEXT_COLOR,
			result["GRADIENT_LENGTH_PERCENTAGE"] || DEFAULT_GRADIENT_LENGTH,
		)
	);
} catch(e){
	applyGradient(
		DEFAULT_GRADIENT_COLORS,
		DEFAULT_TEXT_COLOR,
		DEFAULT_GRADIENT_LENGTH
	);
}

})();