let costum = document.getElementById("tip")
const totaltip = document.getElementById("total")
const totalP = document.getElementById("tip_amount")
let valor = document.getElementById("valor")
let people = document.getElementById("people")
const PalPermitidas = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."]
let x = " "
const cor = document.querySelector("button")
const zero = document.getElementById("zero")

function calc(tip){
   if(people.value > 0 && x != " " && valor.value > 0){ 
   let totalT = (valor.value * tip)/100
   let totalPeople = (totalT/people.value).toFixed(2)
   totalP.innerText ="$ " + totalPeople
   let tt = (parseFloat(valor.value) + totalT)/people.value
   tt=tt.toFixed(2)
   totaltip.innerText = "$ " + tt
   }
   else{
    totalP.innerText ="$ 0.00"
    totaltip.innerText= "$ 0.00"
   }
}


valor.addEventListener("keydown", function (ev) {
    ev.preventDefault()
    if (PalPermitidas.includes(ev.key)) {
      valor.value += ev.key
    }
    if (ev.key === "Backspace") {
        valor.value = valor.value.slice(0,-1)
    }
    calc(x)
})

people.addEventListener("keydown", function (ev) {

    ev.preventDefault()
    if (PalPermitidas.includes(ev.key)) {
      people.value += ev.key
    }

    if(ev.key === "Backspace") {
        people.value = people.value.slice(0, -1)
    }
    
    if(people.value != 0){
        people.style.border = "none";
        zero.style.display = "none";
    }

    if(people.value == 0){
        people.style.border = "1px solid rgb(240, 128, 128)";
        zero.style.display = "block";
    }

    calc(x)
})

costum.addEventListener("keydown", function (ev) {
    ev.preventDefault()
    if (PalPermitidas.includes(ev.key)) {
      costum.value += ev.key
    }
    if (ev.key === "Backspace") {
        costum.value = costum.value.slice(0, -1)
    }
    x = costum.value
    calc(x)
    trocaCost(costum)
})

costum.addEventListener("click",function(){
    calc(costum.value)
    trocaCost(costum)
})

document.querySelectorAll(".tip").forEach(function(t){
    t.addEventListener("click", function(){
        x = t.value
        calc(x)
        trocaCorBNT(t)
    })
})

        
document.getElementById("reset").addEventListener("click",function(){
    totalP.innerText ="$ 0.00"
    totaltip.innerText= "$ 0.00"
    people.value = " "
    valor.value = " "
    x = " "
    costum.value = null
})


function trocaCorBNT(t){
    document.querySelectorAll(".tip").forEach(function(c){
        c.style.backgroundColor = "hsl(183, 100%, 15%)";
    })
    costum.style.border = "none"
    t.style.backgroundColor = "hsl(172deg, 67%, 45%)";
}

function trocaCost(){
    document.querySelectorAll(".tip").forEach(function(c){
        c.style.backgroundColor = "hsl(183, 100%, 15%)";
    })
    costum.style.border = "1px solid hsl(172deg, 67%, 45%)";
}

people.onfocus = function(){
    people.style.border ="1px solid hsl(172deg, 67%, 45%)";
}

