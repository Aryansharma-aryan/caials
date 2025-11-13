const express = require('express');
const router = express.Router();

const {
  createConsultation,
  getAllConsultations,
  markConsultationCompleted,
  pendingBadge,
  cleanupOldConsultations,
  deleteConsultationById,
  clearAllConsultations,
  getConsultationsPaginated
} = require('../controller/ConsultationController');

const { loginAdmin, verifyAdmin } = require('../controller/AdminController');

// 🔐 Admin login
router.post('/admin/login', loginAdmin);

// 💬 Public consultation submission
router.post('/consult', createConsultation);

// 🧾 Admin-protected routes
router.get('/consultations', verifyAdmin, getAllConsultations);
router.put('/consultations/:id/complete', verifyAdmin, markConsultationCompleted);
router.get('/consultations/pendingCount', verifyAdmin, pendingBadge);
router.patch('/consultations/cleanupOld', verifyAdmin, cleanupOldConsultations);
router.get('/consultations/paginated', verifyAdmin, getConsultationsPaginated);
router.delete('/consultations/:id', verifyAdmin, deleteConsultationById);
router.delete('/consultations', verifyAdmin, clearAllConsultations);

module.exports = router;
