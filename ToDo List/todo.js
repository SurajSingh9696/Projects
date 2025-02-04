const main = document.querySelector("main");

const divClone = document.querySelector(".data");

const input = document.querySelector("#todo");

const add = document.querySelector("#add");

const add2 = document.querySelector("#add2");

const cancel = document.querySelector("#cancel")

const hidden = document.querySelector(".above");

const refresh = document.querySelector("#refresh");

if (localStorage.getItem("data") == null) {
    localStorage.setItem("data", JSON.stringify({}));
}

let data = JSON.parse(localStorage.getItem("data"));

if (!Array.isArray(data)) {
    data = [data];
}

console.log(data);


add.addEventListener("click", () => {
    hidden.style.visibility = "visible";
})



cancel.addEventListener("click", () => {
    hidden.style.visibility = "hidden";
})

let cloning = () => {

    data.forEach((data) => {
        let clone = divClone.cloneNode(true);
        clone.style.display = "flex";
        let but = clone.querySelector("button");
        clone.querySelector("h2").innerText = data.topic;
        but.setAttribute("id", data.topic);
        console.log(but.getAttribute("id"));
        main.appendChild(clone);
    })
}
cloning();


let donebut = main.querySelectorAll("button");


let addbut = (done) => {
    done.forEach((but) => {
        but.addEventListener("click", () => {
            console.log("clicked")
            let id = but.getAttribute("id");
            let newData = data.filter((item) => {
                if (item.topic != id) {
                    return item;
                }
            })
            localStorage.setItem("data", JSON.stringify(newData));
            location.reload();
        })
    })
}
addbut(donebut);


add2.addEventListener("click", () => {
    if (input.value == "") {
        alert("Please enter a topic");
    }
    else {
        let obj = { topic: input.value };
        data.push(obj);
        localStorage.setItem("data", JSON.stringify(data));
        hidden.style.visibility = "hidden";
        let clone = divClone.cloneNode(true);
        clone.style.display = "flex";
        let but = clone.querySelector("button");
        clone.querySelector("h2").innerText = obj.topic;
        but.setAttribute("id", obj.topic);
        main.appendChild(clone);
        donebut = main.querySelectorAll("button");
        addbut(donebut);
        input.value = "";
    }
})


refresh.addEventListener("click", () => {
    location.reload();
})




