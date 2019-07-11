const texto = '1,2,3,a.b c!d?e[f'

console.log(texto.match(/\D/g).join(''))
console.log(texto.match(/[^0-9]/g).join('')) // ^ dentro de um conjunto é negação
console.log(texto.match(/[^\d!\?\[\s,\.]/g).join(''))

const texto2 = '1: !"#$%&\'()*+,-./ 2: :;<=>?@'

console.log(texto2.match(/[^!-/:-@\s]/g))