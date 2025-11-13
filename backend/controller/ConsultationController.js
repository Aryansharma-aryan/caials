const Consultation = require('../models/Consultation');
const nodemailer = require('nodemailer');
require('dotenv').config();

const ADMIN_RECIPIENT = process.env.ADMIN_RECIPIENT || process.env.EMAIL_USER;

// --- Configure transporter ---
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Verify transporter
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
   📨 CREATE CONSULTATION + EMAIL
--------------------------------------------------- */
const createConsultation = async (req, res) => {
  try {
    console.log("📥 Request received:", req.body);

    let {
      fullName, email, phone,
      countryOfInterest, visaType,
      contactMethod, preferredDate,
      purpose, message
    } = req.body;

    // Trim all inputs
    fullName = fullName?.trim();
    email = email?.trim();
    phone = phone?.trim();
    countryOfInterest = countryOfInterest?.trim();
    visaType = visaType?.trim();
    contactMethod = contactMethod?.trim();
    preferredDate = preferredDate?.trim();
    purpose = purpose?.trim();
    message = message?.trim();

    // Minimal validation
    if (!fullName || !email || !phone || !countryOfInterest || !visaType || !contactMethod) {
      return res.status(400).json({ message: 'Please fill all required fields.' });
    }
    if (!/^[A-Za-z\s.'-]+$/.test(fullName)) return res.status(400).json({ message: 'Full name contains invalid characters.' });
    if (!/^\d{7,15}$/.test(phone)) return res.status(400).json({ message: 'Phone number must be 7-15 digits.' });
    if (!/.+@.+\..+/.test(email)) return res.status(400).json({ message: 'Email is invalid.' });
    const allowedContactMethods = ['Email', 'Phone', 'WhatsApp'];
    if (!allowedContactMethods.includes(contactMethod)) return res.status(400).json({ message: 'Invalid contact method.' });
    if (preferredDate && isNaN(Date.parse(preferredDate))) return res.status(400).json({ message: 'Preferred date is invalid.' });

    // Save consultation to DB
    const newConsultation = new Consultation({
      fullName, email, phone,
      countryOfInterest, visaType,
      contactMethod, preferredDate,
      purpose, message
    });

    const savedConsultation = await newConsultation.save();
    console.log("💾 Consultation saved:", savedConsultation);

    // Send email
    const mailOptions = {
      from: `"CAIALS Consultation" <${process.env.EMAIL_USER}>`,
      to: ADMIN_RECIPIENT,
      subject: `📬 New Consultation from ${fullName}`,
      html: buildConsultationHtml(savedConsultation),
      replyTo: email
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("✅ Email sent:", info.messageId);
    } catch (emailError) {
      console.error("❌ Error sending email:", emailError);
    }

    res.status(201).json({ message: "Consultation submitted successfully." });

  } catch (err) {
    console.error("❌ Error creating consultation:", err);
    res.status(500).json({ message: "Server Error. Please try again later." });
  }
};

/* ---------------------------------------------------
   🧾 GET ALL CONSULTATIONS
--------------------------------------------------- */
const getAllConsultations = async (req, res) => {
  try {
    const consultations = await Consultation.find().sort({ createdAt: -1 });
    res.status(200).json(consultations);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve consultations' });
  }
};

/* ---------------------------------------------------
   ✅ MARK CONSULTATION COMPLETED
--------------------------------------------------- */
const markConsultationCompleted = async (req, res) => {
  const { id } = req.params;
  const { isCompleted } = req.body;
  try {
    const consultation = await Consultation.findByIdAndUpdate(id, { isCompleted }, { new: true });
    if (!consultation) return res.status(404).json({ message: 'Consultation not found' });
    res.status(200).json(consultation);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

/* ---------------------------------------------------
   🟡 PENDING BADGE COUNT
--------------------------------------------------- */
const pendingBadge = async (req, res) => {
  try {
    const count = await Consultation.countDocuments({ isCompleted: false });
    res.json({ count });
  } catch (err) {
    res.status(500).json({ error: "Failed to get count" });
  }
};

/* ---------------------------------------------------
   🧹 CLEANUP OLD CONSULTATIONS
--------------------------------------------------- */
const cleanupOldConsultations = async (req, res) => {
  try {
    const result = await Consultation.updateMany(
      { isCompleted: { $exists: false } },
      { $set: { isCompleted: false } }
    );
    res.json({ updated: result.modifiedCount });
  } catch (err) {
    res.status(500).json({ error: "Cleanup failed" });
  }
};

/* ---------------------------------------------------
   ❌ DELETE BY ID
--------------------------------------------------- */
const deleteConsultationById = async (req, res) => {
  try {
    const deleted = await Consultation.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Consultation not found' });
    res.json({ message: 'Consultation deleted successfully.' });
  } catch (err) {
    console.error("❌ Delete error:", err);
    res.status(500).json({ message: 'Failed to delete consultation' });
  }
};

/* ---------------------------------------------------
   🗑 CLEAR ALL
--------------------------------------------------- */
const clearAllConsultations = async (req, res) => {
  try {
    const result = await Consultation.deleteMany({});
    res.json({ message: 'All consultations deleted successfully.', deletedCount: result.deletedCount });
  } catch (err) {
    console.error("❌ Clear all error:", err);
    res.status(500).json({ message: 'Failed to clear consultations' });
  }
};

/* ---------------------------------------------------
   📄 PAGINATED FETCH
--------------------------------------------------- */
const getConsultationsPaginated = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 1000;
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
  } catch (err) {
    console.error("❌ Pagination error:", err);
    res.status(500).json({ message: 'Failed to fetch paginated consultations' });
  }
};

/* ---------------------------------------------------
   📦 EXPORTS
--------------------------------------------------- */
module.exports = {
  createConsultation,
  getAllConsultations,
  markConsultationCompleted,
  pendingBadge,
  cleanupOldConsultations,
  deleteConsultationById,
  clearAllConsultations,
  getConsultationsPaginated
};
