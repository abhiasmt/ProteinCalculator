const form = document.querySelector("form");

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const gender = document.querySelector('#Gender').value;
    const age = parseInt(document.querySelector('#age').value);
    const weight = parseFloat(document.querySelector('#weight').value);
    const height = parseFloat(document.querySelector('#height').value);

    const result = document.querySelector('#result');
    const protein = document.querySelector('#protein');
    const calories = document.querySelector('#calories');

    
    if (isNaN(age) || age <= 0) {
        result.innerHTML = `Invalid Age`;
        return;
    }

    if (isNaN(weight) || weight <= 0) {
        result.innerHTML = `Invalid Weight`;
        return;
    }

    if (isNaN(height) || height <= 0) {
        result.innerHTML = `Invalid Height`;
        return;
    }

    let proteinIntake = weight * 1.5;  
    let calorieIntake;

    if (gender === "male") {
        calorieIntake = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        calorieIntake = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    protein.innerHTML = `Protein: ${proteinIntake.toFixed(2)} g/day`;
    calories.innerHTML = `Calories: ${Math.round(calorieIntake)} kcal/day`;
});