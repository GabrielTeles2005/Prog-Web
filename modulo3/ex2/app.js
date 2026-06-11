const express = require('express');
const tarefasRoutes = require('./routes/tarefasRoutes');
const logger = require('./middlewares/logger');

const app = express();

app.use(express.json());
app.use(logger);

app.use('/tarefas', tarefasRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});