const frm = document.querySelector("form")
const resp = document.querySelector("h3")


frm.addEventListener("submit", (e) => {
    e.preventDefault()

    const numMacacos = Number(frm.inMacacos.value)
    const numAnos = Number(frm.inAnos.value)

    if (numMacacos < 2){
        alert("O número de macacos deve ser superior ou igual a 2")
        return
    }
        
        let resposta = "";
        let macacos = numMacacos;
        for (let i = 1; i <= numAnos; i++){
            resposta += `${i}º ano: ${macacos} macacos \n`;
            if (i >= 1) {
                macacos *= 3;
            }
        }
        resp.innerText = resposta
})