const express = require('express');
const router = express.Router();

const { isLoggedIn } = require('../lib/auth');

const { renderPatient, addPatient, renderTestPatient, editPatient, printPatient, editLink } = require('../controllers/links.controller.new')

// Authorization
router.use(isLoggedIn);

// Routes
router.get('/addpatient', renderPatient);
router.post('/addpatient', addPatient);
router.get('/testpatent', renderTestPatient);
router.post('/testpatient/:id', editPatient);
router.post('/printpatient', printPatient);
router.get('/', isLoggedIn, renderLinks);

module.exports = router;