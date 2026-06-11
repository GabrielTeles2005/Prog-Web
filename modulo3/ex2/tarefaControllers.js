const tarefas = require('../models/tarefasModel');

exports.listar = (req, res) => {
    res.json(tarefas);
};

exports.criar = (req, res) => {
    const novaTarefa = {
        id: tarefas.length + 1,
        titulo: req.body.titulo
    };

    tarefas.push(novaTarefa);
    res.status(201).json(novaTarefa);
};

exports.atualizar = (req, res) => {
    const id = parseInt(req.params.id);

    const tarefa = tarefas.find(t => t.id === id);

    if (!tarefa) {
        return res.status(404).json({ erro: 'Tarefa não encontrada' });
    }

    tarefa.titulo = req.body.titulo;

    res.json(tarefa);
};

exports.remover = (req, res) => {
    const id = parseInt(req.params.id);

    const indice = tarefas.findIndex(t => t.id === id);

    if (indice === -1) {
        return res.status(404).json({ erro: 'Tarefa não encontrada' });
    }

    tarefas.splice(indice, 1);

    res.json({ mensagem: 'Tarefa removida com sucesso' });
};