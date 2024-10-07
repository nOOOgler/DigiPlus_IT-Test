const express = require('express');
const router = express.Router();
const simController = require('../controllers/simController');


router.post('/activate', simController.activateSIM);

router.post('/deactivate', simController.deactivateSIM);

router.get('/sim-details/:simNumber', simController.getSIMDetails);

module.exports = router;
