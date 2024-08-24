const frm = document.querySelector("form")
const resp = document.querySelector("pre")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    let resposta = ""

    //cria um laço de repetição
    for(let i = 1; i <= 10; i++){
        // a variavel resposta vai acumulando os novos conteudos (nos 2 formatos)
        resposta = resposta + numero + " x " + i + " = " + (numero * i) + "\n"
        // resposta = `${resposta}${numero} x ${i} = ${numero * i} \n`
    }
    // conteudo tag pre é alterado para exibir a tabuada do numero
    resp.innerText = resposta
})