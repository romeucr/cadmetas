SEQUENCIA PARA CRIAR O PROJETO
Criar o package.json
### npm init

Instalar Express
Web framework para node. Gerencia requisições, rotas e URLs, entre outras coisas
### npm install express

Rodar o projeto 
### node app.js

Instalar Nodemon
Módulo para reiniciar o servidor sempre que houver alteração no código fonte. A opção -g significa global
### npm install -g nodemon

Para rodar o projeto utilizando o nodemon
### nodemon app.js

Instalar o MongoDB no projeto (--save salva o pacote como dependencia do projeto no package.json)
### npm install --save mongodb

Instalar o Mongoose
Traduz os dados do banco de dados para objetos Javascript, para que possam ser utilizados pela aplicacao
### npm install --save mongoose

Instalar CORS (necessario ter express no projeto)
Para permitir acesso à API pelo frontend
### npm install --save cors