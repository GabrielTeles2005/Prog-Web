const mongoose = require('mongoose');

const alunoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    idade: {
        type: Number,
        required: true,
        min: 0
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    curso: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Aluno', alunoSchema);