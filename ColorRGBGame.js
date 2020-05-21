var numOfSquares = 6;
var colors = generateColors(numOfSquares);
var pickedColor = pickColor();
var square = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.querySelector(".message");
var reset = document.querySelector(".bt-reset");
var hardButton = document.querySelector("#hard");
var easyButton = document.querySelector("#easy");
colorDisplay.textContent = pickedColor;


hardButton.addEventListener("click", function(){
	easyButton.classList.remove("selected");
	this.classList.add("selected");
	numOfSquares = 6;
	reset.textContent = "Novas Cores";
	colors = generateColors(numOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(i=0;i<square.length;i++){
		if(square[i].style.display === "none"){
			square[i].style.display = "block";
		}
		square[i].style.backgroundColor = colors[i];
	}

})

easyButton.addEventListener("click", function(){
	numOfSquares = 3;
	colors = generateColors(numOfSquares);
	pickedColor = pickColor();
	reset.textContent = "Novas Cores";
	colorDisplay.textContent = pickedColor;
	hardButton.classList.remove("selected");
	this.classList.add("selected");
	for(i=0;i<square.length;i++){
		square[i].style.backgroundColor = colors[i];
		if(i > 2){
			square[i].style.display = "none"
		}
	}

})

reset.addEventListener("click", function(){
	colors = generateColors(numOfSquares);
	pickedColor = pickColor();
	reset.textContent = "Novas Cores";
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue"
	message.textContent = ""
	for(i=0;i<colors.length;i++){
		square[i].style.backgroundColor = colors[i];
	}

})




for(i=0;i<colors.length;i++){
	square[i].style.backgroundColor = colors[i];
	square[i].addEventListener("click", function(){
	var squareChoised = this.style.backgroundColor
	if(squareChoised === pickedColor){
		message.textContent = "Acertou!"
		reset.textContent = "Tentar de novo?"
		h1.style.backgroundColor = squareChoised;
		for(i=0;i<colors.length;i++){
			square[i].style.backgroundColor = squareChoised;
		}
	}else{
		message.textContent = "Tente de novo!"
		this.style.backgroundColor = "#232323";
	}
	})

}


function generateColors(n){
	var arr = [];
	for(i=0;i<n;i++){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	var colorGenerated=  "rgb("+r+", "+g+", "+b+")"
	arr.push(colorGenerated);
	}
	return arr;
}

function pickColor(){
	var numberGenerated= Math.floor(Math.random()*colors.length);
	return colors[numberGenerated];
}
