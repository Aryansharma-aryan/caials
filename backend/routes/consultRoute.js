const express = require('express');
const router = express.Router();
const { createConsultation, getAllConsultations, markConsultationCompleted,pendingBadge,  cleanupOldConsultations} = require('../controller/ConsultationController');

const { loginAdmin, verifyAdmin } = require('../controller/AdminController');
router.post('/admin/login', loginAdmin);


router.post('/consult', createConsultation);
router.get('/getConsultation',verifyAdmin, getAllConsultations)


router.put('/getConsultation/:id/complete', markConsultationCompleted)
router.get('/getConsultation/pendingCount',pendingBadge)
router.get('/getConsultation/cleanupOld', cleanupOldConsultations);



module.exports = router;
