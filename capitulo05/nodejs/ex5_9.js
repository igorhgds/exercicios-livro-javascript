const prompt = require("prompt-sync")()
const produto = prompt("Produto: ")
const num = Number(prompt("Nº de Etiquetas: "))
// Cria um laço de repetição até num/2 - pois imprime duas etiquetas por linha

for(let i = 1; i <= num; i++){
    console.log(`${produto.padEnd(30)} ${produto.padEnd(30, ".")}`)
    console.log(`${produto.padEnd(30)} ${produto.padStart(30, ",")}`)
} 
if(num % 2 == 1) {
    console.log(produto)
}