const prompt = require("prompt-sync")()

const valor = Number(prompt("Valor da Compra R$: "))
const aux = Math.floor(valor / 20)          // nº de parcelas sem condições

const parcelas = aux == 0 ? 1 : aux > 6 ? 6 : aux       //operador ternário
const valorParcela = valor / parcelas                   //calculo valor da parcela

console.log(`Pode pagar em ${parcelas}x de R$: ${valorParcela.toFixed(2)}`)