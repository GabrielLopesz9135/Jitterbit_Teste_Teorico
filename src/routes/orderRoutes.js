const express = require('express');
const router = express.Router();
const controller = require('../controllers/orderController');
const auth = require('../middlewares/auth');

router.post('/', auth, controller.createOrder);               // criar
router.get('/list', auth, controller.listOrders);             // listar todos
router.get('/:id', auth, controller.getOrder);                // obter por id -> /order/v100...
router.put('/:id', auth, controller.updateOrder);             // atualizar
router.delete('/:id', auth, controller.deleteOrder);          // deletar

module.exports = router;
