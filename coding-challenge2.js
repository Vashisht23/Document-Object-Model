
// Average of  3 Games of Mumbai 
let averageMumbaiTotal = (33 + 29 + 40)/ 3;

// Average of 3 Games of Punjab
let averagePunjabTotal = (40 + 30 + 29)/ 3;

// Average of 3 Games of Chennai
let averageChennaiTotal = (28 + 26 + 31)/ 3;


// Comparisons Between 3 using && Operator 

if(averageChennaiTotal > averageMumbaiTotal &&  averageChennaiTotal > averagePunjabTotal){
  console.log(`Chennai is the Winner Highest Average total of ` + averageChennaiTotal)
}
else if(averageMumbaiTotal > averageChennaiTotal && averageMumbaiTotal > averagePunjabTotal){
  console.log(`Mumbai is the Winner Highest Average total of ` + averageMumbaiTotal)
}
else  {
  console.log(`Punjab is the Winner Highest Average total of ` + averagePunjabTotal)
}



