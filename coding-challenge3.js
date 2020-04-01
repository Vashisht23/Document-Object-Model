
let getBill = prompt();
let createTipType1 = getBill * (20/100); 

let createTipType2 = getBill * (15/100);
let createTipType3 = getBill * (10/100);

function tipCalculator (){
	
	if (getBill < 50){
alert(" Tip to be given is : " +createTipType1 +'$');
}
else if(getBill >= 50 && getBill < 200)
{
	alert("Tip to be given is :" +createTipType2 + '$');
}
else if (getBill >= 200 && getBill <=500){
	alert("Tip to be given is :" +createTipType3 + '$');
}
else {
	alert("No Tip");
}
}


tipCalculator();