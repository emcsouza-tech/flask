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
            window.location.href = "/";
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
    .then(d => alert(JSON.stringify(d)));
}


