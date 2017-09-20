function draw() {
	var BoardCanvas = document.getElementById('BoardCanvas');
	
	if (BoardCanvas.getContext){
		var ctx = BoardCanvas.getContext('2d');
		console.log("Draw!");
	}
	else{alert("Please use a HTML 5 compliant browser.")}
}