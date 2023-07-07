const path = require('path')

// const custumPath = '/relatorios/carlos/relatoriosemanal.pdf'

// console.log(path.dirname(custumPath))
// console.log(path.basename(custumPath))
// console.log(path.extname(custumPath))

console.log(path.resolve('text.txt'))

const midFolder = 'relatorios'
const fileName = 'arquivo.txt'

const finalPath = path.join('/', 'arquivo',midFolder, fileName)

console.log(finalPath)