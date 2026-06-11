const Aluno = require('../models/Aluno');

exports.listar = async (req, res) => {
    try {
        const filtro = {};

        if (req.query.curso) {
            filtro.curso = req.query.curso;
        }

        const alunos = await Aluno.find(filtro);

        res.json(alunos);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
};

exports.buscarPorId = async (req, res) => {
    try {
        const aluno = await Aluno.findById(req.params.id);

        if (!aluno) {
            return res.status(404).json({
                erro: 'Aluno não encontrado'
            });
        }

        res.json(aluno);
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
};

exports.criar = async (req, res) => {
    try {
        const aluno = await Aluno.create(req.body);

        res.status(201).json(aluno);
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
};

exports.atualizar = async (req, res) => {
    try {
        const aluno = await Aluno.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(aluno);
    } catch (error) {
        res.status(400).json({ erro: error.message });
    }
};

exports.remover = async (req, res) => {
    try {
        await Aluno.findByIdAndDelete(req.params.id);

        res.json({
            mensagem: 'Aluno removido'
        });
    } catch (error) {
        res.status(500).json({ erro: error.message });
    }
};