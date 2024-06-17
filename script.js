let resultado = document.getElementById("resultado");

function calcular (numero) {
   if (resultado.textContent === '0' && numero !== '.') {
      resultado.textContent = numero;
   } else {
      resultado.textContent += numero;
   }
}

function limpar () {
   resultado.textContent = '0';
}

function calcularResultado() {
    try {
        resultado.textContent = eval(resultado.textContent);
    } catch (error) {
        resultado.textContent = 'Erro';
    }
}