// Criando um Atrray
const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores); // Consulta todos os elementos do Array
console.log(valores[0]); // Consultar somente o primeiro elemento do Array

// Incluir um elemento no Array
valores[4] = 10;
console.log(valores);

// Se incluirmos um indice mais distantes como por exemplo o indice 10, o JS incluira sem problemas
valores[10] = 100;
console.log(valores);

// Verificar o tamanho do Array
console.log(valores.length);

// Incluindo valores diversos em um Array
valores.push({id: 3}, false, null, "teste");
console.log(valores);

// Retirar um elemento do Array - Ultimo elemento
valores.pop();
console.log(valores);

// Retirar um elemento do Array indicando o indice onde este o elemento
delete valores[0];
console.log(valores);