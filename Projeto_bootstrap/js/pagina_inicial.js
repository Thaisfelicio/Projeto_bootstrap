//variaveis dos locais onde serão inseridos os comentarios
let comentario1 = document.querySelector('#comentario1');
let comentario2 = document.querySelector('#comentario2');
let comentario3 = document.querySelector('#comentario3');
let comentario4 = document.querySelector('#comentario4');
let comentario5 = document.querySelector('#comentario5');

//variaveis do conteudo da div de comentario
let conteudo1 = document.querySelector('#conteudo1');
let conteudo2 = document.querySelector('#conteudo2');
let conteudo3 = document.querySelector('#conteudo3');

//variavel do botao cadastre-se
let btnCadastro = document.querySelector('#cadastro');

//variavel da opção comentar da navbar
let btnComentar = document.querySelector('#comentar');

//variavel do botao excluir
let excluir = document.querySelector('#excluir');

//variaveis do modal
let modal = document.querySelector('#salvarComentario');
let novoComentario = document.querySelector('#novoComentario');

//se clicar em comentar e não estiver logado, te manda para a pagina de cadastro, se não te manda para a pagina de comentario
btnComentar.addEventListener('click', function(){
    if (localStorage.getItem('token') == null)
    {
        alert('Você precisa estar logado para acessar está página');
        window.location.href = 'file:///F:/WEBI3/Projeto_bootstrap/views/login.html';
    }
    else
    {
        window.location.href = 'file:///F:/WEBI3/Projeto_bootstrap/views/pagina_comentario.html';
    }

})

//pegando os dados do localStorage
let listaComentario = [];

let comentario = 
{
        jogo: '',
        comentario: '',
        nota: ''
};

listaComentario = JSON.parse(localStorage.getItem('listaComentario'));

//insere os dados da array na div de comentarios
listaComentario.forEach(function(item) {
            
        conteudo1.innerHTML = `Jogo: ${item.jogoC}`;
        conteudo2.innerHTML = `Comentário: ${item.comentarioC}`;
        conteudo3.innerHTML = `Nota: ${item.NotaC}`;
        localStorage.comentario = JSON.stringify(comentario);
            
    });

excluir.addEventListener('click',function() {
     conteudo2.innerHTML = 'Comentário: ';
     })

       
    
//evento do cadastre-se, se estiver logado o botão muda para sair e se clicar nele faz log out, se não estiver logado e clicar nele vai para a pagina de cadastro
    if (localStorage.getItem('token') != null)
    {
        btnCadastro.innerHTML = 'Sair';
        
        btnCadastro.addEventListener('click', function(){
            localStorage.removeItem('token');
            window.location.href = 'file:///F:/WEBI3/Projeto_bootstrap/pagina_inicial.html';
        });
    }
    else
    {
        btnCadastro.innerHTML = 'Cadastre-se';
        btnCadastro.addEventListener('click', function(){
            window.location.href = 'F:/WEBI3/Projeto_bootstrap/views/cadastro.html';
        });
        
    }

modal.addEventListener('click', function(item){
    conteudo2.innerHTML = 'Comentário:' + novoComentario.value;
   item.comentarioC = novoComentario.value;
})