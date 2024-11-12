// const Random = Math.floor((Math.random() * 6) + 1000);
//  cons Otp = Random.toString().split("").join(" ");
const Random = parseInt(Math.random() * 10000);

const Button  = document.getElementById('Btn');

const Result = document.getElementById('result');

Button.addEventListener("click", () => {
    if (Random.toString().length < 4) {
        Random = Random.toString().padEnd(4, "0");
    } 

    if (Random.toString().length > 4) {
        Random = Random.toString().slice(0, 4)
    } 

    setTimeout(() => {
        Result.innerHTML = `OTP: ${Random}`;
    }, 2000)

    setTimeout(() => {
        document.getElementById('result').style.display = "none";
        // Result.innerText = "none"
    }, 120000);
})