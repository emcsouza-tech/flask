# Aprendizado em Python Flask

Esta é uma aplicação web simples desenvolvida com Python (biblioteca Flask), HTML e Javascript que utiliza conceitos de gamificação para incentivar o aprendizado de programação.

O sistema permite que usuários se cadastrem, façam login, completem desafios e acumulem pontos, competindo em um ranking com outros usuários.

---
## 🔄 Código Fonte

https://github.com/emcsouza-tech/flask

---

## 🚀 Funcionalidades

### 👤 Usuários
- Cadastro de novos usuários
- Login simples
- Logout
- Visualização do usuário logado

### 🎯 Desafios
- Listagem de desafios disponíveis
- Marcar desafios como concluídos
- Acúmulo de pontos ao completar desafios

### 🏆 Ranking
- Ranking global de usuários
- Ordenação automática por pontuação
- Atualização dinâmica na interface

---

## 🖥️ Interface

A aplicação possui três páginas principais:

- **Página inicial (`index.html`)**
  - Visualização de desafios
  - Ranking
  - Informações do usuário logado
  - Botões para as páginas de Cadastro e Login
  - Botão de Logout

- **Página de login (`login.html`)**
  - Autenticação de usuários

- **Página de cadastro (`login.html`)**
  - Cadastro de usuários

---
## 🎮 Para executar o projeto

pip install -r requirements.txt  
python app.py  

Acesse: http://localhost:5000

---

## 👨‍🏫 Funcionalidades para o professor/tutor

O projeto está versionado no github.com, no endereço da seção acima **Código Fonte**.

- Os commits e branchs criadas passo-a-passo foram mantidas e espaçadas no Git, de forma a possibilitar ao professor recriar as aulas práticas desde o início até a versão atual do projeto.


- **Exemplo:** 
  - A branch **app-06** implementa o sistema de ranqueamento; 
  - A branch **app-07** atualiza os pontos do usuário na tela inicial de forma automática. 

---

## 🎯 Objetivo educacional

Este projeto foi desenvolvido com fins didáticos para:

- Introduzir conceitos de desenvolvimento web com Flask
- Demonstrar comunicação entre frontend e backend
- Trabalhar com APIs REST
- Aplicar lógica de programação em um contexto prático

---

## 👨 Público-alvo

Estudantes iniciantes em programação, especialmente entre 13 e 17 anos.

---

## ⚠️ Limitações do projeto

- Os dados são armazenados em memória (não persistem ao reiniciar o servidor)
- Sistema de autenticação simplificado (sem criptografia ou sessões reais)
- Interface Visual Rudimentar

---

## 🔧 Melhorias Futuras

- Implementar frontend com css ou frameworks como REACT.JS
- Adicionar um banco de dados do tipo arquivo (SQLite) ou Relacional (Mysql/Postgres/etc)
- Adicionar páginas com formulários para que os alunos escrevam os códigos dos desafios no sistema, e possam competir em tempo real pelo ranking.
