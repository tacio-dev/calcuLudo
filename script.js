const resultado = document.querySelector(".resultado");
const botoes = document.querySelectorAll(".botao-calc");

let conta = "";

botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
        const valor = botao.innerText;

        lidarClick(valor);
    });
});


function lidarClick(valor){
    if(valor === "C"){
        conta = "";
        resultado.innerText = "0";
        return;
    }

    if (valor === "←") {
        conta = conta.slice(0, -1);
        resultado.innerText = conta || "0";
        return;
    }

    if (valor === "=") {
        calcular();
        return;
    }

    if (valor === "÷") valor = "/";
    if (valor === "×") valor = "*";
    if (valor === "−") valor = "-";
    if (valor === "+") valor = "+";

    const operadores = ["+", "-", "*", "/"];
    const ultimo = conta.slice(-1);

    if (operadores.includes(valor) && operadores.includes(ultimo)) {
        return;
    }

    conta += valor;
    resultado.innerText = conta;
}

function calcular() {
    try {
        conta = eval(conta).toString();
        resultado.innerText = conta;
    } catch {
        resultado.innerText = "Erro";
        conta = "";
    }
}