// funções callbacks são funções passadas para outras funções

const calc = function(operacao, num1, num2){
  return operacao(num1, num2);
}

const soma = function(num1, num2){
  return num1 + num2;
}

const sub = function(num1, num2){
  return num1 - num2;
}

const resultSoma = calc(soma, 1, 2);
const resultSub = calc(sub, 3, 2);

console.log(resultSoma)
console.log(resultSub)