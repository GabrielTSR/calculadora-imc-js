function calcularImc() {

    const nome = document.getElementById("nome")
    let peso = document.getElementById("peso")
    peso.value = peso.value.replace(',', '.')
    let altura = document.getElementById("altura")
    altura.value = altura.value.replace(',', '.')
    const imc = (peso.value / Math.pow(altura.value, 2)).toFixed(2)

    let resultado = document.getElementById("resultado")

    resultado.innerHTML = classificarIMC(imc, nome.value)

}

function classificarIMC(imc, nome) {
    let status
    let classImc

    if (imc < 18.5) {
        status = 'Abaixo do peso'
        classImc = 'imc-red'

    } else if (imc <= 24.9) {
        status = 'Peso ideal!'
        classImc = 'imc-blue'

    } else if (imc <= 29.9) {
        status = 'Acima do peso'
        classImc = 'imc-yellow'

    } else if (imc <= 34.9) {
        status = 'Obesidade grau I'
        classImc = 'imc-red'

    } else if (imc <= 39.9) {
        status = 'Obesidade grau II'
        classImc = 'imc-red'

    } else if (imc >= 40) {
        status = 'Obesidade grau III'
        classImc = 'imc-red'

    } else {
        alert("ATENÇÃO: OS CAMPOS NÃO FORAM PREENCHIDOS CORRETAMENTE. CERTIFIQUE-SE DE COLOCAR APENAS NÚMEROS NOS CAMPOS DE \"ALTURA\" E \"PESO\".")
        return " "
    }

    if (nome === '') {
        status = `Seu IMC é igual a <span class="imc ${classImc}">${imc}</span> ${status}`
    } else {
        status = `${nome}, seu IMC é igual a <span class="imc ${classImc}">${imc}</span> ${status}`
    }



    return status
}

const buttonCalcular = document.querySelector("#calcularButton")
buttonCalcular.addEventListener("click", calcularImc);