// interface IProduto{
//     nome: string;
//     preco: number;
//     quantidade: number;
//     disponivel: boolean;
//     desconto?: number; // opcional
//     categoria: ICategoria;
//     calcularDesconto: (desconto: number) => number;
// }
// interface ICategoria {
//     nome: 'Vestuario' | 'Eletrônicos' | 'Alimentos';
// }


// interface IPessoa{
//     nome: string;
//     idade: number;
//     cpf: string;
//     contato?: string[]; // opcional

//     getNome: () => string;
//     setNome: (nome: string) => void;
//     getContato: () => string[];
//     addContato: (contato: string) => string[];
// }

// class Pessoa implements IPessoa {
//     nome: string;
//     idade: number;
//     cpf: string;
//     contato?: string[];
//     constructor(nome: string, idade: number, cpf: string) {
//         this.nome = nome;
//         this.idade = idade;
//         this.cpf = cpf;
//     }

//     getNome(){
//         return this.nome;
//     }

//     setNome(nome: string){
//         this.nome = nome;
//     }

//     getContato(){
//         return this.contato ?? [];      
//     }

//     addContato(contato: string){
//         this.contato = this.contato ?? [];
//         this.contato.push(contato);
//         return this.contato;
//     }
// }

// const pessoa = new Pessoa("gabriel", 500, "1111111");
// pessoa.setNome("Gabriel");
// console.log(pessoa.getNome());
// console.log(pessoa.getContato());



// type Categoria = 'Vestuario' | 'Eletrônicos' | 'Alimentos';

// type Produto = {
//     nome: string;
//     preco: number;
//     quantidade: number;
//     disponivel: boolean;
//     desconto?: number; // opcional
//     categoria: Categoria;
//     calcularDesconto: (desconto: number) => number;
// };
// let produto: Produto = {
//     nome: "Camiseta",
//     preco: 29.99,
//     quantidade: 10,
//     disponivel: true,
//     categoria: "Vestuario",
//     desconto: 0.1, // 10% de desconto
//     calcularDesconto: (desconto: number) => {
//         if (produto.desconto) {
//             return produto.preco - (produto.preco * desconto);
//         }
//         return produto.preco;
//     }
// }

// if(produto.desconto !== undefined) {
//     produto.calcularDesconto(produto.desconto);
//     console.log(`Preço com desconto: ${produto.calcularDesconto(produto.desconto).toFixed(2)}`);
// }

// interface IArrayParam{
//     primeiro: string,
//     segundo: number
// }

// const params = {primeiro: "primeiro", segundo: 2} as IArrayParam;

// function createArrayPair<T>(param: T): [T] {
//     return [param];
// }

// createArrayPair<IArrayParam>(params); 


let total = 100;
//essa função dará errado, pois a e b nao teve seu tipo declarado
function adicionar(a, b){
    return a + b;
}

const resultado = adicionar(10, 30);
console.log(resultado);