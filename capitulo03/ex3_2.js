const prompt = require("prompt-sync")()     //adiciona o pacote ao programa

const veiculo = prompt("Veículo: ")         //le os dados de entrada
const preco = Number(prompt("Preço R$: "))

const entrada = preco * 0.5                 //calculo entrada
const parcela = entrada / 12                //calculo parcela

console.log(`Promoção: ${veiculo}`)         //exibe as respostas
console.log(`Entrada de R$: ${entrada.toFixed(2)}`)
console.log(`+12x de R$ ${parcela.toFixed(2)}`)