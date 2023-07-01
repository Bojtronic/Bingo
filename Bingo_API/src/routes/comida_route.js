const { Router } = require('express');
const controller = require('../controllers/comida_controller');

const router = Router();

router.get('/', controller.get);
router.get("/:id", controller.getById);
router.post("/", controller.add);
router.put("/:id", controller.update);
router.delete("/", controller.remove);

module.exports = router;