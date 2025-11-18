let listaDeCompras = [];

function adicionarItem(item) {
    if (!item || typeof item !== "string" || item.trim() === "") {
        console.log("Erro: O item deve ser um texto válido.");
        return;
    }
    listaDeCompras.push(item.trim());
    console.log(`"${item}" foi adicionado à lista de compras.`);
}

function removerItem(item) {
    const index = listaDeCompras.indexOf(item);
    if (index === -1) {
        console.log(`Erro: O item "${item}" não foi encontrado na lista.`);
        return;
    }
    listaDeCompras.splice(index, 1);
    console.log(`"${item}" foi removido da lista de compras.`);
}

function exibirLista() {
    if (listaDeCompras.length === 0) {
        console.log("A lista de compras está vazia.");
        return;
    }
    console.log("Itens na lista de compras:");
    listaDeCompras.forEach((item, index) => {
        console.log(`${index + 1}. ${item}`);
    });
}

function verificarItem(item) {
    if (listaDeCompras.includes(item)) {
        console.log(`O item "${item}" está na lista de compras.`);
    } else {
        console.log(`O item "${item}" não está na lista de compras.`);
    }
}

adicionarItem("Maçã");
adicionarItem("Banana");
adicionarItem("Arroz");
exibirLista();
verificarItem("Banana");
removerItem("Banana");
exibirLista();
verificarItem("Banana");