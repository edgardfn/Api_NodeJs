const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

routes.get('/products', ProductController.index);
routes.get('/products/:id', ProductController.show);
routes.post('/products', ProductController.store);
routes.put('/products/:id', ProductController.update);
routes.delete('/products/:id', ProductController.destroy);


module.exports = routes; // exportar


// Primeira Rota:
// routes.get('/products', (req, res) =>{ // req contem detalhes e informações da requisição como parametros, corpo da requisição, cabeçalho, usuário que está fazendo requisição, ip.
    /* Product.create({
      title:"React Native",
      description: "Build native apps with React",
      url: "http://github.com/facebook/react-native"
    }); */
  
  
   // return res.send("Hello World!!!!")
// }); 
// res tem a ver com a resposta que vamos dar a requisição.





