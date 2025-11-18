const readline = require('readline');

async function jogoAdivinhacao() {
    const numero = Math.floor(Math.random() * 100) + 1;
    const maxTentativas = 7;
    let tentativas = 0;

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    const perguntar = (q) => new Promise(resolve => rl.question(q, resolve));

    console.log('Bem-vindo ao jogo de adivinhação!');
    console.log('Tente adivinhar o número entre 1 e 100.');

    while (tentativas < maxTentativas) {
        const resposta = await perguntar(`Tentativa ${tentativas + 1} de ${maxTentativas}: Qual é o seu palpite? `);
        const palpite = parseInt(resposta, 10);

        if (isNaN(palpite) || palpite < 1 || palpite > 100) {
            console.log('Por favor, insira um número válido entre 1 e 100.');
            continue;
        }

        tentativas++;

        if (palpite === numero) {
            console.log(`Parabéns! Você acertou o número (${numero}) em ${tentativas} tentativa(s)!`);
            rl.close();
            return;
        } else if (palpite < numero) {
            console.log('Dica: O número é maior.');
        } else {
            console.log('Dica: O número é menor.');
        }
    }

    console.log(`Que pena! Você esgotou suas tentativas. O número era ${numero}.`);
    rl.close();
}

jogoAdivinhacao();