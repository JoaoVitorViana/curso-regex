const texto = 'áéíóú àèìòù âêîôû äö ü'
console.log(texto)
console.log(texto.match(/[\u00E0-\u0770]/g).join(''))
console.log(texto.match(/[À-ü]/g).join(''))