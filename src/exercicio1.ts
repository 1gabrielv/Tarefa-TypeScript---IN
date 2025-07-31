let total = 100;
//essa função dará errado, pois a e b nao teve seu tipo declarado
function adicionar(a, b){
    return a + b;
}

const resultado = adicionar(10, 30);
console.log(resultado);