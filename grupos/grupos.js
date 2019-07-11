const texto = 'O José Simão é muito engraçado... hehehehehehe'

console.log(texto.match(/(he)+/g))

const texto2 = 'http://www.site.info www.escola.ninja.br google.com.ag'
console.log(texto2.match(/(.{0,7}\w+)?\.\w+\.(\w+)?(\.\w+)?/g))
console.log(texto2.match(/(http:\/\/)?(www\.)?\w+\.\w{2,}(\.\w{2})?/g))