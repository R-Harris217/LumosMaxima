const lightController = require('../controllers/lights.controller');

const { authenticate } = require('../config/jwt.config');

module.exports = function(app) {
  app.get('/api/lights', authenticate, lightController.getAll);
  app.post('/api/lights', authenticate, lightController.create);
  app.get('/api/lights/:id', authenticate, lightController.getOne);
  app.put('/api/lights/:id', authenticate, lightController.update);
  app.delete('/api/lights/:id', authenticate, lightController.delete);
}