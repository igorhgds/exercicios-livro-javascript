// cria e referencia ao form e elemento onde será exibida a resposta
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

// "ouvinte" de evento, acionado quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault()      //evita o envio do form

    const nome = frm.inNome.value           //obtem valores do form
    const masculino = frm.inMasculino.checked
    const altura = Number(frm.inAltura.value)

    let peso                //declara variavel peso

    if (masculino) {        //se masculino (ou, if masculino == true)
        peso = 22 * Math.pow(altura, 2)     //Math.pow elevar ao quadrado(2)
    } else {
        peso = 21 * Math.pow(altura, 2)
    }

    // const peso = masculino ? 22 * Math.pow(altura, 2) : 21 * Math.pow(altura, 2)

    //apresenta a resposta (altera o conteudo do elemento h3)
    resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)}kg`
})

frm.addEventListener("reset", () => {
    resp.innerText = ""     //limpa o conteúdo do elemento h3 que exibe a resposta
})