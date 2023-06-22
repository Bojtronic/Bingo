const { Router } = require('express');
const controller = require('../controllers/comida_controller');

const router = Router();

router.get('/', controller.get);
router.post("/", controller.add);

module.exports = router;