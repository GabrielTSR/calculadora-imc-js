const buttonCalcular = document.querySelector("#calcularButton")
buttonCalcular.addEventListener("click", calcularImc);

function calcularImc() {

    const nome = document.getElementById("nome")
    let peso = document.getElementById("peso")
    peso.value = peso.value.replace(',', '.')
    let altura = document.getElementById("altura")
    altura.value = altura.value.replace(',', '.')
    const imc = (peso.value / Math.pow(altura.value, 2)).toFixed(2)

    let resultado = document.getElementById("resultado")

    resultado.innerHTML = exibirResultado(imc)



}

function exibirResultado(imc) {
    let status

    if (imc < 18.5) {status = 'Abaixo do peso'} 
    else if (imc <= 24.9) {status = 'Peso ideal!'} 
    else if (imc <= 29.9) {status = 'Acima do peso'} 
    else if (imc <= 34.9) {status = 'Obesidade grau I'} 
    else if (imc <= 39.9) {status = 'Obesidade grau II'} 
    else if (imc >= 40) {status = 'Obesidade grau III'} 
    else {
        alert("ATENÇÃO: OS CAMPOS NÃO FORAM PREENCHIDOS CORRETAMENTE. CERTIFIQUE-SE DE COLOCAR APENAS NÚMEROS NOS CAMPOS DE \"ALTURA\" E \"PESO\".")
        return " "
    }
    status = nome.value + ", seu IMC é igual a " +
        imc + ", " + status

    return status
}