const nome = document.getElementById("nome")
const peso = document.getElementById("peso")
const altura = document.getElementById("altura")
const imc = calcularImc(peso.value, altura.value)
const status = exibirResultado(imc)

resultado.value = status

function exibirResultado(imc, nome) {
    let status

    if (imc < 18.5) {
        status = 'Abaixo do peso'
    } else if (imc < 24.9) {
        status = 'Peso ideal'
    } else if (imc < 29.9) {
        status = 'Acima do peso'
    } else if (imc < 34.9) {
        status = 'Obesidade grau I'
    } else if (imc < 39.9) {
        status = 'Obesidade grau II'
    } else {
        status = 'Obesidade grau III'
    }
    status = nome + "IMC = " +
        imc + ", " + status
    alert(status)
    return status
}

function calcularImc(peso, altura) {

    const imc = peso / Math.pow(altura, 2)
    return imc
}

calcularButton.addEventListener("click", exibirResultado(imc, nome))