const readline = require('readline');

function perguntar(rl, pergunta) {
    return new Promise(resolve => rl.question(pergunta, resolve));
}

async function analisarIntervalo() {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    try {
        const inicioStr = await perguntar(rl, "Digite o número inicial do intervalo: ");
        const fimStr = await perguntar(rl, "Digite o número final do intervalo: ");

        const inicio = parseInt(inicioStr, 10);
        const fim = parseInt(fimStr, 10);

        if (isNaN(inicio) || isNaN(fim) || inicio > fim) {
            console.log("Por favor, insira valores válidos para o intervalo (início <= fim).");
            return;
        }

        let pares = 0;
        let impares = 0;
        let divisiveisPor5 = 0;

        for (let i = inicio; i <= fim; i++) {
            if (i % 2 === 0) pares++;
            else impares++;

            if (i % 5 === 0) divisiveisPor5++;
        }

        console.log(`No intervalo de ${inicio} a ${fim}:`);
        console.log(`- Números pares: ${pares}`);
        console.log(`- Números ímpares: ${impares}`);
        console.log(`- Números divisíveis por 5: ${divisiveisPor5}`);
    } finally {
        rl.close();
    }
}

analisarIntervalo();