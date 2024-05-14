const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let voto;
let Ana = 0;
let Marcelo = 0;
let Joaquim = 0;
let Roberta = 0;

console.log ("nulo - 0");
console.log ("Ana - 1");
console.log ("Marcelo - 2");
console.log ("Joaquim - 3");
console.log ("Roberta - 4");
console.log ("sair");

function verificarVoto() {
    switch (voto) {
        case '1':
            Ana++;
            break;
        case '2':
            Marcelo++;
            break;
        case '3':
            Joaquim++;
            break;
        case '4':
            Roberta++;
            break;
        case '0':
            console.log("Voto nulo");
            break;
        case 'sair':
            exibirResultados();
            rl.close();
            return;
        default:
            console.log("Voto inválido");
    }

    rl.question("Selecione seu voto: ", (resposta) => {
        voto = resposta;
        verificarVoto();
    });
}

function exibirResultados() {
    console.log ("Ana teve " + Ana + " votos");
    console.log ("Marcelo teve " + Marcelo + " votos");
    console.log ("Joaquim teve " + Joaquim + " votos");
    console.log ("Roberta teve " + Roberta + " votos");
}

rl.question("Selecione seu voto: ", (resposta) => {
    voto = resposta;
    verificarVoto();
});