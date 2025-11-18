const readline = require('readline');

function perguntar(rl, pergunta) {
    return new Promise(resolve => rl.question(pergunta, resolve));
}

async function caixaEletronico() {
    let saldo = 1000;
    let opcao = 0;

    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

    console.log("Bem-vindo ao Caixa Eletrônico!");

    while (opcao !== 4) {
        console.log("\nEscolha uma opção:");
        console.log("1 - Depósito");
        console.log("2 - Saque");
        console.log("3 - Verificar Saldo");
        console.log("4 - Sair");

        const entrada = await perguntar(rl, "Digite o número da opção desejada: ");
        opcao = parseInt(entrada, 10);

        if (isNaN(opcao) || opcao < 1 || opcao > 4) {
            console.log("Opção inválida. Tente novamente.");
            continue;
        }

        switch (opcao) {
            case 1: {
                const depStr = await perguntar(rl, "Digite o valor para depósito: ");
                const deposito = parseFloat(depStr.replace(',', '.'));
                if (isNaN(deposito) || deposito <= 0) {
                    console.log("Valor inválido. Tente novamente.");
                } else {
                    saldo += deposito;
                    console.log(`Depósito de R$${deposito.toFixed(2)} realizado com sucesso!`);
                }
                break;
            }

            case 2: {
                const saqStr = await perguntar(rl, "Digite o valor para saque: ");
                const saque = parseFloat(saqStr.replace(',', '.'));
                if (isNaN(saque) || saque <= 0) {
                    console.log("Valor inválido. Tente novamente.");
                } else if (saque > saldo) {
                    console.log("Saldo insuficiente para realizar o saque.");
                } else {
                    saldo -= saque;
                    console.log(`Saque de R$${saque.toFixed(2)} realizado com sucesso!`);
                }
                break;
            }

            case 3:
                console.log(`Seu saldo atual é de R$${saldo.toFixed(2)}.`);
                break;

            case 4:
                console.log("Obrigado por usar o Caixa Eletrônico. Até logo!");
                break;
        }
    }

    rl.close();
}

caixaEletronico();