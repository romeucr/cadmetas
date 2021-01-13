//importaçoes
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

//utilizando o model definido em /models
require('./models/Metas')
const Meta = mongoose.model('Meta')

//iniciando o aplicativo
const app = express()

//utilizando o cors na inicializacao do app, permitindo o acesso
app.use(express.json())
app.use((req, res, next) => {
   res.header("Access-Control-Allow-Origin", "*") // asterisco para permitir o acesso desde qualquer site. Poderia ser colocada por exemplo um endereço fixo como http://rcrdev.com.br 
   res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE") //métodos permitidos
   res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type, Authorization")
   app.use(cors())
   next();
})

mongoose.connect('mongodb://localhost/rcr_db', {
   useNewUrlParser: true,
   useUnifiedTopology: true
}).then(() => {
   console.log("OK - Conexao com banco de dados")
}).catch((err) => {
   console.log("ERRO - Conexao com banco de dados " + err)
})

// GET - listar todas as metas
app.get('/metas', async (req, res) => {
   await Meta.find({}).then((metas) => {
      return res.json({
         error: false,
         metas
      })
   }).catch((err) => {
      return res.status(400).json({
         error: true,
         message: "Nenhum registro encontrado"
      })
   })
})

//POST - gravar uma meta
app.post('/metas', async (req, res) => {
   await Meta.create(req.body, (err) => {
      if (err) return res.status(400).json({
         error: true,
         message: "Erro ao cadastrar meta!"
      })
   })
   //retorna um campo error com valor false e o body enviado
   return res.status(201).json({
      error: false,
      message: "Meta cadastrada com sucesso!"
   })
})

app.listen(8080, () => {
   console.log("Servidor iniciado na porta 8080. http://localhost:8080")
})
