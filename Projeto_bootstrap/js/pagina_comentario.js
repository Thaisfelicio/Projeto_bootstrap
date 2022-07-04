//variaveis dos inputs
let nomeJogo = document.querySelector('#nomeJogo');
let comentario = document.querySelector('#comentario');

//variaveis de select
let selecaoJogo = document.querySelector('#selecao_jogo');
let selecaoNota = document.querySelector('#selecao_nota');

function comentar()
{
    let listaComentario = JSON.parse(localStorage.getItem('listaComentario') || '[]');

    listaComentario.push
    ({
        jogoC: nomeJogo.value,
        comentarioC: comentario.value,
        generoC: selecaoJogo.value,
        NotaC: selecaoNota.value
    })

    localStorage.setItem('listaComentario', JSON.stringify(listaComentario));

    window.location.href = 'file:///F:/WEBI3/Projeto_bootstrap/pagina_inicial.html';
}