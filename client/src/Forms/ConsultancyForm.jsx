import React, { useState } from 'react';
import axios from 'axios';

const ConsultancyForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    countryOfInterest: '',
    visaType: '',
    contactMethod: '',
    preferredDate: '',
    purpose: '',
    message: '',
  });

  const visaTypes = [
    'Study Visa', 'Tourist Visa', 'Work Visa', 'PR / Immigration',
    'Spouse Visa', 'Dependent Visa', 'Visitor Visa', 'Investor / Business Visa',
    'Permanent Residency', 'Family Reunification', 'Open Work Permit',
    'Express Entry', 'Super Visa', 'Citizenship Application', 'Other',
  ];

  const countries = [
    'Canada', 'Australia', 'United Kingdom', 'United States',
    'New Zealand', 'Germany', 'France', 'Italy', 'Sweden',
    'Netherlands', 'Denmark', 'Ireland', 'Finland',
    'Europe (Schengen)', 'Other',
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/consult', formData);
      alert('✅ Consultation submitted successfully!');
      console.log(res)
      setFormData({
        fullName: '', email: '', phone: '', countryOfInterest: '', visaType: '',
        contactMethod: '', preferredDate: '', purpose: '', message: '',
      });
    } catch (error) {
      console.error('Submission error:', error);
      alert('❌ Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-100 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-3xl p-8 sm:p-10 bg-white/60 backdrop-blur-md rounded-2xl shadow-2xl transition-all duration-300">
        <h2 className="text-4xl font-extrabold text-center text-indigo-800 mb-6 animate-fade-in">
          Book Your <span className="text-teal-600">Free Consultation</span>
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6 animate-fade-up">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
          />
          <div className="flex gap-4">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-1/2 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 transition"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-1/2 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 transition"
            />
          </div>
          <select
            name="countryOfInterest"
            value={formData.countryOfInterest}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-indigo-400"
          >
            <option value="">Select Country of Interest</option>
            {countries.map((country, i) => (
              <option key={i} value={country}>{country}</option>
            ))}
          </select>
          <select
            name="visaType"
            value={formData.visaType}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-indigo-400"
          >
            <option value="">Select Visa Type</option>
            {visaTypes.map((type, i) => (
              <option key={i} value={type}>{type}</option>
            ))}
          </select>
          <select
            name="contactMethod"
            value={formData.contactMethod}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-indigo-400"
          >
            <option value="">Preferred Contact Method</option>
            <option value="Phone Call">Phone Call</option>
            <option value="WhatsApp">WhatsApp</option>
            <option value="Email">Email</option>
          </select>
          <input
            type="date"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 transition"
          />
          <input
            type="text"
            name="purpose"
            placeholder="Purpose of Consultation"
            value={formData.purpose}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400"
          />
          <textarea
            name="message"
            placeholder="Additional Message (Optional)"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400"
          />
          <button
            type="submit"
            className="w-full py-3 text-white font-semibold bg-gradient-to-r from-indigo-500 to-teal-500 rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            🚀 Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConsultancyForm;
