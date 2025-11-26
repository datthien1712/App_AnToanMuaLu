const { Router } = require('express');
const { body } = require('express-validator');
const controller = require('../controllers/sosController');

const router = Router();

router
  .route('/')
  .get(controller.listSOSRequests)
  .post(
    [
      body('requesterName').notEmpty().withMessage('Tên người gửi SOS là bắt buộc'),
      body('lastKnownLocation.coordinates')
        .isArray({ min: 2, max: 2 })
        .withMessage('Vui lòng cung cấp kinh độ, vĩ độ'),
    ],
    controller.createSOSRequest
  );

router
  .route('/:id/status')
  .patch(
    [body('status').isIn(['pending', 'acknowledged', 'rescued', 'cancelled']).withMessage('Trạng thái không hợp lệ')],
    controller.updateSOSStatus
  );

module.exports = router;


