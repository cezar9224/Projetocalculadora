
function numero(caractere) {
  const valorInput = document.querySelector('.display').value

  document.querySelector('.display').value = valorInput + caractere
}

function calcular () {

    const calculete = document.querySelector('.display').value

    document.querySelector('.display').value = eval(calculete)
    

}

function Limpar() {
    document.querySelector('.display').value = ""
}