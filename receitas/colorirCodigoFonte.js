const aplicarCor = (txt, reg, cor) => txt.replace(reg, `<span style="color: #${cor}"><b>$1</b></span>`);

const files = require('./files');
const texto = files.read('codigofonte.html');
const codeRegex = /<code>[\s\S]*<\/code>/i;
let codigo = texto.match(codeRegex)[0];


//String
codigo = aplicarCor(codigo, /(\".*\")/g, 'ce9178');

//palavras reservadas
codigo = aplicarCor(codigo, /\b(package|public|class|static|if|else)\b/g, 'd857cf');

//tipos..
codigo = aplicarCor(codigo, /\b(void|int)\b/g, '1385e2')

//comentarios de multiplas linhas
codigo = aplicarCor(codigo, /(\/\*[\s\S]*\*\/)/g, '267703');

//comentarios de uma linha
codigo = aplicarCor(codigo, /(\/\/.*?\n)/g, '267703')

const conteudofinal = texto.replace(codeRegex, codigo);

files.write('codigoalterado.html', conteudofinal);