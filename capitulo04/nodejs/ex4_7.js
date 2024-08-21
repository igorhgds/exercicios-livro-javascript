const prompt = require("prompt-sync")()     //adiciona o pacote prompt-sync

const pessoas = Number(prompt("Nº de Pessoas: "))       //lê dados de entrada
const peixes = Number(prompt("Nº de Peixes: "))

let pagar                       //declara variavel pagar

if (peixes <= pessoas){         // condição definida no exemplo
    pagar = pessoas * 20
} else {
    pagar = (pessoas * 20) + ((peixes - pessoas) * 12)
}

console.log(`Pagar R$: ${pagar.toFixed(2)}`)        //exibe o valor a ser pago
