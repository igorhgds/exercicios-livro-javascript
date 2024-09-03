const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const num = Number(frm.inNumero.value)

    let temDivisor = 0

    for (let i = 2; i <= num / 2; i++){
        if (num % i == 0) {
            temDivisor = 1  //muda o flag
            break           //sai da repetição
        }
    }

    if(num > 1 && !temDivisor) {
        resp.innerText = `${num} é número primo`
    } else{
        resp.innerText = `${num} Não é primo`
    }

    // let numDivisores = 0 // declara e inicia contador
    // for (let i = 1; i<= num; i++){      //percorre todos os possiveis divisores de num
    //     if (num % i == 0) {             //verifica se i (1, 2, 3...) é divisor de num
    //         numDivisores++              // se é, incrementa contador
    //     }
    // }
    // if(numDivisores == 2) {
    //     resp.innerText = `${num} é número primo`
    // } else{
    //     resp.innerText = `${num} Não é primo`
    // }
})