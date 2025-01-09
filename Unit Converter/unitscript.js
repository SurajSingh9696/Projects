const lengthUnits = {
    "Meter": "m",
    "Kilometer": "km",
    "Centimeter": "cm",
    "Millimeter": "mm",
    "Mile": "mi",
    "Yard": "yd",
    "Foot": "ft",
    "Inch": "in",
  };
  
  const volumeUnits = {
    "Liter": "l",
    "Milliliter": "ml",
    "Cubic Meter": "m3",
    "Cubic Centimeter": "cm3",
    "Gallon": "gal",
    "Pint": "pt",
    "Quart": "qt",
  };
  
  const areaUnits = {
    "Square Meter": "m2",
    "Square Kilometer": "km2",
    "Square Centimeter": "cm2",
    "Square Mile": "mi2",
    "Acre": "ac",
    "Hectare": "ha",
  };
  
  const massUnits = {
    "Kilogram": "kg",
    "Gram": "g",
    "Milligram": "mg",
    "Pound": "lb",
    "Ounce": "oz",
    "Ton": "t",
  };
  
  const dataUnits = {
    "Byte": "b",
    "Kilobyte": "kb",
    "Megabyte": "mb",
    "Gigabyte": "gb",
    "Terabyte": "tb",
    "Petabyte": "pb",
  };
  
  const speedUnits = {
    "Meters Per Second": "m/s",
    "Kilometers Per Hour": "km/h",
    "Miles Per Hour": "mph",
    "Knot": "kt",
  };
  
  const timeUnits = {
    "Second": "s",
    "Minute": "min",
    "Hour": "h",
    "Day": "d",
    "Week": "wk",
    "Year": "yr",
  };
  
  const temperatureUnits = {
    "Celsius": "C",
    "Fahrenheit": "F",
    "Kelvin": "K",
  };
  

  

const but = document.querySelectorAll("button");

const unitbut = document.querySelectorAll(".button button");

const selectFrom = document.querySelector("#from");

const selectTo = document.querySelector("#to");

const inputFrom = document.querySelector(".infrom");

const inputTo = document.querySelector(".into");


const image = document.querySelector("#img");


let URL = "";


unitbut.forEach((button) =>{
    button.addEventListener("click", () => {
        but.forEach((butt)=>{
            butt.classList.remove("bor");
        })
        button.classList.add("bor");
    })
})

function optionfiller(options){
    console.log(options);
    selectFrom.innerHTML = "";
    selectTo.innerHTML = "";
    for(let opt in options){
        let option1 = document.createElement("option");
        option1.value = options[opt];
        option1.textContent = opt;
        let option2 = document.createElement("option");
        option2.value = options[opt];
        option2.textContent = opt;
        selectFrom.appendChild(option1);
        selectTo.appendChild(option2);
    }
}

but.forEach((button) =>{
    button.addEventListener("click", () => {
        let butval = button.getAttribute("id");
        if(butval === "length"){
            optionfiller(lengthUnits);
        }
        else if(butval === "time"){
            optionfiller(timeUnits);
        }
        else if(butval === "temperature"){
            optionfiller(temperatureUnits);
        }
        else if(butval === "area"){
            optionfiller(areaUnits);
        }
        else if(butval === "mass"){
            optionfiller(massUnits);
        }
        else if(butval === "volume"){
            optionfiller(volumeUnits);
        }
        else if(butval === "speed"){
            optionfiller(speedUnits);
        }
        else if(butval === "data"){
            optionfiller(dataUnits);
        }
        else if(butval === "reset"){
            inputTo.value = "";
            inputFrom.value = "";
        }
        else{
            if(butval === "convert"){
                URL = `https://api.apiverve.com/v1/unitconverter?value=${inputFrom.value}&from=${selectFrom.value}&to=${selectTo.value}`;
                console.log(URL);
        const headers = {
        'x-api-key': 'your api key here',
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        };

async function fetchData() {
  try {
    const response = await fetch(URL , {
      method: 'GET',
      headers: headers,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json(); // Parse the response as JSON
    let result = data.data.result.result;
    console.log(result); // Handle the parsed JSON data
    inputTo.value = result;
  } catch (error) {
    console.error('Error:', error); // Handle any errors
  }
}

// Call the async function
fetchData();

            }
        }
    })
})
let temp = "";

image.addEventListener("click" , ()=>{
    temp = selectFrom.value;
    selectFrom.value = selectTo.value;
    selectTo.value = temp;
})