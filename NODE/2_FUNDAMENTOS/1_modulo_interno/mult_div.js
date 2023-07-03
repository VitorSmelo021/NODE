module.exports = {
    multiplicacao(a,b){
        console.log(`${a*b}`)
    },
    
    divisao(a,b){
        if( b <= 0){
            console.log('Error')
        }else{
            console,log(`${a/b}`)
        }
    }
}
