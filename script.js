const exercises = [
  { name: "Push-Up", met: "6.91" },
  { name: "Pull-Up", met: "8.00" },
];

const exerciseDropDown = document.getElementById('exercise-selection');

for (let i = 0; i < exercises.length; i++) {
    let option = document.createElement("option");
      option.text = exercises[i].name;
      option.value = exercises[i].met;
      exerciseDropDown.appendChild(option);
}
