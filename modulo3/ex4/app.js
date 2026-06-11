require('dotenv').config();

const express = require('express');

const conectarDB = require('./config/database');
const alunoRoutes = require('./routes/alunoRoutes');

const app = express();

conectarDB();

app.use(express.json());

app.use('/alunos', alunoRoutes);

app.listen(process.env.PORT, () => {
    console.log(
        `Servidor rodando na porta ${process.env.PORT}`
    );
});