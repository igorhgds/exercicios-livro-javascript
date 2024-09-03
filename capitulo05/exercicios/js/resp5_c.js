const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const numero = Number(frm.inNumero.value);

    if(isNaN(numero) || numero <= 0){
        alert("Por favor, insira um número inteiro positivo");
        return;
    };

    // Inicializa variáveis para armazenar os divisores e a soma dos divisores
    let divisores = [];
    let somaDivisores = 0;

    // Encontra os divisores do número
    for( let i = 1; i <= numero / 2; i++){
        if (numero % i === 0) {
            divisores.push(i);
            somaDivisores += i;
        }
    }

    // Verifica se o número é perfeito
    const ePerfeito = somaDivisores === numero;

    // Cria uma string para exibir o resultado
    let resultado = `Divisores de ${numero}: ${divisores.join(', ')} (Soma: ${somaDivisores})\n`;
    resultado += ePerfeito ? `${numero} é um número perfeito.` : `${numero} não é um número perfeito.`;

    resp1.innerText = resultado

})