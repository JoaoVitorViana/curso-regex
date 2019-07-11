const texto = `1,2,3,4,5,6,a.b c!d?e	-
f_g`

console.log(texto.match(/\d/g).join('')) //somentes números
console.log(texto.match(/\D/g).join('')) //não números

console.log(texto.match(/\w/g).join('')) // caracteres [a-zA-Z0-9_]
console.log(texto.match(/\W/g).join('')) // não caracteres [a-zA-Z0-9_]

console.log(texto.match(/\s/g)) //espaços tab nova linha [\t\n\r\f]
console.log(texto.match(/\S/g).join(''))//não espaços

// \b \B