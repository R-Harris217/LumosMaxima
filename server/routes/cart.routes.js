const cartController = require('../controllers/cart.controller');

const { authenticate } = require('../config/jwt.config');

module.exports = function(app) {
  app.get('/api/cart', authenticate, cartController.getAll);
  app.post('/api/cart', authenticate, cartController.create);
  app.delete('/api/cart/:id', authenticate, cartController.delete);
}