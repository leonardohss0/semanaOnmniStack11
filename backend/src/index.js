//importar as funcionaçodades do express na variavel express
const { response } = require('express');
const express = require ('express');
const cors = require ('cors'); //Módulo de segurança
const routes = require ('./routes');

//criar aplicação
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);