const express = require('express');

const routes = express.Router();

//criar a rota e retornar um objeto js
routes.get('/users', (request, response) => {
    return response.json({
        evento: 'Semana Omnistack 11',
        aluno: 'Leonardo'
    })

});

module.exports = routes;