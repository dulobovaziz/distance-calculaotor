let inp = document.querySelector("#formControlLg"),
    btn = document.querySelector("#btn");
let walk = document.querySelector("#walk_text"),
    bicycle = document.querySelector("#bicycle_text"),
    car = document.querySelector("#car_text"),
    plane = document.querySelector("#plane_text");
let walkInput = document.querySelector(".walk_input")
bicycleInput = document.querySelector(".bicycle_input"),
    carInput = document.querySelector(".car_input"),
    planeInput = document.querySelector(".plane_input")

let body = document.querySelector("body"),
    darkBtn = document.querySelector("#dark"),
    lightBtn = document.querySelector("#light");

btn.addEventListener("click", (e) => {
    e.preventDefault()
    if (inp == "" || walkInput.value == "" || bicycleInput.value == "" || carInput.value == "" || planeInput.value == "") {
        alert("Barcha ma'lumotlarni kiriting>>>");
    }
    else {
        walk.textContent = Number(inp.value) / Number(walkInput.value) + " Soatda boradi"
        bicycle.textContent = Number(inp.value) / Number(bicycleInput.value) + " Soatda boradi"
        car.textContent = Number(inp.value) / Number(carInput.value) + " Soatda boradi"
        plane.textContent = Number(inp.value) / Number(planeInput.value) + " Soatda boradi"
    }

})

darkBtn.addEventListener('click', () => {
    body.style.background = "#090036c7"
    body.style.color = "#fff"
    darkBtn.style.display = "none"
    lightBtn.style.display = "inline-block"
    lightBtn.style.color = "black"
})
lightBtn.addEventListener('click', () => {
    body.style.background = "#fff"
    body.style.color = "black"
    lightBtn.style.display = "none"
    darkBtn.style.display = "inline-block"
    darkBtn.style.color = "white"
})