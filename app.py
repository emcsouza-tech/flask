from flask import Flask, request, jsonify, render_template, redirect, url_for

app = Flask(__name__)

##------------- ÁREA DE DADOS ---------------
usuarios = []

desafios = [
    {"id": 1, "titulo": "Hello World", "pontos": 10},
    {"id": 2, "titulo": "Loop for", "pontos": 15},
    {"id": 3, "titulo": "Função soma", "pontos": 20},
]

usuario_logado = None

##------------- ÁREA DE FUNÇÕES AUXILIARES ---------------

def buscar_usuario(username):
    return next((usuario for usuario in usuarios if usuario['username'] == username), None)

##------------- ÁREA DE RENDERIZAÇÃO DE ROTAS ---------------
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/login')
def login_page():
    return render_template('login.html')

@app.route('/cadastro')
def cadastro_page():
    return render_template('cadastro.html')

##------------- ÁREA DE ROTAS API ---------------

@app.route('/cadastro', methods=['POST'])
def cadastro():
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

@app.route('/desafios', methods=['GET'])
def listar_desafios():
    return jsonify(desafios)


@app.route('/completar/<int:id>', methods=['POST'])
def completar(id):
    global usuario_logado

    if not usuario_logado:
        return jsonify({"erro": "Faça login"}), 401

    desafio = next((d for d in desafios if d['id'] == id), None)

    if id in usuario_logado['desafios']:
        return jsonify({"erro": "Já completado"}), 400

    usuario_logado['desafios'].append(id)
    usuario_logado['pontos'] += desafio['pontos']

    return jsonify({
        "mensagem": "Concluído!",
        "pontos": usuario_logado['pontos']
    })

if __name__ == '__main__':
    app.run(debug=True)
