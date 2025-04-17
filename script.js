const exercises = [
  { name: "Push-Ups", met: "6.91" },
  { name: "Pull-Ups", met: "8.00" },
];

const exerciseDropDown = document.getElementById('exercise-selection');

// Populate exercise drop-down
for (let i = 0; i < exercises.length; i++) {
  let option = document.createElement("option");
  option.text = exercises[i].name;
  option.value = exercises[i].met;
  exerciseDropDown.appendChild(option);
}

const duration = [
  { length: "15 Minutes", number: 0.25 },
  { length: "30 Minutes", number: 0.50 },
  { length: "45 Minutes", number: 0.75 },
  { length: "60 Minutes", number: 1.00 },
];

const durationDropDown = document.getElementById('duration-selection');

// Populate duration drop-down
function populateDuration(duration) {
  for (let i = 0; i < duration.length; i++) {
    let option = document.createElement("option");
    option.text = duration[i].length;
    option.value = duration[i].number;
    durationDropDown.appendChild(option);
  }
}
populateDuration(duration);

// Calorie calculation function
function calcCaloriesBurned(met, duration, weight) {
  return met * duration * weight;
}

// Button event listener
const calcButton = document.getElementById('submit-button');

calcButton.addEventListener("click", () => {
  const metValue = parseFloat(exerciseDropDown.value);
  const durationValue = parseFloat(durationDropDown.value);
  const weightValue = parseFloat(document.getElementById('weight-input').value);

  if (isNaN(metValue) || isNaN(durationValue) || isNaN(weightValue)) {
    alert("Please fill in all fields correctly.");
    return;
  }

  const calories = calcCaloriesBurned(metValue, durationValue, weightValue);
  console.log(`Calories burned: ${calories.toFixed(2)}`);

  // Optional: Display it in the HTML
  document.getElementById('result').innerText = `Calories burned: ${calories.toFixed(2)}`;
});