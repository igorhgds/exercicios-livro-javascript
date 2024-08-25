const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

let resposta = ""           //string com a resposta a ser exibida
let numContas = 0           //inicializa o contador
let valTotal = 0            //e acumulador (variáveis globais)

frm.addEventListener("reset", () => {
    numContas = 0
    valTotal = 0
    resposta = ""
    resp1.innerText = ""
    resp2.innerText = ""
    frm.inDescricao.focus()
})

frm.addEventListener("submit", (e) => {
    e.preventDefault()          // evita o envio do formulário

    const descricao = frm.inDescricao.value
    const valor = Number(frm.inValor.value)

    numContas++                     // adiciona valores ao contador e acumulador
    valTotal = valTotal + valor     // ou: valTotal += valor

    resposta = resposta + descricao + " - R$: " + valor.toFixed(2) + "\n"
    resp1.innerText = `${resposta} --------------------------------`
    resp2.innerText = `${numContas} Conta(s) - Total R$: ${valTotal.toFixed(2)}`

    frm.inDescricao.value = ""      //limpa os campos form
    frm.inValor.value = ""
    frm.inDescricao.focus()         //posiciona no campo inDescricao do form
}) 