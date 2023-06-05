//Importar os modulos
// fs = core module
// const fs = require('fs')
// // console.log(fs)

// =====================readFile=============================

// fs.readFile('arquivo.txt', 'utf8', (err, data)=> {
//     // console.log(err)
//     console.log(data.length)
// })

// =============appendFile========================//

//se o arquivo existe, ele adiciona no final do arquivo//

// const fs = require('fs')
// fs.appendFile('arquivo2.txt', 'end content', function (err){
//     if (err) throw err;
//     console.log('saved')
// })

// =====================open=============================//

// const fs = require('fs')
// fs.open ('arquivo2.txt', 'w', function(err){
//     if(err) throw(err)
//     console.log('saved')
// })

// ======================writeFile=========================//

//se o arquivo já existir, ele vai mudar tudo o que tem dentro, se não existir, ele cria//

// const fs = require('fs')
// fs.writeFile('arquivo2.txt', 'Substitua as informações', function (err){
//     if(err) throw (err)
//     console.log('saved')
// })

// ==========================unlink================================//
//apaga o arquivo indicado//


// const fs = require('fs')
// fs.unlink('arquivo2.txt', function(err){
//     if(err) throw(err)
//     console.log('File deleted!');
// })

// ========================rename================================= //

//renomeia o arquivo indicado//

// const fs = require('fs')
// fs.rename('novoarquivo.txt','arquivo2.txt', function (err){
//     if(err) throw(err)
//     console.log('Renamed')
// })

// ============================Atividade=============================

// const fs = require('fs')
// fs.appendFile('atv-1.txt', 'parte 1', function (err){
//     if (err) throw err;
//     console.log('saved')

// })

fs.readFile('atv-1.txt', 'utf8', (err, data)=> {

    console.log(data.length)
})
