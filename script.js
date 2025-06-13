// Função para mostrar a seção de login
function mostrarLogin() {
    esconderTodasSecoes();
    document.getElementById('login').style.display = 'block';
}

// Função para mostrar a seção de cursos
function mostrarCursos() {
    esconderTodasSecoes();
    document.getElementById('cursos').style.display = 'block';
}

// Função para mostrar a seção de conteúdo
function mostrarConteudo() {
    esconderTodasSecoes();
    document.getElementById('conteudo').style.display = 'block';
}

// Função para esconder todas as seções
function esconderTodasSecoes() {
    let secao = document.querySelectorAll('.content-section');
    secao.forEach(function(element) {
        element.style.display = 'none';
    });
}

// Função para o login
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username === "admin" && password === "12345") {
        document.getElementById('login-message').innerText = "Login bem-sucedido!";
        mostrarCursos(); // Redireciona para os cursos após login bem-sucedido
    } else {
        document.getElementById('login-message').innerText = "Usuário ou senha incorretos.";
    }
});
