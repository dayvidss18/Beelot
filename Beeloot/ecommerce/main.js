let carrinho = [];
let div = document.getElementById('itensCarrinho');

function addCarrinho() {
    let nomeProduto = document.getElementById("nomeProdutoCarrinho").value;
    let precoProduto = document.getElementById("precoProdutoCarrinho").value;
    if (nomeProduto && !isNaN(precoProduto)) {
        const produto = { nome: nomeProduto, preco: precoProduto };
        carrinho.push(produto);
        div.innerHTML += `<p>Produto: ${produto.nome}, Preço: R$ ${produto.preco}</p>`;
        document.getElementById('nomeProdutoCarrinho').value = '';
        document.getElementById('precoProdutoCarrinho').value = '';
    } else {
        alert("Você não inseriu valores corretos");
    }
}

function removerCarrinho() {
    let nomeProduto = document.getElementById("nomeProdutoCarrinho").value;

    let ind = carrinho.findIndex(produto => produto.nome === nomeProduto);
    if (ind !== -1) {
        carrinho.splice(ind, 1);
        alert(`${nomeProduto} foi removido`);
        atualizarCarrinho();
    } else {
        alert("Produto não encontrado");
    }

    document.getElementById('nomeProdutoCarrinho').value = '';
}

function atualizarCarrinho() {
    div.innerHTML = '';
    carrinho.forEach(produto => {
        div.innerHTML += `<p>Produto: ${produto.nome}, Preço: R$ ${produto.preco}</p>`;
    });
}

function verCarrinho() {
    let itensCarrinho = document.getElementById('itensCarrinho');
    itensCarrinho.innerHTML = '';
    
    if (carrinho.length === 0) {
        itensCarrinho.innerHTML = 'O carrinho está vazio.';
        return;
    }

    let total = 0;
    carrinho.forEach((produto, index) => {
        itensCarrinho.innerHTML += `${index + 1}. ${produto.nome} - R$ ${parseFloat(produto.preco).toFixed(2)} <br>`;
        total += parseFloat(produto.preco);
    });

    itensCarrinho.innerHTML += `<br>Total: R$ ${total.toFixed(2)}`;
}
s