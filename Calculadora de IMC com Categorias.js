function calcularIMC(peso, altura) {
    if (isNaN(peso) || peso <= 0) {
        console.log("Erro: O peso deve ser um número positivo.");
        return;
    }

    if (isNaN(altura) || altura <= 0) {
        console.log("Erro: A altura deve ser um número positivo.");
        return;
    }

    const imc = peso / (altura * altura);

    console.log(`Seu IMC é: ${imc.toFixed(2)}`);

    if (imc < 18.5) {
        console.log("Classificação: Abaixo do peso.");
    } else if (imc >= 18.5 && imc < 24.9) {
        console.log("Classificação: Peso normal.");
    } else if (imc >= 25 && imc < 29.9) {
        console.log("Classificação: Sobrepeso.");
    } else if (imc >= 30 && imc < 34.9) {
        console.log("Classificação: Obesidade grau I.");
    } else if (imc >= 35 && imc < 39.9) {
        console.log("Classificação: Obesidade grau II.");
    } else {
        console.log("Classificação: Obesidade grau III.");
    }
}

const peso = 64;
const altura = 1.65;

calcularIMC(peso, altura);