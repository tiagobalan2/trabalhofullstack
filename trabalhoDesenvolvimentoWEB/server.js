const express = require('express');
const rotas = require('./routes');

const app = express();

const port = 3000;
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use('/api', rotas);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});