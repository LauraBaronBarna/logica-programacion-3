/*Crear un programa en Javascript que realice lo siguiente:
Debe solicitar al usuario un número por prompt o por input y guardarlo.
Debe calcular el factorial del número recibido.
Debe imprimir el resultado por consola o por el DOM.
Debe ser capaz de identificar si el dato de entrada es de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar el dato.*/
function Factorial(numero) {
    let numFactorial = 1;
    for (let i = 1; i <= numero; i++) {
        numFactorial *= i;
    }
    return numFactorial;
  }
  
  function pedirNumero() {
    let input;
    do {
      input = prompt("Escribe un número: ");
      if (isNaN(input)) {
        console.error("Error, ingresa un valor numérico: ");
      }
    } while (isNaN(input));
  
    return parseFloat(input);
  }
  
  const numeroUsuario = pedirNumero();
  const resultadoFactorial = Factorial(numeroUsuario);
  

  const resultadoDOM = document.createElement('p');
  resultadoDOM.textContent = `El factorial de ${numeroUsuario} es: ${resultadoFactorial}`;
  document.body.appendChild(resultadoDOM);
  