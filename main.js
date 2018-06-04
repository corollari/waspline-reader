const GRADIENT_LENGTH_PERCENTAGE = 0.5;

var ps = document.getElementsByTagName('p');
for(let i=0; i<ps.length; i++){
	var p = ps[i];
	var lines = lineWrapDetector.getLines(p);
	for(let j=0; j<lines.length; j++){
		let line = lines[j];
		let red = 0, blue = 0, green = 0;
		for(let k=0; k<line.length; k++){
			switch(j%4){
				case 0: //Blue ending
					blue = k>(line.length-1)*GRADIENT_LENGTH_PERCENTAGE ? getGradient(k, line.length) : 0;
					break;
				case 1: //Blue beginning
					blue = k<(line.length-1)*GRADIENT_LENGTH_PERCENTAGE ? getGradient(k, line.length) : 0;
					break;
				case 2: //Red ending
					red = k>(line.length-1)*GRADIENT_LENGTH_PERCENTAGE ? getGradient(k, line.length) : 0;
					break;
				case 3: //Red beginning
					red = k<(line.length-1)*GRADIENT_LENGTH_PERCENTAGE ? getGradient(k, line.length) : 0;
					break;
			}
			line[k].style.color="rgb("+red+","+green+","+blue+")";
		}
	}
}

function getGradient(k, len){
	return Math.round(Math.abs(255*(((k/(len-1))-GRADIENT_LENGTH_PERCENTAGE)/GRADIENT_LENGTH_PERCENTAGE)));
}
