const input = document.querySelector("input");
const p = document.querySelector(".miner");


const letters = /[a-z]/i;
const number = /[0-9]/;
const special = /[!@#$%^&*]/;
const minValue = 10;



const waitPassword = () => {

if (input.value.length > minValue && input.value.match(letters)&& input.value.match(numbers)&& input.value.match(special)) {
input.style.color = "green";
p.style.color = "green";

} else if (input.value.length > minValue && input.value.match(letters)&& input.value.match(numbers)) {
    input.style.color = "orange";
    p.style.color = "orange";

} else {
    input.style.color = "red";
    p.style.color = "red";
  }
};

const check = () => {
    if (input.value !== ''){
       waitPassword()
    } else {
        p.style.color = '';
    }
};


input.addEventListener("keyup", check);
