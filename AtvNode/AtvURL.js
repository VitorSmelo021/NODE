// const url = require('url')


// ---------------------------------------------------------------------------------------------

// Atividade 1: Extração de informações da URL
// Escreva um programa em Node.js que receba uma URL como entrada e exiba as
// seguintes informações da URL:
// ● Protocolo utilizado (http, https, etc.)
// ● Nome do host (domínio)
// ● Caminho da URL
// ● Parâmetros de consulta (se houver)
// ● Fragmento (hash) da URL (se houver)
// Exemplo de entrada:
// http://www.example.com/path?param1=value1&param2=value2#section
// Saída esperada:
// Protocolo: http
// Host: www.example.com
// Caminho: /path
// Parâmetros: param1=value1&param2=value2
// Fragmento: section

// CÓDIGO


// const address = 'http://www.example.com/path?param1=value1&param2=value2#section';
// const parseUrl = new url.URL(address)


// console.log(parseUrl.protocol)
// console.log(parseUrl.host)
// console.log(parseUrl.pathname)
// console.log(parseUrl.search)
// console.log(parseUrl.hash)
// ---------------------------------------------------------------------------------------------

// Atividade 2: Construção de URLs
// Escreva um programa em Node.js que construa uma URL com base nas seguintes
// informações:
// ● Protocolo: http
// ● Host: api.example.com
// ● Caminho: /data
// ● Parâmetros de consulta: {param1: 'value1', param2: 'value2'}
// O programa deve exibir a URL completa construída.
// Saída esperada:URL: http://api.example.com/data?param1=value1&param2=value2



// CÓDIGO

// const urlObject = {
//     protocol: 'http:',
//     host: 'api.example.com',
//     pathname: '/data',
//     query: {param1: 'value1',param2: 'value2'}
// };

// const urlString = url.format(urlObject);
// console.log(urlString);


// ---------------------------------------------------------------------------------------------

// Atividade 3: Extração de informações de uma URL completa
// Escreva um programa em Node.js que receba uma URL completa como entrada e
// exiba as seguintes informações extraídas da URL:
// ● Protocolo utilizado
// ● Nome do host
// ● Caminho da URL
// ● Parâmetros de consulta (se houver)
// ● Fragmento (hash) da URL (se houver)
// Exemplo de entrada:
// https://www.example.com/path/to/resource?param1=value1#section

// Saída esperada:
// Protocolo: https
// Host: www.example.com
// Caminho: /path/to/resource
// Parâmetros: param1=value1
// Fragmento: section

// CÓDIGO

// const address = 'https://www.example.com/path/to/resource?param1=value1#section';
// const parseUrl = new url.URL(address)


// console.log(parseUrl.protocol)
// console.log(parseUrl.host)
// console.log(parseUrl.pathname)
// console.log(parseUrl.search)
// console.log(parseUrl.hash)