const formulario = document.querySelector('form');


let arrayCadastrados = JSON.parse(sessionStorage.arrayCadastrados);

usuario.addEventListener('submit', function(e){
    e.preventDefault();

    const nome = formulario.elements.nome.value;
    const email = formulario.elements.email.value;
    const senha = formulario.elements.senha.value;

    arrayCadastrados.push({
        "nome": nome,
        "email": email,
        "senha": senha
    });

    sessionStorage.arrayCadastrados = JSON.stringify(arrayCadastrados);

    formulario.elements.nome.value = '';
    formulario.elements.email.value = '';
    formulario.elements.senha.value = '';
});