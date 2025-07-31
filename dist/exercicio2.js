"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mostrarMensagemStatus(req) {
    switch (req) {
        case 'sucesso':
            return console.log("Requisição concluída com sucesso!");
        case 'erro':
            return console.log("Ocorreu um erro na requisição.");
        case 'carregando':
            return console.log("Aguarde... carregando dados.");
    }
}
console.log(mostrarMensagemStatus('sucesso'));
console.log(mostrarMensagemStatus('erro'));
console.log(mostrarMensagemStatus('carregando'));
