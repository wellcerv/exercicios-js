// Todas as variáveis no JS começam com a palavra reservada var ou let
// O let é a forma mais atual para criação de variáveis

var teste = 3;

let teste2 = 5;

// com o VAR podemos delclarar novamente uma variável que é permitido, porem é uma pratica não muito utiizada.
//A variável assumira o novo valor
var teste = 30;

//Com o LET não é permitido a declaração novamente. No caso abaixo o JS dara erro de declaração
//let teste2 = 50;

var total = 0;

total = teste + teste2;

console.log(total);

//Declarar uma constante com o CONST. Após a declaração, não é permitido a modificação do valor desta constante
const teste3 = 10;

console.log(teste3);