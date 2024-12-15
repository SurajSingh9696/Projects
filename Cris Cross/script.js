let but = document.querySelectorAll(".box");
let res = document.querySelector("#Reset");


let turnO = true;

const winpatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

];

let reset =  ()=>{
    but.forEach((box)=>{
        box.disabled = false;
        box.textContent = "";
        turnO = true;
    })
};

let check = 0;
let check2 = 0;
let win = "";

but.forEach((box)=>{
    box.addEventListener("click" , ()=>{
        console.log("box was clicked");
        if(turnO === true){
            box.textContent = "O";
            turnO = false;
        }
        else{
            box.textContent = "X";
            turnO = true;
        }
        box.disabled = true;
        
        
        
        


        winner();
        if(check == 1){
            setTimeout(()=>{
                alert(`Player ${win} wins. Congratulation`);
                reset();
            } , 500);
            check = 0;
           
        }
        but.forEach((button) =>{
            if(button.textContent == "X" || button.textContent == "O"){
                check2++;
                console.log(check2);
            }
            if(check2 == 9){
                setTimeout(()=>{
                    alert(`No Player wins. Congratulation`);
                    reset();
                } , 500);
            }
           
            });
        check2 = 0;

    });
    
});



const winner = () =>{
    for(let pat of winpatterns){
       if(but[pat[0]].innerText === but[pat[1]].innerText){
        if(but[pat[1]].innerText === but[pat[2]].innerText){
            if(but[pat[0]].innerText === "X" || but[pat[0]].innerText === "O"){
            win = but[pat[0]].innerText;
            check = 1;
            
        }
          
        }

       }

    }

};



res.addEventListener("click", reset);



