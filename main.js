const inputy = document.querySelector("input");
const p = document.querySelector(".miner");


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


inputy.addEventListener("keyup", check);
