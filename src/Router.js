const express = require('express');
const routes = express.Router();
const orgsController = require('./controller/OrgsController');
const incidentController = require('./controller/incidentController');
const profileController = require('./controller/ProfileController');
const sessionController = require('./controller/SessionController');

routes.post('/orgs', orgsController.create);
routes.get('/orgs', orgsController.index);
routes.post('/incident',incidentController.incident);
routes.get('/incident', incidentController.index);
routes.delete('/incident/:id', incidentController.delete);
routes.get('/profile', profileController.index)
routes.post('/session', sessionController.create);

module.exports =  routes;