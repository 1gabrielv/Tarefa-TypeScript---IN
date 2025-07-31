interface Ilivro {
    titulo: string;
    autor: string;
    anoPublicacao: number; 
}

function resumirLivro(livro: Ilivro): string {
    return `O livro '${livro.titulo}' foi escrito por ${livro.autor} em ${livro.anoPublicacao}.`;
}

const livro: Ilivro = {
    titulo: "As Crônicas de Nárnia",
    autor: "C.S. Lewis",
    anoPublicacao: 1950
};

console.log(resumirLivro(livro));