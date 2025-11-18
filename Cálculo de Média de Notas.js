function calcularMediaNotas(notas) {
    if (!Array.isArray(notas) || notas.length === 0) {
        console.log("Erro: Insira um array válido de notas.");
        return;
    }

    const soma = notas.reduce((total, nota) => {
        if (typeof nota !== "number" || nota < 0 || nota > 10) {
            console.log("Erro: Todas as notas devem ser números entre 0 e 10.");
            return total;
        }
        return total + nota;
    }, 0);

    const media = soma / notas.length;

    console.log(`Média do aluno: ${media.toFixed(2)}`);

    if (media >= 7) {
        console.log("Situação: Aprovado");
    } else if (media >= 5 && media < 7) {
        console.log("Situação: Recuperação");
    } else {
        console.log("Situação: Reprovado");
    }
}

const notasAluno = [8, 6.5, 7, 9];
calcularMediaNotas(notasAluno);