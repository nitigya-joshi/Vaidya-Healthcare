const express = require('express');
const doctorController = require('../controllers/doctorControllers');
const { auth, adminauth, doctorauth } = require('../middleware/auth')
const router = express.Router();
router.route('/register').post(auth, doctorController.registerDoctor);
router.route('/getdoctors').get(doctorController.getDoctors);
router.route('/approve').get(auth, adminauth, doctorController.approveDoctor);
router.route('/deleteDoctor').get(auth, adminauth, doctorController.deleteDoctor);
router.route('/doctorappointments').get(auth, doctorauth, doctorController.doctorappointments);
router.route('/doctor/:id').get(doctorController.getDoctorById);
module.exports = router;