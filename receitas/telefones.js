const texto = `
Lista telefonica:
    - (21) 12345-6789
    - (65) 62300-2234
    - 5678-7771
    - (85)3333-7890
    - (1) 4321-1234
`

console.log(texto.match(/(\(\d{2}\)\s?)?\b\d{4,5}\-\d{4}/g))