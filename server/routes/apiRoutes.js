const express = require('express');
const api = require('../controllers/apiControllers');
// const { postContactData, bookappointment, getappointments, deleteAppointment, payment } = require('../controllers/apiControllers')
const router = express.Router()
const { auth, doctorauth } = require('../middleware/auth')
router.route('/postContactData').post(api.postContactData);
router.route('/bookappointment').post(auth, api.bookappointment);
router.route('/getappointments').get(auth, api.getappointments);
router.route('/deleteAppointment').get(auth, doctorauth, api.deleteAppointment);
router.route('/create-checkout-session').post(auth, api.payment);
module.exports = router;