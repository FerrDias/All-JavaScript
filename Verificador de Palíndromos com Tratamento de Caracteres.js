function verificarPalindromo(texto) {
    const textoLimpo = texto.toLowerCase().replace(/[^a-z0-9]/g, '');
    const ehPalindromo = textoLimpo === textoLimpo.split('').reverse().join('');
    
    if (ehPalindromo) {
        console.log(`"${texto}" é um palíndromo!`);
    } else {
        console.log(`"${texto}" não é um palíndromo.`);
    }
    return ehPalindromo;
}

verificarPalindromo("Olá mundo");