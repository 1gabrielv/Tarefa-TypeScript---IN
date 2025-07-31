interface IUsuario {
  nome: string;
  email: string;
  exibirInfo(): string;
}

const usuario: IUsuario = {
  nome: "João",
  email: "joao@email.com",
  exibirInfo() {
    return `Nome: ${this.nome} - Email: ${this.email}`;
  }
};


console.log(usuario.exibirInfo());

