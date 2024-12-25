const fromsel = document.querySelector("#from");

const tosel = document.querySelector("#to");

const fromin = document.querySelector("#infrom");

const toin = document.querySelector("#into");

const but = document.querySelector("#but");

const img = document.querySelector("#sym");


img.addEventListener("click" , ()=>{
    console.log("clicked");
    let temp = fromsel.value;
    fromsel.value = tosel.value;
    tosel.value = temp;
})


but.addEventListener("click" , ()=>{
    let from = fromsel.value;
    let to = tosel.value;
    let fromval = parseInt(fromin.value);
    switch(from){
        case "C":
            switch(to){
                case "F":
                    toin.value = (fromval * 9/5) + 32;
                    break;
                case "K":
                    toin.value = fromval + 273.15;
                    break;
                case "C":
                    toin.value = fromval;
            }
            break;
        case "F":
            switch(to){
                case "F":
                    toin.value = fromval;
                    break;
                case "C":
                    toin.value = (fromval - 32) * 5/9;
                case "K":
                    toin.value = ((fromval - 32) * 5/9) + 273.15;
                    break;
            }
            break;  
        case "K":
            switch(to){
                case "F":
                    toin.value = ((fromval - 273.15) - 32) * 5/9;
                    break;
                case "C":
                    toin.value = fromval - 273.15;
                    break
                case "K":
                    toin.value = fromval;
                    break;
            }
            break; 
    }

})