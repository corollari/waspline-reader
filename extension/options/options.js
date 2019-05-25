let slider = document.querySelector("#lengthSlider");
let numBox = document.querySelector("#percentSlider");
slider.addEventListener("input", ()=>updateValue(slider.value));
numBox.addEventListener("input", ()=>updateValue(numBox.value));
chrome.storage.local.get(["GRADIENT_LENGTH_PERCENTAGE"], (result)=>updateValue((result["GRADIENT_LENGTH_PERCENTAGE"]||0.5)*100));

function updateValue(value){
	numBox.value=value;
	slider.value=value;
	chrome.storage.local.set({"GRADIENT_LENGTH_PERCENTAGE": value/100});
	applyGradient(value/100);
}
