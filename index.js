require('dotenv').config();
const express = require('express')
const router = require('./routes/index')
const cors = require('cors');

const port = process.env.PORT;

const app = express();
app.use(cors());
app.use(express.json());

app.use(router);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}!`))