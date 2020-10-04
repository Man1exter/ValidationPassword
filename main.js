const inputy = document.querySelector("input");
const p = document.querySelector(".miner");

const inputMain = document.querySelector(".convert");
const buttonReset = document.querySelector(".button2");
const buttonChange = document.querySelector(".button1");
const buttonConvert = document.querySelector(".button3");
const result = document.querySelector(".sums");
const fh1 = document.querySelector(".f");
const ch1 = document.querySelector(".c");


let fahrenheit;
let celsius;

const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*]/;
const minValue = 5;



    
const waitPassword = () => {

if (inputy.value.length > minValue && inputy.value.match(letters) && inputy.value.match(numbers) && inputy.value.match(special)) {

inputy.style.color = "green";
p.style.color = "green";
p.innerHTML = "WELL PASSWORD...";

} else if (inputy.value.length > minValue && inputy.value.match(letters) && inputy.value.match(numbers)) {

    inputy.style.color = "orange";
    p.style.color = "orange";
    p.innerHTML = "MEDIUM PASSWORD...";

} else {
    inputy.style.color = "red";
    p.style.color = "red";
    p.innerHTML = "WEAK PASSWORD...";
  }
};

const check = () => {
    if (inputy.value !== ''){
       waitPassword()
    } else {
        p.style.color = '';
        p.innerHTML = "EMPTY PASSWORD...";
    }
};
const swap = () => {
    if(fh1.innerText === "°F"){ //równy
        fh1.innerText = "°C ";
        ch1.innerText = "°F ";
        result.innerText ='';
    } else {
        fh1.innerText = "°F ";
        ch1.innerText = "°C ";
        result.innerText ='';
      }
    };
    const cel = () => {
    fahrenheit = inputMain.value * 1.8 + 32;
    result.innerText = `${inputMain.value}°C = ${fahrenheit.toFixed(1)}°F`;
    inputMain.value = '';
    };
    const fah = () => {
    celsius = (inputMain.value - 32) / 1.8;
     result.innerText = `${inputMain.value}°F = ${celsius.toFixed(1)}°C`;
     inputMain.value = '';
    };
    const mustNeed = () => {
        if(inputMain.value !== ''){
          if(ch1.innerText === '°C'){
cel()
          }else{
fah()
          }
        }else {
result.innerText = "YOU MUST WRITE A NUMBER!"
        }
    }
    const resets = () => {
        inputMain.value = '';
        result.innerText = '';
    }

buttonChange.addEventListener("click", mustNeed)
inputy.addEventListener("keyup", check);
buttonConvert.addEventListener("click", swap);
buttonReset.addEventListener("click",resets)
/////////////////////////////////////////////////
























