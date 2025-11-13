const { body, validationResult } = require('express-validator');
const Consultation = require('../models/Consultation');
const nodemailer = require('nodemailer');
require('dotenv').config();

const ADMIN_RECIPIENT = process.env.ADMIN_RECIPIENT || process.env.EMAIL_USER;

// --- Configure transporter ---
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
});

transporter.verify()
  .then(() => console.log("✅ Gmail transporter ready"))
  .catch(err => console.error("❌ Transporter verify failed:", err.message));

// --- Email template ---
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

/* ---------------------------------------------------
   ✅ VALIDATION MIDDLEWARE
--------------------------------------------------- */
const validateConsultation = [
  body('fullName').trim().notEmpty().withMessage('Full name is required.')
    .matches(/^[A-Za-z\s.'-]+$/).withMessage('Full name contains invalid characters.'),
  body('email').trim().isEmail().withMessage('Enter a valid email address.').normalizeEmail(),
  body('phone').trim().isNumeric().withMessage('Phone must contain only numbers.')
    .isLength({ min: 7, max: 15 }).withMessage('Phone number length must be between 7 and 15 digits.'),
  body('countryOfInterest').trim().notEmpty().withMessage('Country is required.'),
  body('visaType').trim().notEmpty().withMessage('Visa type is required.'),
  body('contactMethod').trim().notEmpty().withMessage('Contact method is required.')
    .isIn(['Email', 'Phone', 'WhatsApp']).withMessage('Invalid contact method.'),
  body('preferredDate').optional({ checkFalsy: true })
    .isISO8601().withMessage('Preferred date must be valid (YYYY-MM-DD).'),
  body('purpose').optional({ checkFalsy: true }).trim().isLength({ max: 200 }).withMessage('Purpose too long (max 200 chars).'),
  body('message').optional({ checkFalsy: true }).trim().isLength({ max: 500 }).withMessage('Message too long (max 500 chars).')
];

/* ---------------------------------------------------
   📨 CREATE CONSULTATION + EMAIL
--------------------------------------------------- */
const createConsultation = async (req, res) => {
  console.log("📥 [CREATE] Request received:", req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.warn("⚠️ [CREATE] Validation errors:", errors.array());
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { fullName, email, phone, countryOfInterest, visaType, contactMethod, preferredDate, purpose, message } = req.body;

    const newConsultation = new Consultation({
      fullName, email, phone, countryOfInterest, visaType, contactMethod, preferredDate, purpose, message
    });

    const savedConsultation = await newConsultation.save();
    console.log("💾 [CREATE] Consultation saved:", savedConsultation);

    const mailOptions = {
      from: `"CAIALS Consultation" <${process.env.EMAIL_USER}>`,
      to: ADMIN_RECIPIENT,
      subject: `📬 New Consultation from ${fullName}`,
      html: buildConsultationHtml(savedConsultation),
      replyTo: email
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("✅ [EMAIL] Consultation email sent:", info.messageId);
    } catch (mailErr) {
      console.error("❌ [EMAIL] Error sending consultation email:", mailErr);
    }

    res.status(201).json({ message: "Consultation submitted successfully." });
  } catch (err) {
    console.error("❌ [CREATE] Error creating consultation:", err);
    res.status(500).json({ message: "Server Error. Please try again later." });
  }
};

/* ---------------------------------------------------
   🧾 EXISTING CONTROLLERS
--------------------------------------------------- */
const getAllConsultations = async (req, res) => {
  console.log("📥 [GET ALL] Fetching all consultations");
  try {
    const consultations = await Consultation.find().sort({ createdAt: -1 });
    console.log("✅ [GET ALL] Consultations fetched:", consultations.length);
    res.status(200).json(consultations);
  } catch (err) {
    console.error("❌ [GET ALL] Failed to fetch consultations:", err);
    res.status(500).json({ message: 'Failed to retrieve consultations' });
  }
};

const markConsultationCompleted = async (req, res) => {
  console.log("📥 [COMPLETE] Marking consultation complete, ID:", req.params.id, "Body:", req.body);
  const { id } = req.params;
  const { isCompleted } = req.body;

  try {
    const consultation = await Consultation.findByIdAndUpdate(id, { isCompleted }, { new: true });
    if (!consultation) {
      console.warn("⚠️ [COMPLETE] Consultation not found:", id);
      return res.status(404).json({ message: 'Consultation not found' });
    }
    console.log("✅ [COMPLETE] Consultation updated:", consultation);
    res.status(200).json(consultation);
  } catch (err) {
    console.error("❌ [COMPLETE] Error updating consultation:", err);
    res.status(500).json({ message: 'Server error' });
  }
};

const pendingBadge = async (req, res) => {
  console.log("📥 [PENDING COUNT] Fetching pending consultations count");
  try {
    const count = await Consultation.countDocuments({ isCompleted: false });
    console.log("✅ [PENDING COUNT] Pending consultations:", count);
    res.json({ count });
  } catch (err) {
    console.error("❌ [PENDING COUNT] Failed to fetch count:", err);
    res.status(500).json({ error: "Failed to get count" });
  }
};

const cleanupOldConsultations = async (req, res) => {
  console.log("📥 [CLEANUP] Cleaning old consultations");
  try {
    const result = await Consultation.updateMany(
      { isCompleted: { $exists: false } },
      { $set: { isCompleted: false } }
    );
    console.log("✅ [CLEANUP] Consultations updated:", result.modifiedCount);
    res.json({ updated: result.modifiedCount });
  } catch (err) {
    console.error("❌ [CLEANUP] Cleanup failed:", err);
    res.status(500).json({ error: "Cleanup failed" });
  }
};

/* ---------------------------------------------------
   🆕 NEW CONTROLLERS (Delete, Clear All, Pagination)
--------------------------------------------------- */

const deleteConsultationById = async (req, res) => {
  console.log("📥 [DELETE] Deleting consultation ID:", req.params.id);
  try {
    const deleted = await Consultation.findByIdAndDelete(req.params.id);
    if (!deleted) {
      console.warn("⚠️ [DELETE] Consultation not found:", req.params.id);
      return res.status(404).json({ message: 'Consultation not found' });
    }
    console.log("✅ [DELETE] Consultation deleted:", deleted._id);
    res.json({ message: 'Consultation deleted successfully.' });
  } catch (err) {
    console.error("❌ [DELETE] Failed to delete consultation:", err);
    res.status(500).json({ message: 'Failed to delete consultation' });
  }
};

const clearAllConsultations = async (req, res) => {
  console.log("📥 [CLEAR ALL] Clearing all consultations");
  try {
    const result = await Consultation.deleteMany({});
    console.log("✅ [CLEAR ALL] Deleted count:", result.deletedCount);
    res.json({ message: 'All consultations deleted successfully.', deletedCount: result.deletedCount });
  } catch (err) {
    console.error("❌ [CLEAR ALL] Failed to clear consultations:", err);
    res.status(500).json({ message: 'Failed to clear consultations' });
  }
};

const getConsultationsPaginated = async (req, res) => {
  console.log("📥 [PAGINATED] Fetching page:", req.query.page);
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 20;
    const skip = (page - 1) * limit;

    const [consultations, total] = await Promise.all([
      Consultation.find().sort({ createdAt: -1 }).skip(skip).limit(limit),
      Consultation.countDocuments()
    ]);

    console.log(`✅ [PAGINATED] Page ${page} fetched, total consultations: ${total}`);
    res.json({
      consultations,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalConsultations: total
    });
  } catch (err) {
    console.error("❌ [PAGINATED] Failed to fetch paginated consultations:", err);
    res.status(500).json({ message: 'Failed to fetch paginated consultations' });
  }
};

/* ---------------------------------------------------
   📦 EXPORTS
--------------------------------------------------- */
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
