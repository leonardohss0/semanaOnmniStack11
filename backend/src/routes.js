const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

//Listar ong
routes.get('/ongs', OngController.index);

//Listar incidente
routes.get('/incidents', IncidentController.index);

//Listar casos específicos de uma ong
routes.get('/profile', ProfileController.index);

//criar uma ong
routes.post('/ongs',OngController.create);

//Criar um incidente
routes.post('/incidents', IncidentController.create);

//Deletar incidente 
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;