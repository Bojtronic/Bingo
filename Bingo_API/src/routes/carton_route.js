const { Router } = require('express');
const controller = require('../controllers/carton_controller');

const router = Router();

router.get('/:id', controller.get);
router.put("/:id", controller.update);

module.exports = router;