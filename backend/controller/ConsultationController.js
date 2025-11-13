// controllers/consultController.js

const { body, validationResult } = require("express-validator");
const Consultation = require("../models/Consultation");
const { Resend } = require("resend");
require("dotenv").config();

// ------------------------------------------------------
// 🚀 Initialize Resend API
// ------------------------------------------------------
const resend = new Resend(process.env.RESEND_API_KEY);

/* -------------------------------------------------------
   📧 EMAIL TEMPLATE (HTML)
---------------------------------------------------------- */
const buildConsultationHtml = (consult) => `
  <div style="font-family:Arial, sans-serif; line-height:1.6;">
    <h2>📬 New Consultation Request</h2>
    <table cellpadding="6" cellspacing="0" style="border-collapse:collapse;">
      <tr><td><b>Name:</b></td><td>${consult.fullName}</td></tr>
      <tr><td><b>Email:</b></td><td>${consult.email}</td></tr>
      <tr><td><b>Phone:</b></td><td>${consult.phone}</td></tr>
      <tr><td><b>Country of Interest:</b></td><td>${consult.countryOfInterest}</td></tr>
      <tr><td><b>Visa Type:</b></td><td>${consult.visaType}</td></tr>
      <tr><td><b>Contact Method:</b></td><td>${consult.contactMethod}</td></tr>
      <tr><td><b>Preferred Date:</b></td><td>${consult.preferredDate || "Not provided"}</td></tr>
      <tr><td><b>Purpose:</b></td><td>${consult.purpose || "Not provided"}</td></tr>
      <tr><td><b>Message:</b></td><td>${consult.message || "Not provided"}</td></tr>
      <tr><td><b>Submitted At:</b></td><td>${new Date(consult.createdAt).toLocaleString()}</td></tr>
    </table>
    <p style="margin-top:10px;color:#555;">— CAIALS System</p>
  </div>
`;

/* -------------------------------------------------------
   🧾 VALIDATION RULES
---------------------------------------------------------- */
const validateConsultation = [
  body("fullName")
    .trim()
    .notEmpty()
    .withMessage("Full name is required.")
    .matches(/^[A-Za-z\s.'-]+$/)
    .withMessage("Full name contains invalid characters."),
  body("email")
    .trim()
    .isEmail()
    .withMessage("Enter a valid email address.")
    .normalizeEmail(),
  body("phone")
    .trim()
    .isNumeric()
    .withMessage("Phone must contain only numbers.")
    .isLength({ min: 7, max: 15 })
    .withMessage("Phone number must be 7–15 digits."),
  body("countryOfInterest").trim().notEmpty().withMessage("Country is required."),
  body("visaType").trim().notEmpty().withMessage("Visa type is required."),
  body("contactMethod")
    .trim()
    .notEmpty()
    .isIn(["Email", "Phone", "WhatsApp"])
    .withMessage("Invalid contact method."),
  body("preferredDate")
    .optional({ checkFalsy: true })
    .isISO8601()
    .withMessage("Preferred date must be valid (YYYY-MM-DD)."),
  body("purpose")
    .optional({ checkFalsy: true })
    .trim()
    .isLength({ max: 200 })
    .withMessage("Purpose too long (max 200 chars)."),
  body("message")
    .optional({ checkFalsy: true })
    .trim()
    .isLength({ max: 500 })
    .withMessage("Message too long (max 500 chars)."),
];

/* -------------------------------------------------------
   🚀 CREATE CONSULTATION (with Resend email)
---------------------------------------------------------- */
const createConsultation = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  try {
    const newConsultation = await Consultation.create(req.body);

    // ✅ Respond to frontend instantly
    res.status(201).json({
      success: true,
      message:
        "Your consultation has been submitted successfully. We’ll get back to you soon!",
    });

    // ✅ Send email asynchronously using Resend
    process.nextTick(async () => {
      try {
        await resend.emails.send({
          from: "CAIALS <noreply@caials.com>", // domain must be verified in Resend
          to: process.env.ADMIN_RECIPIENT,
          subject: `📩 New Consultation from ${newConsultation.fullName}`,
          html: buildConsultationHtml(newConsultation),
          reply_to: newConsultation.email,
        });
        console.log(`✅ Email sent via Resend for ${newConsultation.fullName}`);
      } catch (emailErr) {
        console.error("❌ Resend email error:", emailErr.message);
      }
    });
  } catch (err) {
    console.error("❌ Backend error:", err.message);
    res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again later.",
    });
  }
};

/* -------------------------------------------------------
   📚 OTHER CONTROLLERS
---------------------------------------------------------- */
const getAllConsultations = async (req, res) => {
  try {
    const consultations = await Consultation.find().sort({ createdAt: -1 });
    res.status(200).json(consultations);
  } catch {
    res.status(500).json({ message: "Failed to retrieve consultations" });
  }
};

const markConsultationCompleted = async (req, res) => {
  try {
    const consultation = await Consultation.findByIdAndUpdate(
      req.params.id,
      { isCompleted: req.body.isCompleted },
      { new: true }
    );
    if (!consultation)
      return res.status(404).json({ message: "Consultation not found" });
    res.status(200).json(consultation);
  } catch {
    res.status(500).json({ message: "Server error" });
  }
};

const pendingBadge = async (req, res) => {
  try {
    const count = await Consultation.countDocuments({ isCompleted: false });
    res.json({ count });
  } catch {
    res.status(500).json({ error: "Failed to get count" });
  }
};

const cleanupOldConsultations = async (req, res) => {
  try {
    const result = await Consultation.updateMany(
      { isCompleted: { $exists: false } },
      { $set: { isCompleted: false } }
    );
    res.json({ updated: result.modifiedCount });
  } catch {
    res.status(500).json({ error: "Cleanup failed" });
  }
};

const deleteConsultationById = async (req, res) => {
  try {
    const deleted = await Consultation.findByIdAndDelete(req.params.id);
    if (!deleted)
      return res.status(404).json({ message: "Consultation not found" });
    res.json({ message: "Consultation deleted successfully." });
  } catch {
    res.status(500).json({ message: "Failed to delete consultation" });
  }
};

const clearAllConsultations = async (req, res) => {
  try {
    const result = await Consultation.deleteMany({});
    res.json({
      message: "All consultations deleted successfully.",
      deletedCount: result.deletedCount,
    });
  } catch {
    res.status(500).json({ message: "Failed to clear consultations" });
  }
};

const getConsultationsPaginated = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = 20;
    const skip = (page - 1) * limit;

    const [consultations, total] = await Promise.all([
      Consultation.find().sort({ createdAt: -1 }).skip(skip).limit(limit),
      Consultation.countDocuments(),
    ]);

    res.json({
      consultations,
      currentPage: page,
      totalPages: Math.ceil(total / limit),
      totalConsultations: total,
    });
  } catch {
    res.status(500).json({ message: "Failed to fetch paginated consultations" });
  }
};

/* -------------------------------------------------------
   📦 EXPORT MODULES
---------------------------------------------------------- */
module.exports = {
  validateConsultation,
  createConsultation,
  getAllConsultations,
  markConsultationCompleted,
  pendingBadge,
  cleanupOldConsultations,
  deleteConsultationById,
  clearAllConsultations,
  getConsultationsPaginated,
};
