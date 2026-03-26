from flask import Flask, request, jsonify, render_template, redirect, url_for

app = Flask(__name__)

##------------- ÁREA DE DADOS ---------------
usuarios = []

##------------- ÁREA DE FUNÇÕES AUXILIARES ---------------

def buscar_usuario(username):
    return next((usuario for usuario in usuarios if usuario['username'] == username), None)

##------------- ÁREA DE RENDERIZAÇÃO DE ROTAS ---------------
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/login_page')
def login_page():
    return render_template('login.html')

##------------- ÁREA DE ROTAS API ---------------

@app.route('/register', methods=['POST'])
def register():
    dados = request.get_json()

    if buscar_usuario(dados['username']):
        return jsonify({"erro": "Usuário já existe"}), 400

    usuarios.append({
        "username": dados['username'],
        "senha": dados['senha'],
        "pontos": 0,
        "desafios": []
    })

    return jsonify({"mensagem": "Usuário criado com sucesso!"})


@app.route('/login', methods=['POST'])
def login():
    global usuario_logado

    dados = request.get_json()
    user = buscar_usuario(dados['username'])

    if not user or user['senha'] != dados['senha']:
        return jsonify({"erro": "Login inválido"}), 401

    usuario_logado = user

    return jsonify({"mensagem": "Login realizado com sucesso!"})

if __name__ == '__main__':
    app.run(debug=True)
