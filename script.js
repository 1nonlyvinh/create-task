const exercise = document.getElementById('exercises');

const workoutArray = [];
index = 0; 

console.log(exercise)

for (let i = 0; i < exercise.options.length; i++) {
    workoutArray.push(exercise.options[i].value);
}


console.log(workoutArray);



const intensityArray = [
    { intensity: 'High'},
    { intensity: 'Medium'},
    { intensity: 'Low'},
];

const durationArray = [
    { duration: '15'},
    { duration: '30'},
    { duration: '45'},
    { duration: '60'},
    { duration: 'More than 60 Minutes'},
];

```
                    <option value=""></option>
                    <option value="push-ups">Push Ups</option>
                    <option value="Pull-ups">Pull Ups</option>
                    <option value="cardio">Cardio</option>
                    <option value="squats">Squats</option>
                    <option value="burpees">Burpees</option>
                    <option value="dips ">Dips</option>
                    <option value="plank">Plank</option>
```