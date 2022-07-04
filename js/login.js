//variaveis dos inputs
let email = document.querySelector('#email');
let senha = document.querySelector('#senha');

//variaveis das labels
let labelEmail = document.querySelector('#labelEmail');
let labelSenha = document.querySelector('#labelSenha');

//variaveis para mensagem de sucesso e falha
let error = document.querySelector('#msgError');
let sucess = document.querySelector('#msgSucess');

//variaveis de validação
let validEmail = false;
let validSenha = false;

function entrar()
{
    let listaUser = [];

    let userValid = 
    {
        nome: '',
        email: '',
        senha: ''
    };

    listaUser = JSON.parse(localStorage.getItem('listaUser'));

    listaUser.forEach((item) => {
        if (email.value == item.emailCadastrado && senha.value == item.senhaCadastrada)
        {
            userValid = 
            {
                nome: item.nomeCadastrado,
                email: item.emailCadastrado,
                senha: item.senhaCadastrada 
            };
        }
    });

    if (email.value == userValid.email && senha.value == userValid.senha)
    {
        window.location.href = 'file:///F:/WEBI3/Projeto_bootstrap/views/pagina_comentario.html'
        
        let token = Math.random().toString(16).substring(2);
        localStorage.setItem('token', token);
    }
    else
    {
        labelEmail.setAttribute('style', 'color: red');
        email.setAttribute('style', 'border-color: red');
        labelSenha.setAttribute('style', 'color: red');
        senha.setAttribute('style', 'border-color: red');
        error.setAttribute('style', 'display: block');
        error.innerHTML = 'Email ou senha incorretos';
        email.focus(); //depois da mensagem de erro, focará o mouse no campo usuário
    }
}