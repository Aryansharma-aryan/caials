const Consultation = require('../models/Consultation');

// @desc    Create a new consultation request
// @route   POST /api/consultation
// @access  Public
const createConsultation = async (req, res) => {
  try {
    const {
      fullName,
      email,
      phone,
      countryOfInterest,
      visaType,
      contactMethod,
      preferredDate,
      purpose,
      message,
    } = req.body;

    if (!fullName || !email || !phone || !countryOfInterest || !visaType || !contactMethod) {
      return res.status(400).json({ message: 'Please fill in all required fields.' });
    }

    const newConsultation = new Consultation({
      fullName,
      email,
      phone,
      countryOfInterest,
      visaType,
      contactMethod,
      preferredDate,
      purpose,
      message,
      isCompleted: false, // ✅ explicitly set
    });

    await newConsultation.save();
    res.status(201).json({ message: 'Consultation submitted successfully.' });
  } catch (error) {
    console.error('Error saving consultation:', error);
    res.status(500).json({ message: 'Server Error. Please try again later.' });
  }
};

// @desc    Get all consultations
const getAllConsultations = async (req, res) => {
  try {
    const consultations = await Consultation.find().sort({ createdAt: -1 });
    res.status(200).json(consultations);
  } catch (err) {
    console.error("Error fetching consultations:", err);
    res.status(500).json({ message: 'Failed to retrieve consultations' });
  }
};

// @desc    Mark as completed/uncompleted
const markConsultationCompleted = async (req, res) => {
  const { id } = req.params;
  const { isCompleted } = req.body;

  try {
    const consultation = await Consultation.findByIdAndUpdate(
      id,
      { isCompleted },
      { new: true }
    );

    if (!consultation) {
      return res.status(404).json({ message: 'Consultation not found' });
    }

    res.status(200).json(consultation);
  } catch (error) {
    console.error('Error updating consultation:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get count of pending consultations
const pendingBadge = async (req, res) => {
  try {
    const count = await Consultation.countDocuments({ isCompleted: false });
    res.json({ count });
  } catch (error) {
    console.error("Error counting pending consultations:", error);
    res.status(500).json({ error: "Failed to get count" });
  }
};

// Optional: One-time DB cleanup for missing isCompleted field
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

module.exports = {
  createConsultation,
  getAllConsultations,
  markConsultationCompleted,
  pendingBadge,
  cleanupOldConsultations, // optional route
};
