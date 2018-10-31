/* jshint esversion: 6 */

document.addEventListener('DOMContentLoaded', function() {
	
	/** FIRST CANVAS**/

	let firstCanvas = document.querySelector('#first-canvas'),
		ctx1 = firstCanvas.getContext("2d");

	ctx1.fillStyle = getRndColor();
	ctx1.strokeStyle = getRndColor();
	ctx1.font = "18px Arial";
	
	//Rectangle
	ctx1.fillText("Rectangle:",0,20); 
	ctx1.fillRect(0,40,150,75);

	//Line
	ctx1.fillText("Line:",0,150);
	ctx1.moveTo(0,170);
	ctx1.lineTo(200,170);
	ctx1.stroke();

	//Circle
	ctx1.fillText("Circle:",0,220);
	ctx1.beginPath();
	ctx1.arc(100,320,70,0,2*Math.PI);
	ctx1.stroke(); 

	function getRndColor() {
	    let r = 255*Math.random()|0,
	        g = 255*Math.random()|0,
	        b = 255*Math.random()|0;

	    return `rgb(${r}, ${g}, ${b})`;
	}
});