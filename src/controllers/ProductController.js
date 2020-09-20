const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    // Listagem dos produtos:
    async index(req, res){
        // configurar a paginação:
        const { page = 1 } = req.query;

        // const products = await Product.find(); // procurar todos, await é para aguardar a execução da proxima linha so quando o Product.find executar.
        const products = await Product.paginate({}, { page, limit: 10 }); // {} se tivesse condições no primeiro parametro seria colocado.

        return res.json(products);
    },

    // Listar produto pelo id:
    async show(req, res) {
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    // Inserir um novo produto:
    async store(req, res) {
        const product = await Product.create(req.body);

        return res.json(product);
    },

    // Atualizar um produto:
    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true}); // new: true retorna para product as informações alteradas.

        return res.json(product);
    }, 

    async destroy(req, res) {
        await Product.findByIdAndRemove(req.params.id);

        return res.send();
    }
};