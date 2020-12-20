//importar as funcionaçodades do express na variavel express
const express = require ('express');

//criar aplicação
const app = express();

//criando a rota raiz e retornando um objeto js
app.get('/', (request, response) => {
    return response.json({
        evento: 'Semana OmniStack 11.0',
        aluno: 'Diego Fernandes'
    })

});

app.listen(3333);