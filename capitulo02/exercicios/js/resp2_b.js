//cria referencia ao form e ao elemento h3 (resposta)
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

//cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const preco = Number(frm.inPreco.value)
    const tempo = Number(frm.inTempo.value)

    const fracao = Math.ceil(tempo / 15)
    const valorFinal = preco * fracao

    resp.innerText = `Valor a Pagar R$: ${valorFinal.toFixed(2)}`

    e.preventDefault()
})