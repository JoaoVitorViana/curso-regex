const texto = 'Você precisa responder sim, não ou não sei!'
console.log(texto.match(/sim|não\ssei|não/g))
console.log(texto.match(/sim|não|sei/g))