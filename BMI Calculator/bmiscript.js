const input = document.querySelectorAll("input");

const bmiNo = document.querySelector("#bmino");

const bmiStatus = document.querySelector("#bmistatus");

console.log(input)


input.forEach((each) =>{
    each.addEventListener("keydown", (event) => {
        if(event.key === "Enter"){
            let height = input[0].value;
            let weight = input[1].value;
            let bmi = weight / (height * height);
            bmiNo.textContent =`Your Body Mass Index(BMI): ${bmi.toFixed(2)}`;
            if(bmi < 18.5){
                bmiStatus.innerHTML = `You are <b>Underweight</b>`
            }
            else if(bmi >= 18.5 && bmi <= 24.9){
                bmiStatus.innerHTML = `You have <b>Healthy weight</b>`
            }
            else if(bmi >= 25 && bmi <= 29.9){
                bmiStatus.innerHTML = `You are <b>Overweight</b>`
            }
            else if(bmi >= 30 && bmi <= 39.9){
                bmiStatus.innerHTML = `You are <b>Obese</b>`
            }
            else{
                bmiStatus.innerHTML = `You are <b>Extremely Obese</b>`
            }
        }
    })
})