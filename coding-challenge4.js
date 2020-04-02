let calJohnsBmi;
let calMarksBmi;

let Mark = {
	fullName : 'Mark Boucher',
	marksHeight : 2,
	marksMass : 69,
	calMarkBmi: function (){
		 return Mark.marksMass / (Mark.marksHeight * Mark.marksHeight);
		
	}
};

let John = {
	fullName : 'John Jones',
	johnsHeight : 1.90,
	johnsMass : 75,
	calJohnBmi: function (){

		return John.johnsMass / (John.johnsHeight * John.johnsHeight);
		

	}
};

console.log(Mark.calMarkBmi());
console.log(John.calJohnBmi());

calMarksBmi =  Mark.calMarkBmi();
calJohnsBmi =  John.calJohnBmi();

let checkBmi = calMarksBmi > calJohnsBmi ;
console.log('So it true that Mark has higher Bmi?' + checkBmi);



if(calMarksBmi > calJohnsBmi){
	console.log(`Yes Mark Boucher has Higher BMI ` + calMarksBmi)
}
else {
	console.log(`Yes John Jones has Higher BMI ` + calJohnsBmi)

}
