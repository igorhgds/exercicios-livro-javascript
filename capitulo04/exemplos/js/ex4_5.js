const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numero = Number(frm.inNumero.value)
    const raiz = Math.sqrt(numero)      //calcula raiz quadrado do número

    if (Number.isInteger(raiz)){        //verifica de raiz é um numero inteiro
        resp.innerText = `Raiz: ${raiz}`
    } else {
        resp.innerText = `Não há raiz exata para o número ${numero}`
    }
})