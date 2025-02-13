const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

/**
 * Dashnoard routes
 */
router.get('/dashboard', dashboardController.dashboard)

module.exports = router;
