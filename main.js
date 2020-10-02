const input = document.querySelector("input");
const p = document.querySelector("miner");


const letters = /[a-z]/i;
const number = /[0-9]/;
const special = /[!@#$%^&*]/;
const minValue = 10;


const check = () => {
    if (input.value !== ''){
       waitPassword()
    } else {
        p.style.color = '';
    }
};


input.addEventListener("keyup", check)
