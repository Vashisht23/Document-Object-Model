// Store the Amount of Bill in prompt()
let getBill = prompt();

// Formula for calculating Type 1 Bill
let createTipType1 = getBill * (20/100); 

// Formula for calculating Type 2 Bill
let createTipType2 = getBill * (15/100);

// Formula for calculating Type 3 Bill
let createTipType3 = getBill * (10/100);


// Tip: when stuck write comments

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
	// Remember No condition to else 
else {
	alert("No Tip");
}
}


tipCalculator();
