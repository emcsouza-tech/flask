// Redirecionamentos
function irParaLogin() {
    window.location.href = "/login_page";
}

function voltar() {
    window.location.href = "/";
}


// Cadastro
function registrar() {
    fetch('/register', {
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


// Login
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




