const { Router } = require('express');
const { body } = require('express-validator');
const controller = require('../controllers/safeSpotController');

const router = Router();
const coordinateValidator = body('location.coordinates')
  .isArray({ min: 2, max: 2 })
  .withMessage('location.coordinates must be [lng, lat]');

router
  .route('/')
  .get(controller.listSafeSpots)
  .post(
    [
      body('name').notEmpty().withMessage('Name is required'),
      coordinateValidator,
      body('location.coordinates.*').isFloat().withMessage('Coordinates must be numbers'),
    ],
    controller.createSafeSpot
  );

router
  .route('/:id')
  .get(controller.getSafeSpot)
  .put(controller.updateSafeSpot)
  .delete(controller.deleteSafeSpot);

module.exports = router;


