//------------- REDIRECIONAMENTOS ---------------
function irParaLogin() {
    window.location.href = "/login";
}

function irParaCadastro() {
    window.location.href = "/cadastro";
}

function voltar() {
    window.location.href = "/";
}

//------------- CADASTRO ---------------
function cadastrar() {
    fetch('/cadastro', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            username: document.getElementById('reg_user').value,
            senha: document.getElementById('reg_pass').value
        })
    })
    .then(r => r.json())
    .then(d => alert(JSON.stringify(d)));
}


//------------- LOGIN ---------------
function login() {
    fetch('/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            username: document.getElementById('log_user').value,
            senha: document.getElementById('log_pass').value
        })
    })
    .then(r => r.json())
    .then(d => {
        alert(JSON.stringify(d));

        if (!d.erro) {
            atualizarUsuario();
            carregarRanking();
            window.location.href = "/";
        }
    });
}

//------------- LOGOUT ---------------
function logout() {
    fetch('/logout', { method: 'POST' })
    .then(r => r.json())
    .then(d => {
        alert(d.mensagem);
        atualizarUsuario();
        carregarRanking();
    });
}

function atualizarUsuario() {
    fetch('/usuario')
    .then(r => r.json())
    .then(d => {
        let info = document.getElementById('info_usuario');
        let btnLogout = document.getElementById('btn_logout');
        let btnLogin = document.getElementById('btn_login');

        if (!d.username) {
            info.innerText = "Não logado";

            btnLogout.style.display = "none";
            if (btnLogin) btnLogin.style.display = "inline";

        } else {
            info.innerText = `👤 ${d.username} | Pontos: ${d.pontos}`;

            btnLogout.style.display = "inline";
            if (btnLogin) btnLogin.style.display = "none";
        }
    });
}

//------------- DESAFIOS ---------------
function carregarDesafios() {
    fetch('/desafios')
    .then(r => r.json())
    .then(d => {
        let lista = document.getElementById('lista_desafios');
        lista.innerHTML = '';

        d.forEach(desafio => {
            let li = document.createElement('li');
            li.innerHTML = `${desafio.titulo} (${desafio.pontos} pts)
                <button onclick="completar(${desafio.id})">Completar</button>`;
            lista.appendChild(li);
        });
    });
}

function completar(id) {
    fetch(`/completar/${id}`, { method: 'POST' })
    .then(r => r.json())
    .then(d => {
        alert(JSON.stringify(d));
        atualizarUsuario();
        carregarRanking();
    });
}

//------------- RANKING ---------------
function carregarRanking() {
    fetch('/ranking')
    .then(r => r.json())
    .then(d => {
        let lista = document.getElementById('ranking');
        lista.innerHTML = '';

        d.forEach(user => {
            let li = document.createElement('li');
            li.innerText = `${user.username}: ${user.pontos} pts`;
            lista.appendChild(li);
        });
    });
}

//------------- CARREGAMENTO AUTOMATICO ---------------
window.onload = function() {
    atualizarUsuario();
    carregarRanking();
}


