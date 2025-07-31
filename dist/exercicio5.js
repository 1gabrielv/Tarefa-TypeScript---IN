"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function apresentarPessoa(pessoa) {
    return `${pessoa.nome} tem ${pessoa.idade} anos e se identifica como ${pessoa.genero}.`;
}
const pessoa = {
    nome: "Gabriel",
    idade: 21,
    genero: "masculino"
};
console.log(apresentarPessoa(pessoa));
