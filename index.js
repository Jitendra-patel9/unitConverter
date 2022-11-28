/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputValue = document.getElementById("input-value")
let btn = document.getElementById("convert-btn")
let length = document.getElementById("length")
let volumne = document.getElementById("volumne")
let mass = document.getElementById("mass")

btn.addEventListener("click",function(){
    let temp = inputValue.value
    len(temp)
    vol(temp)
    mas(temp)
})


function len(val){
    let vm = val*3.281
    let vd = val/3.281
    let s=`
    <h3>Length (Meter/Feet)</h3> 
    <span>
    ${val} meters = ${vm.toFixed(2)} feet
    </span> 
    <div class="vl"></div> 
    <span> ${val} feet = ${vd.toFixed(2)} meters </span>
    `  
    length.innerHTML = s
}

function vol(val){
    let vm = val*0.264
    let vd = val/0.264
    let s=`
    <h3>Length (Meter/Feet)</h3> 
    <span>
    ${val} meters = ${vm.toFixed(2)} feet
    </span> 
    <div class="vl"></div> 
    <span> ${val} feet = ${vd.toFixed(2)} meters </span>
    `  
    volumne.innerHTML = s
}

function mas(val){
    let vm = val*2.204
    let vd = val/2.204
    let s=`
    <h3>Length (Meter/Feet)</h3> 
    <span>
    ${val} meters = ${vm.toFixed(2)} feet
    </span> 
    <div class="vl"></div> 
    <span> ${val} feet = ${vd.toFixed(2)} meters </span>
    `  
    mass.innerHTML = s
}