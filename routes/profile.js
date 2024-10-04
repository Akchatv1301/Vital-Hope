const express = require('express');
const router = express.Router();

router.get('/profile', (req, res) => {
    // This would typically come from a database
    const profileData = {
        userData: {
            name: 'John Smith',
            handle: 'johnsmith',
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
                name: 'Dr. Emily Johnson',
                image: '/images/doctor1.jpg',
                specialty: 'Cardiology'
            },
            {
                id: 2,
                name: 'Dr. Michael Brown',
                image: '/images/doctor2.jpg',
                specialty: 'Dermatology'
            }
        ],
        appointments: [
            {
                doctorName: 'Dr. Emily Johnson',
                type: 'Cardiology Consultation',
                date: '2023-10-15 at 10:00 AM'
            },
            {
                doctorName: 'Dr. Michael Brown',
                type: 'Dermatology Check-up',
                date: '2023-10-20 at 2:00 PM'
            }
        ]
    };

    res.render('profile', profileData);
});

module.exports = router;