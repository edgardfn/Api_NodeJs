const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// Iniciando o app:
const app = express();
app.use(express.json()); // permitir enviar dados para aplicação no formato json.
app.use(cors()); // passar dominios que teram acesso, algumas configurações a mais de segurança, do jeito que está libera para todos os domínios.

// Iniciando o DB:
mongoose.connect(
  "mongodb://localhost:27017/nodeapi", 
  {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true}
);

//require('./src/models/Product');
// usando o requireDir:
requireDir("./src/models");

// inserir um produto:
// const Product = mongoose.model('Product');

// Rotas
app.use('/api', require('./src/routes')); // use aceita qlq tipo de requisição, put,get, delete ...

app.listen(3001); // ouvir porta 3001 do navegador;
// digitar no terminal node server.js e depois abrir no navegador o endereço: http://localhost:3001/
// depois de instalar e configurar nodemon rodar servidor digitando: npm run dev



