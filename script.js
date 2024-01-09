var _ = require ('lodash');
console.log(_);
var array = [1,2,3,4,5];
console.log('Answer', _.without(array,3));

var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("gradient");
var randomB=document.querySelector("button");

// console.log(css);
// console.log(color1);
// console.log(color2);

function defaultInputColors()
{
	color1.value="#0000ff";
	color2.value="#ffff00";
	
}

function initialCSS()
{
	body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
    css.textContent = body.style.background + ";";
}

function changeBGColor()
{
	body.style.background= "linear-gradient(to right, "+ color1.value + "," + color2.value + ")"
	 css.textContent=body.style.background + ";";
}

function genNumbers()
{
	var r1 = getRandomColor();
	var r2 = getRandomColor();
	color1.value = r1;
	color2.value = r2;
	changeBGColor();	
}

function getRandomColor()
{
	return "#" + Math.floor(Math.random()*16777215).toString(16);
}
defaultInputColors();
initialCSS();
color1.addEventListener("input",changeBGColor);
color2.addEventListener("input",changeBGColor);
randomB.addEventListener("click",genNumbers);