type Genero = 'masculino' | 'feminino';

interface IPessoa {
    nome: string;
    idade: number;
    genero: Genero;
}

function apresentarPessoa(pessoa: IPessoa): string {
    return `${pessoa.nome} tem ${pessoa.idade} anos e se identifica como ${pessoa.genero}.`;
}

const pessoa: IPessoa = {
    nome: "Gabriel",
    idade: 21,
    genero: "masculino"
};

console.log(apresentarPessoa(pessoa));