const texto = 'Pedrinho (filho do Pedro Silva) é doutor do ABC!'

//grupo dentro de um conjunto não é um grupo
console.log(texto.match(/[(abc)]/gi))
console.log(texto.match(/([abc])/gi))
console.log(texto.match(/abc/gi)) //tentar evitar grupos desnecessarios