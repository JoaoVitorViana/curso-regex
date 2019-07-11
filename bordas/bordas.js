const texto = 'Romário era um excelente jogador\n, mas hoje é um político questionador'


//^ na primeira posição fora de conjunto significa inicio/ na primeira posição dentro de um conjunto significa negação

console.log(texto.match(/r/gi))
console.log(texto.match(/^r/gi)) // ^ inicio da string ou da linha
console.log(texto.match(/r$/gi)) // $ final de string ou final da linha

console.log(texto.match(/^r.*r$/gi)) // problema do dotall