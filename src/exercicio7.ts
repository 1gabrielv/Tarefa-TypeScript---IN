interface IRespostaAPI<T> { 
    dados: T;
    sucesso: boolean;
}

const resposta1: IRespostaAPI<string> = { dados: "OK", sucesso: true };
const resposta2: IRespostaAPI<number[]> = { dados: [1, 2, 3], sucesso: false };