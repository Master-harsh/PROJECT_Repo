let form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height == '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please enter a valid HEIGHT`;
    } else if(weight == '' || weight < 0 || isNaN(weight)){
       results.innerHTML = `Please enter a valid WEIGHT`;
    } else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        let weightGuide;
        if (bmi < 18.6) {
            weightGuide = `Under weight`;
        } else if(bmi >= 18.6 && bmi <= 24.9) {
            weightGuide = `Normal weight`;
        } else{
            weightGuide = ` Overweight`;
        }

        results.innerHTML = `BMI : ${bmi} AND YOU ARE ${weightGuide}`;
    }
});
