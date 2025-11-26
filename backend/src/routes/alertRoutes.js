const { Router } = require('express');
const { body } = require('express-validator');
const controller = require('../controllers/alertController');

const router = Router();

router
  .route('/')
  .get(controller.listAlerts)
  .post(
    [
      body('title').notEmpty().withMessage('Title is required'),
      body('region').notEmpty().withMessage('Region is required'),
      body('message').notEmpty().withMessage('Message is required'),
    ],
    controller.createAlert
  );

router.route('/:id').get(controller.getAlert).delete(controller.deleteAlert);

module.exports = router;


