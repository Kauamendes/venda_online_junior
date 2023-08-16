const botaoPlus = document.getElementById('botaoPlus');
const botaoMinus = document.getElementById('botaoMinus');
const textoTotalItens = "Total de items: ";
const textoSomatorio = "Somatório dos itens: ";

botaoPlus.addEventListener('click', () => {
    let totalItem = document.getElementById('totalItem').textContent;
    totalItem = parseInt(totalItem)+1;
    document.getElementById('totalItem').textContent = totalItem;
    atualizarValorTotal(totalItem);
});

botaoMinus.addEventListener('click', () => {
    let totalItem = document.getElementById('totalItem').textContent;
    if (parseInt(totalItem) == 0) {
        return;
    }
    totalItem = parseInt(totalItem)-1;
    document.getElementById('totalItem').textContent = totalItem;
    atualizarValorTotal(totalItem);
});

function atualizarValorTotal(qtdItens) {
    document.getElementById('totalItens').textContent = textoTotalItens+qtdItens;
    document.getElementById('somatorioItens').textContent = textoSomatorio+qtdItens*5+" R$";
}