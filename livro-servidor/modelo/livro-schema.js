const banco = require('./conexao');

const LivroSchema = new banco.Schema({
    _id: {
        type: banco.Schema.Types.ObjectId,
    },
    titulo: {
        type: String,
        require: true,
    },
    codEditora: {
        type: Number,
        require: true,
    },
    resumo: {
        type: String,
        require: true,
    },
    autores: {
        type: [String],
        require: true,
    },
});

const Livro = banco.model('Livro', LivroSchema, 'livros');

module.exports = Livro;