const { Router } = require('express');
const { body } = require('express-validator');
const controller = require('../controllers/shelterController');

const router = Router();

router
  .route('/')
  .get(controller.listShelters)
  .post(
    [
      body('name').notEmpty().withMessage('Tên nơi trú ẩn bắt buộc'),
      body('address').notEmpty().withMessage('Địa chỉ bắt buộc'),
    ],
    controller.createShelter
  );

router.route('/:id').put(controller.updateShelter);

module.exports = router;


