const texto = '1,2,3,4,5,6,a.b c!d?e[f'

//para definir um conjunto de caracteres usa [] 

const regexPares = /[02468]/g
console.log(texto.match(regexPares));

const texto2 = 'João não vai passear na moto.'
const regexComESemAssento = /n[aã]/g
console.log(texto2.match(regexComESemAssento));