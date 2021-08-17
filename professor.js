function camposValidos() {

    const nome = document.getElementById("nome").value
    const altura = parseFloat(document.getElementById("altura").value)
    const peso = parseFloat(document.getElementById("peso").value)

    return (nome.trim() !== '' && !isNaN(altura) && !isNaN(peso))
}

function classificarIMC(imc) {
    let classificacao = ''
    if (imc < 18.5) {
        classificacao = 'abaixo do peso.'
    } else if (imc < 25) {
        classificacao = 'com peso ideal. Parabéns!'
    } else if (imc < 30) {
        classificacao = 'levemente acima do peso.'
    } else if (imc < 35) {
        classificacao = 'com Obesidade grau I.'
    } else if (imc < 40) {
        classificacao = 'com obesidade grau II.'
    } else {
        classificacao = 'com obesidade grau III. Tome cuidado!'
    }

    return classificacao

}

function calcularIMC(altura, peso) {
    return peso / (altura ** 2)
}

function exibirIMC() {
    const nome = document.getElementById("nome").value
    const altura = parseFloat(document.getElementById("altura").value)
    const peso = parseFloat(document.getElementById("peso").value)
    const resultado = document.getElementById("resultado")

    if (camposValidos()) {

        const imc = calcularIMC(altura, peso).toFixed(1)
        const classificacao = classificarIMC(imc)

        resultado.textContent = `${nome} seu IMC é ${imc} e você está ${classificacao}`
    } else {
        resultado.textContent = "Preencha todos os campos"
    }



}

document.getElementById("calcularButton").addEventListener("click", exibirIMC)