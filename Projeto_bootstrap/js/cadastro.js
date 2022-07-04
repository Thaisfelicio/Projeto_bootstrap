//variaveis dos inputs
let nome = document.querySelector('#nome');
let email = document.querySelector('#email');
let senha = document.querySelector('#senha');

//variaveis dos labels
let labelNome = document.querySelector('#labelNome');
let labelEmail = document.querySelector('#labelEmail');
let labelSenha = document.querySelector('#labelSenha');

//variavel de mensagem de erro
let error = document.querySelector('#msgError');

//variavel de mensagem de sucesso
let sucess = document.querySelector('#msgSucess');

//variaveis de validação
let validNome = false;
let validEmail = false;
let validSenha = false;

//evento para preenchimento correto do campo nome
nome.addEventListener('keyup', () => {
    if(nome.value.length <= 4)
    {
        labelNome.setAttribute('style','color: red');
        labelNome.innerHTML = 'Insira no minimo 5 caracteres';
        nome.setAttribute('style', 'border-color: red');
        validNome = false;
    }
    else
    {
        labelNome.setAttribute('style', 'color: #8BF4FF');
        labelNome.innerHTML = 'É um bom nome';
        nome.setAttribute('style', 'border-color: blue');
        validNome = true;
    }
});

senha.addEventListener('keyup', () => {
    if(senha.value.length <= 5)
    {
        labelSenha.setAttribute('style','color: red');
        labelSenha.innerHTML = 'Insira no minimo 6 caracteres';
        senha.setAttribute('style', 'border-color: red');
        validSenha = false;
    }
    else
    {
        labelSenha.setAttribute('style', 'color: #8BF4FF','border-color: blue');
        labelSenha.innerHTML = 'Essa senha é legal, guarde-a bem!';
        senha.setAttribute('style', 'border-color: blue');
        validSenha = true;
    }
});

function validarEmail()
{
    if (!email.checkValidity())
    {
        labelEmail.setAttribute('style', 'color: red');
        email.setAttribute('style', 'border-color: red');
        labelEmail.innerHTML = 'Email inválido';
        validEmail = false;
    }
    else
    {
        labelEmail.setAttribute('style', 'color: #8BF4FF');
        labelEmail.innerHTML = 'Beleza, o email está ok, só falta a senha.';
        email.setAttribute('style', 'border-color: blue');
        validEmail = true;
    }
}
//função para cadastrar e armazenar os dados
function cadastrar()
{
    if (validNome && validEmail && validSenha)
    {
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');
        listaUser.push
        ({
            nomeCadastrado: nome.value,
            emailCadastrado: email.value,
            senhaCadastrada: senha.value

        })
        localStorage.setItem('listaUser', JSON.stringify(listaUser));

        sucess.setAttribute('style', 'display: block');
        sucess.innerHTML = '<strong> Cadastrando usuário ... </strong>';
        error.setAttribute('style', 'display: none');
        error.innerHTML = '';
        //função para que dê um pequeno atraso de 3 seg. para redirecionar à página login
        setTimeout(() =>{
            window.location.href = 'file:///F:/WEBI3/Projeto_bootstrap/views/login.html';
        }, 3000)
    }
    else
    {
        error.setAttribute('style', 'display: block');
        error.innerHTML = '<strong> Preencha todos os campos corretamente antes de cadastrar</strong>';
        sucess.setAttribute('style', 'display: none');
        sucess.innerHTML = '';
    }
}




