/*
Atividade
Crie uma função que recebe dois números como parâmetros.
Confira se os números são iguais.
Confira se a soma dos números é maior que 10 ou menor que 20.
Retorne uma string dizendo "Os números num1 e num2 não/são iguais. 
                            Sua soma é soma, que é maior/menor que 10 e maior/menor que 20".
Exemplo:

Input: 1, 2
Output: Os números 1 e 2 não são iguais. Sua soma é 3, que é menor que 10 e menor que 20.
*/

function comparaNumeros(num1, num2) {

  if(!num1 || !num2) return 'Defina 2 numeros'; // validação dos parametros

  const primeiraFrase = criaPrimeirafrase(num1, num2)
  const segundaFrase = criaSegundafrase(num1, num2)
  //return numerosIguais ? 'são iguais' : 'não são iguais'; if ternário

  return `${primeiraFrase} ${segundaFrase}`
}


function criaPrimeirafrase(num1, num2) {
  let saoIguais = ''

  if (num1 !== num2) {
    saoIguais = 'não'
  }

  return `O números ${num1} e ${num2} ${saoIguais} são iguais.`
}

function criaSegundafrase(num1, num2) {
  const soma = num1 + num2

  const compara10 = soma > 10
  const compara20 = soma > 20

  let resultado10 = 'menor'
  let resultado20 = 'menor'

  if (compara10) {
    resultado10 = 'maior'
  }

  if (compara20) {
    resultado20 = 'maior'
  }

  return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`
}

console.log(comparaNumeros(5, 7))