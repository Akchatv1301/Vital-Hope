const express = require('express');
const router = express.Router();

router.get('/profile', (req, res) => {
    const profileData = {
        userData: {
            name: 'Hari Kumar Jena',
            handle: 'hari_jain',
            profileImage: '/images/profile.jpg',
            gender: 'Male',
            age: '35',
            blood: 'O+',
            allergy: 'None',
            condition: 'None',
            medication: 'None'
        },
        doctors: [
            {
                id: 1,
                name: 'Dr. P. C. Dolai',
                image: '/images/doctor.jpg',
                specialty: 'Cardiology'
            },
            {
                id: 2,
                name: 'Dr. Asish Jain',
                image: '/images/doctor.jpg',
                specialty: 'Dermatology'
            }
        ],
        appointments: [
            {
                doctorName: 'Dr. P. C. Dolai',
                type: 'Cardiology Consultation',
                date: '2023-10-15 at 10:00 AM'
            },
            {
                doctorName: 'Dr. Asish Jain',
                type: 'Dermatology Check-up',
                date: '2023-10-20 at 2:00 PM'
            }
        ]
    };

    res.render('profile', profileData);
});

module.exports = router;