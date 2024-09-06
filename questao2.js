const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function Fibonacci(num) {
  let valor1 = 0;
  let valor2 = 1;

  if (num === 0 || num === 1) {
    return true;
  }

  while (valor2 < num) {
    let temp = valor2;
    valor2 = valor1 + valor2;
    valor1 = temp;
  }

  return valor2 === num;
}

rl.question("Por favor, insira um número: ", (input) => {
  const numeroInformado = parseInt(input);

  if (isNaN(numeroInformado)) {
    console.log("Por favor, insira um número válido.");
  } else if (Fibonacci(numeroInformado)) {
    console.log(`${numeroInformado} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`${numeroInformado} não pertence à sequência de Fibonacci.`);
  }

  rl.close();
});
