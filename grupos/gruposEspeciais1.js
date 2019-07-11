const texto = 'Joao é calmo, mas no trânsito fica nervoso.'

console.log(texto.match(/[\wÀ-ú]+/gi))

// Positive lookahead
console.log(texto.match(/[\wÀ-ú]+(?=,)/gi))
console.log(texto.match(/[\wÀ-ú]+(?=\.)/gi))
console.log(texto.match(/[\wÀ-ú]+(?=, mas)/gi))


// Negativo lookahead
console.log(texto.match(/[\wÀ-ú]+\b(?!,)/gi)) //borda considera caracteres especiais como borda
console.log(texto.match(/[\wÀ-ú]+[\s|\.](?!,)/gi))