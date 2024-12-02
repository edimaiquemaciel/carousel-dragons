const botoesCarrossel = document.querySelectorAll('.botao');
const imagensCarrossel = document.querySelectorAll('.imagem')
const informacoes = document.querySelectorAll('.informacoes');

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', ()=>{
        desativarBotaoSelecionado();
        marcarBotaoSelecionado(botao);
        esconderImagemAtiva();
        esconderInformacoesAtiva();
        mostrarImagemDeFundo(indice); 
        mostrarInformacoes(indice);
    });
});

function marcarBotaoSelecionado(botao) {
    botao.classList.add('selecionado');
}

function mostrarInformacoes(indice) {
    informacoes[indice].classList.add('ativa');
}

function esconderInformacoesAtiva() {
    const informacaoAtiva = document.querySelector('.informacoes.ativa');
    informacaoAtiva.classList.remove('ativa');
}

function mostrarImagemDeFundo(indice) {
    imagensCarrossel[indice].classList.add('ativa');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.imagem.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
