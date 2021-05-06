const BurgerController = require('../controllers/burgers.controller');

const { authenticate } = require('../config/jwt.config');

module.exports = function(app) {
  app.get('/api/burgers', authenticate, BurgerController.getAll);
  app.post('/api/burgers', authenticate, BurgerController.create);
  app.get('/api/burgers/:id', authenticate, BurgerController.getOne);
  app.put('/api/burgers/:id', authenticate, BurgerController.update);
  app.delete('/api/burgers/:id', authenticate, BurgerController.delete);
}