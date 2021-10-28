// a função autoInvocavel consiste em uma função entre parenteses "()", seguido por outro par de parenteses, que representa sua chamada.

(
  function(){
    let name = 'jonatas lima'
    return name;  // jonatas lima
  }
)(); 

// Essa função também pode conter parâmetros

(
  function(a,b){
    return a + b; // retorna 5
  }
)(2,3);


// ou armazenada em uma variável

const soma3 = (
  function(a,b){
    return a + b; // retorna 5
  }
)(2,3);

console.log(soma3)

