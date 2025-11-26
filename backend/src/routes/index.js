const { Router } = require('express');
const safeSpotRoutes = require('./safeSpotRoutes');
const alertRoutes = require('./alertRoutes');
const sosRoutes = require('./sosRoutes');
const shelterRoutes = require('./shelterRoutes');

const router = Router();

router.use('/safe-spots', safeSpotRoutes);
router.use('/alerts', alertRoutes);
router.use('/sos', sosRoutes);
router.use('/shelters', shelterRoutes);

module.exports = router;


