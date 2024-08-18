//Elaborar um programa que leia o salário e o tempo de serviço do funcionário na empresa. Sabendo que a cada 4 anos(quadrienio) o funcionário recebe acréscimo de 1% no salário, calcule e informe o número de quadriênios a que o funcionário tem direito e o salário final

const prompt = require("prompt-sync")()     // adiciona o pacote ao programa

const salario = Number(prompt("Salário R$: "))      //recebe os dados
const tempoServico = Number(prompt("Tempo (anos): "))

const quadrienios = Math.floor(tempoServico / 4)        //calcula os quadrienios
const acrescimo = salario * quadrienios / 100           //... e acréscimo

console.log(`Quadriênios: ${quadrienios}`)
console.log(`Salário Final R$: ${(salario+acrescimo).toFixed(2)}`)