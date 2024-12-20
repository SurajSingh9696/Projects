const sub = document.querySelector(".subdisplay p");
const main = document.querySelector(".maindisplay p");

console.log(sub.innerText);
console.log(main.innerText);

const butdis = document.querySelectorAll(".dis");

const butop = document.querySelectorAll(".op");

const butalldel = document.querySelector("#alldel");

const eq = document.querySelector(".equal");

const dot = document.querySelector("#dot");


let val = "";
let valsub = "";
let value1 = 0;
let value2 = 0;
let operator = "";
console.log(butdis)

let ans = 0;

butdis.forEach((but) =>{
    but.addEventListener("click", () => {
        console.log(but.value);
        val = val + but.value;
        if(parseInt(val) > 9999999999999999999){
            val = "1";
        }
        if(but.value === "."){
            but.disabled = true;
        }
        valsub = valsub + but.value;
        sub.innerText = valsub;
        main.innerText = val;
        console.log(parseFloat(val))
    })
})

butop.forEach((but) =>{
    but.addEventListener("click", () => {
        console.log(but.value)
        dot.disabled = false;
        value1 = parseFloat(val);
        valsub = `${valsub} ${but.value} `;
        val = "";
        operator = but.value;
        sub.innerText = valsub;
        main.innerText = val;
        butop.forEach((but1) =>{
            but1.disabled = true;
        })
    })
})

eq.addEventListener("click" , ()=>{
    value2 = parseFloat(val);
    switch(operator){
        case "+":
        ans = value1 + value2;
        break;
        case "-":
        ans = value1 - value2;
        break;
        case "*":
        ans = value1 * value2;
        break;
        case "/":
        ans = value1 / value2;
        break;
        case "%":
        ans = (value1 / value2)*100;
        break; 
        case "^":
        ans = value1 ** value2;
        break;       
    }
    if(ans > 9999999999999999999){
        ans = "1";
    }
    val = ans;
    main.innerText = val;
    valsub = ans;
    sub.innerText = valsub;
    butop.forEach((but)=>{
        but.disabled = false;
    })

    console.log(value2)
})

butalldel.addEventListener("click" , ()=>{
    val = "";
    ans = 0;
    valsub = "";
    value1 = 0;
    value2 = 0;
    operator = "";
    sub.innerText = valsub;
    main.innerText = val;
    butop.forEach((but)=>{
        but.disabled = false;
    })
    dot.disabled = false;
})