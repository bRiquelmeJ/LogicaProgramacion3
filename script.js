function calcularFactorial() {
    const inputNumero = document.getElementById('numero');
    const numero = parseInt(inputNumero.value);
  
    if (isNaN(numero)) {
      mostrarError('Por favor, ingrese un número válido.');
      return;
    }
  
    const resultadoFactorial = factorial(numero);
    mostrarResultado(`El factorial de ${numero} es: ${resultadoFactorial}`);
  }
  
  function factorial(num) {
    if (num < 0) {
      return "No se puede calcular el factorial de un número negativo.";
    } else if (num === 0 || num === 1) {
      return 1;
    } else {
      let resultado = 1;
      for (let i = 2; i <= num; i++) {
        resultado *= i;
      }
      return resultado;
    }
  }
  
  function mostrarResultado(mensaje) {
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = mensaje;
  }
  
  function mostrarError(mensaje) {
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `Error: ${mensaje}`;
  }
  