 // List of exercises containing name & met value to be used later 4 calculations
const exercises = [
  { name: "Select an exercise"},
  { name: "Walking (3.0 mph)", met: "3.3"},
  { name: "Walking (4.0 mph)", met: "5.0"},
  { name: "Running (7.5 mph / 8 min mile)", met: "11.5"},
  { name: "Running (6.0 mph) / 10 min mile", met: "9.8"},
  { name: "Biking (<10 mph, leisure)", met: "4.0"},
  { name: "Biking (12-14 mph, moderate)", met: "8.0"},
  { name: "Biking (16-19 mph, vigorous)", met: "12.0"},
  { name: "Biking (12-14 mph, moderate)", met: "8.0"},
  { name: "Swimming (light / moderate effort)", met: "6.0"},
  { name: "Swimming (vigorous effort)", met: "10.0"},
  { name: "Hiking (Standard)", met: "6.0"},
  { name: "Aerobics (low impact)", met: "5.0"},
  { name: "Aerobics (high impact)", met: "7.3"},
  { name: "Stair climbing (slow pace)", met: "4.0"},
  { name: "Stair climbing (fast pace)", met: "8.8"},
];

// assigns id to html element, dropdown box for exercises
const exerciseDropDown = document.getElementById('exercise-selection'); 

 // Populate exercise drop-down w/ for loop & checks if correct amount pop
function populateExercises(exercises) {
  // variable to check how many exercises are inputed
  exerciseOptions = 0; 

  // loop to populate dropdown boxes w/ items from list
  for (let i = 0; i < exercises.length; i++) { 
    let option = document.createElement("option");
    option.text = exercises[i].name;
    option.value = exercises[i].met;
    exerciseDropDown.appendChild(option);
    exerciseOptions++ 
  }

  // selection to make sure the correct amount of exercises make it in
  if (exercises.length > 16) {
    alert("Error Exercises Overflow")
  }
  console.log(exerciseOptions); // console log 
  return exerciseOptions; // returns amount inputed into drop-down

}
populateExercises(exercises); // call to function 

// list for duration and value to be included in equation
const duration = [ 
  { length: "Select a duration"},
  { length: "15 Minutes", number: 0.25 },
  { length: "30 Minutes", number: 0.50 },
  { length: "45 Minutes", number: 0.75 },
  { length: "60 Minutes", number: 1.00 },
  { length: "75 Minutes", number: 1.25 },
  { length: "90 Minutes", number: 1.50 },
  { length: "105 Minutes", number: 1.75 },
  { length: "120 Minutes", number: 2.00 },
];

// assigns id to drop down for durations
const durationDropDown = document.getElementById('duration-selection'); 

// Populate duration drop-down w/ for loop & checks if correct amount pop
function populateDuration(duration) { 
   // variable to check how many exercises are inputed
  durationOptions = 0;

  // loop to populate dropdown boxes w/ items from list
  for (let i = 0; i < duration.length; i++) { 
    let option = document.createElement("option");
    option.text = duration[i].length;
    option.value = duration[i].number;
    durationDropDown.appendChild(option); 
    durationOptions++;  
  }

  // selection to make sure the correct amount of exercises are populated
  if (duration.length > 9) {  
    alert("Error Durations Overflow")
  }

  console.log(durationOptions); // console log
  return durationOptions; // return variable
}
populateDuration(duration);

// Calorie calculation function, multiplies met by duration by weight (kg) values
function calcCaloriesBurned(met, duration, weight) {
  return met * duration * weight;
}

const calcButton = document.getElementById('submit-button'); // Button event listener

//button is clicked, finds values selected drop downs/ weight, assigns in calcCaloriesBurned()
calcButton.addEventListener("click", () => {
  // assigns selected items and assigns values 
  const metValue = parseFloat(exerciseDropDown.value);
  const durationValue = parseFloat(durationDropDown.value);
  const weightValue = parseFloat(document.getElementById('weight-input').value);

  // conditional statement, gives message if field is not filled in/blank
  if (isNaN(metValue) || isNaN(durationValue) || isNaN(weightValue)) {
    alert("Please fill in all fields correctly.");
    return;
  }

  // passes value into function to be multiplied and stores it in the calories variable
  const calories = calcCaloriesBurned(metValue, durationValue, weightValue);

  //logs calories burned in console
  console.log(`Calories burned: ${calories.toFixed(2)}`);
  
  // displays output/ calories burned to user
  document.getElementById('result').innerText = `Calories burned: ${calories.toFixed(2)}`;
});