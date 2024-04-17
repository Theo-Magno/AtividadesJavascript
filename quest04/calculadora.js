const display = document.querySelector(".display");
const teclas = document.querySelectorAll("button");
let operacaoAtual = "";
let operacaoAnterior = "";
let operacao = "";
let resultado = "";

teclas.forEach((tecla) => {
  tecla.addEventListener("click", (e) => {
    const valor = e.target.innerText;

    if (e.target.classList.contains("operacao")) {
      operacao = valor;
      operacaoAnterior = resultado;
      resultado = "";
    } else if (valor === "=") {
      resultado = calcular(operacaoAnterior, resultado, operacao);
      operacaoAnterior = "";
      operacao = "";
    } else if (valor === "C") {
      resultado = "";
    } else {
      resultado += valor;
    }

    display.value = resultado;
  });
});

function calcular(num1, num2, operacao) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  switch (operacao) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    case "%":
      return num1 % num2;
    case "log":
      return Math.log(num1);
    case "^":
      return num1 ** num2;
    case "√":
      return Math.sqrt(num1);
    case "!":
      return factorial(num1);
    case "sin":
      return Math.sin(num1);
    case "cos":
      return Math.cos(num1);
    case "tan":
      return Math.tan(num1);
    case "tanh":
      return Math.tanh(num1);
    case "sinh":
      return Math.sinh(num1);
    case "cosh":
      return Math.cosh(num1);
    default:
      return "Operação inválida";
  }
}

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
