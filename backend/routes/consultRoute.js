const express = require('express');
const router = express.Router();

const {
  createConsultation,
  validateConsultation,
  getAllConsultations,
  markConsultationCompleted,
  pendingBadge,
  cleanupOldConsultations
} = require('../controller/ConsultationController');

const { loginAdmin, verifyAdmin } = require('../controller/AdminController');

// Admin login
router.post('/admin/login', loginAdmin);

// Consultation routes
router.post('/consult',validateConsultation, createConsultation);
router.get('/getConsultation', verifyAdmin, getAllConsultations);

router.put('/getConsultation/:id/complete', markConsultationCompleted);
router.get('/getConsultation/pendingCount', pendingBadge);
router.get('/getConsultation/cleanupOld', cleanupOldConsultations);

module.exports = router;
