const readline = require('readline');

function perguntar(pergunta, rl) {
    return new Promise(resolve => rl.question(pergunta, resolve));
}

async function gerarTabuada() {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    try {
        const numStr = await perguntar('Digite o número para gerar a tabuada: ', rl);
        const limStr = await perguntar('Digite até qual número deseja calcular a tabuada: ', rl);

        const numero = parseInt(numStr, 10);
        const limite = parseInt(limStr, 10);

        if (isNaN(numero) || isNaN(limite) || limite <= 0) {
            console.log('Por favor, insira valores válidos (limite maior que 0).');
            return;
        }

        console.log(`Tabuada do ${numero} até ${limite}:`);
        for (let i = 1; i <= limite; i++) {
            console.log(`${numero} x ${i} = ${numero * i}`);
        }
    } finally {
        rl.close();
    }
}

gerarTabuada();