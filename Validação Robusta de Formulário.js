function validarFormulario(formulario) {
    const { nome, email, idade, opcao } = formulario;

    if (!nome || nome.length < 3) {
        console.log("Erro: O campo 'nome' é obrigatório e deve ter pelo menos 3 caracteres.");
        return false;
    }

    if (!email || !email.includes("@") || !email.includes(".")) {
        console.log("Erro: O campo 'email' deve conter um formato válido (ex: exemplo@dominio.com).");
        return false;
    }

    if (isNaN(idade) || idade < 18 || idade > 65) {
        console.log("Erro: O campo 'idade' deve ser um número entre 18 e 65.");
        return false;
    }

    if (!opcao || (opcao !== "opcao1" && opcao !== "opcao2" && opcao !== "opcao3")) {
        console.log("Erro: Você deve selecionar uma opção válida.");
        return false;
    }

    console.log("Formulário válido!");
    return true;
}

const formulario = {
    nome: "Fernando",
    email: "fe.dias.brito28@gmail.com",
    idade: 22,
    opcao: "opcao1"
};

validarFormulario(formulario);