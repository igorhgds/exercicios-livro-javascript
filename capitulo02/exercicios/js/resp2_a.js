//cria referencia ao form e ao elemento h3 (resposta)
const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

//cria um "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    const medicamento = frm.inMedicamento.value
    const preco = Number(frm.inPreco.value)

    const promocao = Math.floor(preco * 2)

    resp1.innerText = (`Promoção de ${medicamento}`)
    resp2.innerText = (`Leve 2 por apenas R$: ${promocao.toFixed(2)}`)

    e.preventDefault()
})