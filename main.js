var ps = document.getElementsByTagName('p');
console.log("aaa");
for(let i=0; i<ps.length; i++){
	var p = ps[i];
	var lines = lineWrapDetector.getLines(p);
	console.log(lines.length+" lines: ", lines);
}
