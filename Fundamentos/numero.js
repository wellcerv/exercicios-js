const peso1 = 1.0;
const peso2 = Number("2.0"); // A constante peso2 esta utilizando a função Number

console.log(peso1);
console.log(typeof peso1);

console.log(peso2);
console.log(typeof peso2);

const avaliacao1 = 9.871;
const avaliacao2 = 6.871;

const total = avaliacao1 * peso1 + avaliacao2 * peso2;
const media = total / (peso1 + peso2);

console.log(media);
console.log(media.toFixed(2)); // toFixed(2) Esta definindo apenas 2 casas decimais
console.log(media.toString(2)); // toString(2) Faz a conversão de numero decimal para numero binário