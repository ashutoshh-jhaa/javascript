let weight = 80;
let height = 1.5;

let bmi = weight / (height * height); //formula to calcualte body mass index

let weightStatus;

if (bmi < 18.5) {
  weightStatus = "Underweight";
} else if (bmi >= 18.5 && bmi <= 24.9) {
  weightStatus = "Healthy Weight";
} else if (bmi >= 25 && bmi <= 29.9) {
  weightStatus = "Overweight";
} else {
  weightStatus = "Obesity";
}

console.log(weightStatus);
