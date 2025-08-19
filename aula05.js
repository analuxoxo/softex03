let readline = require('readline-sync')

let nome = readline.question("qual é o seu nome?")
console.log("oi",nome)

let anonasci = readline.question("qual é o ano que você nasceu?")
console.log("nasci em",anonasci)

let idadepenal = 2025 - anonasci

if(idadepenal >= 18){

    console.log("preso")
}else{
    console.log("lili cantou!")
}



