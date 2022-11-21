const asyncHandler = require('express-async-handler');
const { default: mongoose } = require('mongoose');
const Doctor = require('../models/doctorModel');
const User = require('../models/userModel');
const appointmentModel = require('../models/appointmentModel')


class doctorController {
    constructor(){}

    static registerDoctor = asyncHandler(async (req, res) => {
        const { name, category, languages, fee, edu, experience, email, mobile, clinicaddress, rating, pic } = req.body;
        const doctorExists = await Doctor.findOne({ email });
        if (doctorExists) {
            res.status(400);
            throw new Error('Doctor already exists');
        }
        const user = req.user._id
        const doctor = await Doctor.create({
            name, user, category, languages, fee, edu, experience, email, mobile, clinicaddress, rating, pic
        });
        if (doctor) {
            res.status(201).send({
                _id: doctor._id,
                name: doctor.name,
                category: doctor.category,
                lang: doctor.languages,
                fee: doctor.fee,
                edu: doctor.edu,
                experience: doctor.experience,
                email: doctor.email,
                mobile: doctor.mobile,
                caddress: doctor.clinicaddress,
                rating: doctor.rating,
                pic: doctor.pic,
            })
        } else {
            res.status(400)
            throw new Error('Error Occured');
        }
    
    })

    static getDoctors = asyncHandler(async (req, res) => {
        const doctors = await Doctor.find({});
        if (doctors) {
            res.status(201).send(doctors);
        } else {
            res.status(400)
            throw new Error('Cannot get doctors');
        }
    })

    static approveDoctor = asyncHandler(async (req, res) => {
        const doctorid = req.query.id
        const doctor = await Doctor.findByIdAndUpdate(doctorid, { approved: true }).populate('user');
        const userid = doctor.user._id
        await User.findByIdAndUpdate(userid, { isDoctor: true, doctorId: doctorid });
        res.status(200).redirect('/verified?m1=Doctor Approved&m2= ')
    })

    static deleteDoctor = asyncHandler(async (req, res) => {
        const doctorid = req.query.id
        const doctor = await Doctor.findByIdAndDelete(doctorid).populate('user');
        const userid = doctor.user._id
        await User.findByIdAndUpdate(userid, { isDoctor: false, doctorId: null })
        if (doctor) {
            res.status(200).redirect('/verified?m1=Doctor Deleted&m2= ')
        }
    })

    static doctorappointments = asyncHandler(async (req, res) => {
        const appointments = await appointmentModel.find({ doctor: req.user.doctorId }).populate('user');
        if (appointments) {
            res.send(appointments)
        }
        else {
            throw new Error('can not fetch appointments');
        }
    })

    static getDoctorById = asyncHandler(async (req, res) => {
        const doctorId = req.params.id;
        const doctor = await Doctor.findById({ _id: doctorId });
        if (doctor) {
            res.send(doctor)
        }
        else {
            throw new Error('can not fetch appointments');
        }
    })
}


module.exports = doctorController