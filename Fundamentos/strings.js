const escola = "Cod3r"

console.log(escola.charAt(4)); // Mostra a letra que esta no indice 4 da string escola
console.log(escola.charCodeAt(3)); // Retorna no indice 3 o valor Unicode do letra que esta nesta posição
console.log(escola.indexOf('3')); // Retorna o indice respectivo ao valor 3

console.log(escola.substring(1)) // Retorna o valor que esta do indice 1 até o final da string
console.log(escola.substring(0, 3)) // Retorna os volares que estão no intervalo do indice 0 até 2 

console.log("Escola ".concat(escola).concat("!")) // Concatena valores literais e variáveis
console.log(escola.replace(3, "e")); // Replace substitui o numero 3 da string Cod3r pela letra "e"

console.log("Welliton, Andreia, Paulo Henrique, Emanuella".split(",")); // O Split gera um Array a partir do conjunto de uma String