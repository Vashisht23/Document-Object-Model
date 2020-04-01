let getMarksHeight = prompt(); // Add Mark's Height 
let getMarksWeight = prompt(); // Add Marks's Mass


// Store it in Another variable 
let calMarksBmi = getMarksWeight / (getMarksHeight * getMarksHeight); 

// Round Up the BMI & alert the BMI
alert(`Mark's Bmi is ` + Math.floor(calMarksBmi));

let getJohnsHeight = prompt(); // Add John's  Height
let getJohnsWeight = prompt(); // Add John's Mass

// Store it in Another variable
let calJohnsBmi = getJohnsWeight / (getJohnsHeight * getJohnsHeight);
// Round Up the BMI & alert the BMI
alert(`John's Bmi is ` + Math.floor(calJohnsBmi));

// Check who's BMI is better
let checkBmi = calMarksBmi > calJohnsBmi ;

// Alert The Bollean Result
console.log('So it true that Mark has higher Bmi?' + checkBmi);





