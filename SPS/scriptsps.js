let but = document.querySelectorAll(".choice");
const arr = ["Stone" , "Paper" , "Scissor"];
let meg = document.querySelector("#msg");
let pscore = document.querySelector("#player-score");
let cscore = document.querySelector("#comp-score");
let p = 0;
let c = 0;

but.forEach((button) =>{
    button.addEventListener("click", () => {
    let count = Math.floor(Math.random() *3);
    console.log(count);
    let comprep = arr[count];
    let userrep = button.getAttribute("id");
    if(userrep === comprep){
        meg.innerText = `Computer Response: ${comprep} , Draw`;
    }
        else if(userrep === "Stone"){
            if(comprep === "Scissor"){
                meg.innerText = `Computer Response: ${comprep} , Player wins`;
                p++;
                pscore.innerText = p;
            }
            else{
                meg.innerText = `Computer Response: ${comprep} , Computer wins`;
                c++;
                cscore.innerText = c;
            }  
    }
    else if(userrep === "Scissor"){
        if(comprep === "Paper"){
            meg.innerText = `Computer Response: ${comprep} , Player wins`;
            p++;
            pscore.innerText = p;
        }
        else{
            meg.innerText = `Computer Response: ${comprep} , Computer wins`;
            c++;
            cscore.innerText = c;
        }
    }
    else{
        if(comprep === "Stone"){
            meg.innerText = `Computer Response: ${comprep} , Player wins`;
            p++;
            pscore.innerText = p;
        }
        else{
            meg.innerText = `Computer Response: ${comprep} , Computer wins`;
            c++;
            cscore.innerText = c;
        }
    }

})
});