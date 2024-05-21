const prompt = require('prompt-sync')({sigint: true});

const jogador = prompt('Qual o seu nome? ');

let op;
let pontuacao = 0;
let resposta;

function escolhaCorreta() {
    console.log("Parabéns!");
    pontuacao++;
}

function escolhaIncorreta() {
    console.log("Resposta incorreta!");
}

function fazerPergunta(pergunta, respostaCorreta) {
    resposta = prompt(pergunta + " ");
    if (resposta.toLowerCase() === respostaCorreta.toLowerCase()) {
        escolhaCorreta();
    } else {
        escolhaIncorreta();
    }
}

while (true) {
    op = prompt("Qual tema você deseja jogar?  1 - Tecnologia  2 - Música 3 - Física  0 - Sair ");
    op = parseInt(op);

    if (op < 0 || op > 3) {
        console.log("Digite uma opção válida.");
        continue;
    }

    if (op === 0) {
        console.log("Você saiu!");
        break;
    }

    switch (op) {
        case 1:
            fazerPergunta("JavaScript é uma linguagem de marcação. Verdadeiro ou falso?", "falso");
            fazerPergunta("If e else são condições. Verdadeiro ou falso?", "verdadeiro");
            fazerPergunta("Java e JavaScript são a mesma linguagem. Verdadeiro ou falso?", "falso");
            break;

        case 2:
            fazerPergunta("Na música, # significa bemol. Verdadeiro ou falso?", "falso");
            fazerPergunta("Baixo é a voz mais grave que um instrumento ou voz pode produzir. Verdadeiro ou falso?", "verdadeiro");
            fazerPergunta("Um pentagrama tem 3 linhas e 2 espaços. Verdadeiro ou falso?", "falso");
            break;

        case 3:
            fazerPergunta("Existem 5 leis criadas por Newton. Verdadeiro ou falso?", "falso");
            fazerPergunta("Para achar a velocidade média de um objeto em movimento usa-se Vm = Δs / Δt. Verdadeiro ou falso?", "verdadeiro");
            fazerPergunta("O peso é uma grandeza escalar. Verdadeiro ou falso?", "falso");
            break;

        default:
            console.log("Digite uma opção válida.");
            break;
    }
}

console.log(`Obrigado por jogar, ${jogador}! Sua pontuação foi: ${pontuacao}`);


