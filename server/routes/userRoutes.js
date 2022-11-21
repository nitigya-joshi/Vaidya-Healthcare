const express = require('express');
const { registerUser, authUser, logout, updateUser, uploadAvatar, verifyEmail, getUserdata, getAllUsers, deleteUser, makeAdmin } = require('../controllers/userControllers');
const { auth, adminauth } = require('../middleware/auth')
const { upload } = require('../middleware/avatarUpload');
const router = express.Router()
router.route('/register').post(registerUser);
router.route('/login').post(authUser);
router.route('/logout').get(auth, logout);
router.route('/updateuser').patch(auth, updateUser);
router.route('/upload').post(auth, upload.single("image"), uploadAvatar);
router.route('/verify/:userId/:uniqueString').get(verifyEmail);
router.route('/me').get(auth, getUserdata);
router.route('/getusers').get(auth, adminauth, getAllUsers);
router.route('/deleteUser').get(auth, adminauth, deleteUser);
router.route('/makeadmin').get(auth, adminauth, makeAdmin);
module.exports = router;