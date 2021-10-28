// valores padrão de parametros

// Pré ES2015
function exponencial (array, num){
  if (num === undefined){
    num = 1;
  }

  const result = [];

  for(let i = 0; i < array.length; i++){
    result.push(array[i] ** num);
  }

  return result;
}

exponencial([1, 3, 5, 7])
exponencial([1,2,3,4],4)

//Pós ES2015
function exponencial (array, num = 1){
  const result = [];

  for(let i = 0; i < array.length; i++){
    result.push(array[i] ** num);
  }
  return result;
}

exponencial([1, 3, 5, 7])
exponencial([1,2,3,4],4)


//objeto "  ARGUMENTS"
// Resulta em um array com todos os parametros passados, quando a função foi invocada.

function findMax(){
  let max = -Infinity;

  for(let i = 0; i < arguments.length; i++){
    if (arguments[i] > max){
      max = arguments[i];
    }
  }

  return max;
}