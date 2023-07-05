// const http = require('http')
// const PORT = 5000



// ---------------------------------------------------------------------------------------------

// Atividade 1: Criando um servidor HTTP básico
// ● Crie um servidor HTTP simples que escute em uma determinada porta.
// ● Implemente um tratamento de requisições para responder com uma
// mensagem de "Olá, mundo!".
// ● Inicie o servidor e teste acessando-o no navegador

// CÓDIGO

// const server = http.createServer((req, res)=>{
//     res.write('Olá, Mundo!')
//     res.end()
// })

// ---------------------------------------------------------------------------------------------
// Atividade 2: Trabalhando com rotas
// ● Expanda o servidor HTTP criado na atividade anterior para lidar com
// diferentes rotas.
// ● Implemente uma rota "/home" que responda com a mensagem "Bem-vindo à
// página inicial!".
// ● Implemente uma rota "/about" que responda com a mensagem "Sobre nós:
// somos uma empresa dedicada a...".

// CÓDIGO

// const server = http.createServer((req, res)=>{
//         if(req.url === '/home'){
//             res.writeHead(200 , {'Content-Type':'text/plan'})
//             res.write('Bem-vindo à página inicial!')
//             res.end()
//         } else if(req.url === '/about'){
//             res.writeHead(200 , {'Content-Type':'text/plan'})
//             res.write('Sobre nós: somos uma empresa dedicada a...')
//             res.end()
//         }
//     })
// ---------------------------------------------------------------------------------------------
// Atividade 3: Enviando dados JSON (Desafio)
// ● Modifique o servidor HTTP para lidar com requisições POST.
// ● Implemente uma rota "/api/users" que permita o envio de dados JSON
// contendo informações de usuários.
// ● Armazene esses dados em uma estrutura de dados (por exemplo, um array)
// e responda com uma mensagem de confirmação.



// ---------------------------------------------------------------------------------------------
// Atividade 4: Utilizando parâmetros de URL
// ● Modifique o servidor HTTP para lidar com parâmetros de URL.
// ● Implemente uma rota "/api/users/:id" que receba um ID de usuário como
// parâmetro.
// ● Procure o usuário correspondente ao ID na estrutura de dados let users = [
// {id:1, nome:"Carlos"}, {id:2, nome:"Bruno"}, {id:3, nome:"Letícia"} ]; e
// responda com suas informações.


// ---------------------------------------------------------------------------------------------


// server.listen(PORT, ()=>{
//     console.log(`Servidor rodando na porta ${PORT}✌️`)
// })