const { body, validationResult } = require('express-validator');
const Consultation = require('../models/Consultation');
const nodemailer = require('nodemailer');
require('dotenv').config();

// ✅ Gmail Transporter Setup
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// ✅ Email HTML Template
function buildConsultationHtml(consult) {
  return `
    <h2>New Consultation Request</h2>
    <table cellpadding="6" cellspacing="0" style="border-collapse:collapse">
      <tr><td><strong>Name:</strong></td><td>${consult.fullName}</td></tr>
      <tr><td><strong>Email:</strong></td><td>${consult.email}</td></tr>
      <tr><td><strong>Phone:</strong></td><td>${consult.phone}</td></tr>
      <tr><td><strong>Country:</strong></td><td>${consult.countryOfInterest}</td></tr>
      <tr><td><strong>Visa Type:</strong></td><td>${consult.visaType}</td></tr>
      <tr><td><strong>Contact Method:</strong></td><td>${consult.contactMethod}</td></tr>
      <tr><td><strong>Preferred Date:</strong></td><td>${consult.preferredDate || 'Not provided'}</td></tr>
      <tr><td><strong>Purpose:</strong></td><td>${consult.purpose || 'Not provided'}</td></tr>
      <tr><td><strong>Message:</strong></td><td>${consult.message || 'Not provided'}</td></tr>
      <tr><td><strong>Submitted At:</strong></td><td>${new Date(consult.createdAt).toLocaleString()}</td></tr>
    </table>
  `;
}

/* ------------------- VALIDATION ------------------- */
const validateConsultation = [
  body('fullName').trim().notEmpty().withMessage('Full name is required.')
    .matches(/^[A-Za-z\s.'-]+$/).withMessage('Full name contains invalid characters.'),
  body('email').trim().isEmail().withMessage('Enter a valid email address.').normalizeEmail(),
  body('phone').trim().isNumeric().withMessage('Phone must contain only numbers.')
    .isLength({ min: 7, max: 15 }).withMessage('Phone number length must be between 7 and 15 digits.'),
  body('countryOfInterest').trim().notEmpty().withMessage('Country is required.'),
  body('visaType').trim().notEmpty().withMessage('Visa type is required.'),
  body('contactMethod').trim().notEmpty().isIn(['Email','Phone','WhatsApp']).withMessage('Invalid contact method.'),
  body('preferredDate').optional({ checkFalsy: true }).isISO8601().withMessage('Preferred date must be valid (YYYY-MM-DD).'),
  body('purpose').optional({ checkFalsy: true }).trim().isLength({ max: 200 }).withMessage('Purpose too long (max 200 chars).'),
  body('message').optional({ checkFalsy: true }).trim().isLength({ max: 500 }).withMessage('Message too long (max 500 chars).')
];

/* ------------------- CREATE CONSULTATION ------------------- */
const createConsultation = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const consultData = req.body;
    const newConsultation = await Consultation.create(consultData);

    // ✅ Send email using Gmail SMTP
    await transporter.sendMail({
      from: `"CAIALS" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_RECIPIENT,
      subject: `📬 New Consultation from ${newConsultation.fullName}`,
      html: buildConsultationHtml(newConsultation),
      replyTo: newConsultation.email
    });

    console.log('✅ Email sent successfully via Gmail SMTP');
    res.status(201).json({ message: 'Consultation submitted successfully.' });
  } catch (err) {
    console.error('❌ Email or DB error:', err.message);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
};

/* ------------------- OTHER CONTROLLERS ------------------- */
const getAllConsultations = async (req, res) => {
  try {
    const consultations = await Consultation.find().sort({ createdAt: -1 });
    res.status(200).json(consultations);
  } catch (err) { res.status(500).json({ message: 'Failed to retrieve consultations' }); }
};

const markConsultationCompleted = async (req, res) => {
  try {
    const consultation = await Consultation.findByIdAndUpdate(req.params.id, { isCompleted: req.body.isCompleted }, { new: true });
    if (!consultation) return res.status(404).json({ message: 'Consultation not found' });
    res.status(200).json(consultation);
  } catch (err) { res.status(500).json({ message: 'Server error' }); }
};

const pendingBadge = async (req, res) => {
  try {
    const count = await Consultation.countDocuments({ isCompleted: false });
    res.json({ count });
  } catch (err) { res.status(500).json({ error: "Failed to get count" }); }
};

const cleanupOldConsultations = async (req, res) => {
  try {
    const result = await Consultation.updateMany({ isCompleted: { $exists: false } }, { $set: { isCompleted: false } });
    res.json({ updated: result.modifiedCount });
  } catch (err) { res.status(500).json({ error: "Cleanup failed" }); }
};

const deleteConsultationById = async (req, res) => {
  try {
    const deleted = await Consultation.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Consultation not found' });
    res.json({ message: 'Consultation deleted successfully.' });
  } catch (err) { res.status(500).json({ message: 'Failed to delete consultation' }); }
};

const clearAllConsultations = async (req, res) => {
  try {
    const result = await Consultation.deleteMany({});
    res.json({ message: 'All consultations deleted successfully.', deletedCount: result.deletedCount });
  } catch (err) { res.status(500).json({ message: 'Failed to clear consultations' }); }
};

const getConsultationsPaginated = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 20;
    const skip = (page - 1) * limit;

    const [consultations, total] = await Promise.all([
      Consultation.find().sort({ createdAt: -1 }).skip(skip).limit(limit),
      Consultation.countDocuments()
    ]);

    res.json({
      consultations,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalConsultations: total
    });
  } catch (err) { res.status(500).json({ message: 'Failed to fetch paginated consultations' }); }
};

/* ------------------- EXPORTS ------------------- */
module.exports = {
  validateConsultation,
  createConsultation,
  getAllConsultations,
  markConsultationCompleted,
  pendingBadge,
  cleanupOldConsultations,
  deleteConsultationById,
  clearAllConsultations,
  getConsultationsPaginated
};
