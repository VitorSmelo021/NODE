const fs = require('fs')

const arqAntigo = 'novo.txt'
const arqNovo = 'aqvnovo.txt'
 
fs.rename(arqAntigo, arqNovo, function(err){
    if(err){
        console.log(err)
        return
    }

    console.log(`O arquivo ${arqAntigo} foi renomeado para ${arqNovo}`)
})