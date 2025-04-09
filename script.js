const exercises = [
  { name: "Push-Ups", met: "6.91" },
  { name: "Pull-Ups", met: "8.00" },
];

const exerciseDropDown = document.getElementById('exercise-selection');

// populates exercise drop-down
for (let i = 0; i < exercises.length; i++) {
    let option = document.createElement("option");
      option.text = exercises[i].name;
      option.value = exercises[i].met;
      exerciseDropDown.appendChild(option);
}

console.log(exerciseDropDown.value)

const duration = [
  { length: "15 Minutes", number: .25},
  { length: "30 Minutes", number: .50},
  { length: "45 Minutes", number: .75},
  { length: "60 Minutes", number: 1.00},
];

const durationDropDown = document.getElementById('duration-selection');

function populateDuration(duration) {
  for (let i = 0; i < duration.length; i++) {
    let option = document.createElement("option");
      option.text = duration[i].length;
      option.value = duration[i].number;
      durationDropDown.appendChild(option);
  }
}
populateDuration(duration)


console.log(durationDropDown.value)

const weightValue = document.getElementById('weight-input').value;
console.log(weightValue); 

function calcCaloriesBurned(exerciseDropDown, durationDropDown, weightValue) {
  return exerciseDropDown.value * durationDropDown.value * weightValue; 
};

const calcButton = document.getElementById('submit-button');

calcButton.addEventListener("click", () => {
  calcCaloriesBurned()
}); 

