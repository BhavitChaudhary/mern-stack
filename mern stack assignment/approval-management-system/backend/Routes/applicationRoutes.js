const express = require('express');
const { submitApplication, reviewApplication } = require('../controllers/applicationController');

const router = express.Router();

router.post('/submit', submitApplication);
router.post('/review', reviewApplication);

module.exports = router;
