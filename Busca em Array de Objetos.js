const biblioteca = [
    { titulo: "Dom Quixote", autor: "Miguel de Cervantes", ano: 1605 },
    { titulo: "1984", autor: "George Orwell", ano: 1949 },
    { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", ano: 1954 },
    { titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", ano: 1943 },
    { titulo: "Cem Anos de Solidão", autor: "Gabriel García Márquez", ano: 1967 }
];

function buscarLivroPorTitulo(titulo) {
    const livroEncontrado = biblioteca.find(livro => livro.titulo.toLowerCase() === titulo.toLowerCase());

    if (livroEncontrado) {
        console.log("Livro encontrado:", livroEncontrado);
        return livroEncontrado;
    } else {
        console.log(`Livro com o título "${titulo}" não encontrado.`);
        return null;
    }
}

buscarLivroPorTitulo("1984");
buscarLivroPorTitulo("A Revolução dos Bichos");