"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function resumirLivro(livro) {
    return `O livro '${livro.titulo}' foi escrito por ${livro.autor} em ${livro.anoPublicacao}.`;
}
const livro = {
    titulo: "As Crônicas de Nárnia",
    autor: "C.S. Lewis",
    anoPublicacao: 1950
};
console.log(resumirLivro(livro));
