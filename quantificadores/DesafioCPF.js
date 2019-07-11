//DesafioCPF.js extrair os cpf
const texto = `CPF dos aprovados:
- 600.567.890-12
- 765.998.345-23
- 886.566.712-51
- 491.822.767-81
- 859.727.802-16
`

console.log(texto.match(/\d{3}\.\d{3}\.\d{3}-\d{2}/g))