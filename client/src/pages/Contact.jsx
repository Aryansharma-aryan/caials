import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  User, 
  MessageSquare,
  Calendar,
  Shield,
  Award,
  Globe,
  FileText
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: '',
    urgency: 'normal'
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const serviceTypes = [
    'US Citizenship Through Naturalization',
    'Family Sponsored Green Card',
    'Employment Based Green Card',
    'H-1B Visa Petitions',
    'Student Visas (F-1)',
    'Tourist/Visitor Visas',
    'Religious Workers (R-1)',
    'Exchange Visitor Visas (J-1)',
    'Intra-Company Transferees (L-1)',
    'Extraordinary Ability Visas (O-1)',
    'Indian Passport/Visa/OCI',
    'Power of Attorney',
    'Other Services'
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      content: "+1 408 422 8585",
      subContent: "Available 24/7 for urgent matters",
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "rosy@caials.com",
      subContent: "We respond within 2 hours",
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600"
    }
  ];

  const officeLocations = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Fremont Office (Head Office)",
      content: "4127 Bay Street, Suite 5",
      subContent: "Fremont, CA 94538",
      bgColor: "bg-indigo-100",
      iconColor: "text-indigo-600"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Tracy Office",
      content: "1660 W Linne Road, Unit J24",
      subContent: "Tracy, CA 95376",
      bgColor: "bg-green-100",
      iconColor: "text-green-600"
    }
  ];

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Registered & Bonded",
      description: "Licensed immigration consultants ensuring secure handling of your case"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Expert Consultants",
      description: "Highly qualified team with extensive immigration law experience"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Services",
      description: "Comprehensive immigration services for individuals and corporations"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Complete Documentation",
      description: "End-to-end assistance with accurate paperwork and USCIS filing"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Ready to start your immigration journey? Our expert consultants are here to provide personalized guidance and support every step of the way.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Get Started Today</h2>
              <p className="text-gray-600">Fill out the form below and our immigration experts will contact you within 24 hours to discuss your case.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Needed *
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    required
                  >
                    <option value="">Select a service</option>
                    {serviceTypes.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Case Urgency
                </label>
                <div className="grid grid-cols-3 gap-4">
                  {['normal', 'urgent', 'emergency'].map((level) => (
                    <label key={level} className="relative flex items-center justify-center">
                      <input
                        type="radio"
                        name="urgency"
                        value={level}
                        checked={formData.urgency === level}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div className={`w-full py-2 px-4 text-center rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                        formData.urgency === level 
                          ? 'border-blue-500 bg-blue-50 text-blue-700' 
                          : 'border-gray-300 text-gray-600 hover:border-gray-400'
                      }`}>
                        <span className="text-sm font-medium capitalize">{level}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Please describe your immigration needs and any specific questions you have..."
                    required
                  ></textarea>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-200 ${
                  isSubmitted 
                    ? 'bg-green-500 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105'
                } shadow-lg`}
              >
                {isSubmitted ? (
                  <div className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Message Sent Successfully!
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </div>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start">
                    <div className={`p-3 ${info.bgColor} rounded-lg mr-4 flex-shrink-0`}>
                      <div className={info.iconColor}>
                        {info.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">{info.title}</h3>
                      <p className="text-lg font-medium text-gray-900 mb-1">{info.content}</p>
                      <p className="text-sm text-gray-600">{info.subContent}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Office Locations */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                <MapPin className="w-6 h-6 text-blue-600 mr-2" />
                Our Office Locations
              </h3>
              <div className="space-y-6">
                {officeLocations.map((location, index) => (
                  <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                    <div className={`p-2 ${location.bgColor} rounded-lg mr-4 flex-shrink-0`}>
                      <div className={location.iconColor}>
                        {location.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">{location.title}</h4>
                      <p className="text-gray-700">{location.content}</p>
                      <p className="text-gray-600">{location.subContent}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-start">
                <div className="p-3 bg-orange-100 rounded-lg mr-4 flex-shrink-0">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Office Hours</h3>
                  <p className="text-lg font-medium text-gray-900 mb-1">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  <p className="text-sm text-gray-600">Emergency consultations available</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Need Immediate Assistance?</h3>
              <div className="space-y-3">
                <button className="w-full bg-white text-blue-600 font-semibold py-3 px-4 rounded-lg hover:bg-blue-50 transition-colors duration-200 flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: +1 408 422 8585
                </button>
                <button className="w-full border-2 border-white text-white font-semibold py-3 px-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 flex items-center justify-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-blue-600">
                  {feature.icon}
                </div>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Office Details Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Visit Our Offices</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
              <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                Fremont Office (Head Office)
              </h4>
              <div className="space-y-2 text-gray-700">
                <p><strong>Address:</strong> 4127 Bay Street, Suite 5</p>
                <p>Fremont, CA 94538</p>
                <p><strong>Phone:</strong> +1 408 422 8585</p>
                <p><strong>Email:</strong> rosy@caials.com</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
              <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                <MapPin className="w-5 h-5 text-purple-600 mr-2" />
                Tracy Office
              </h4>
              <div className="space-y-2 text-gray-700">
                <p><strong>Address:</strong> 1660 W Linne Road, Unit J24</p>
                <p>Tracy, CA 95376</p>
                <p><strong>Phone:</strong> +1 408 422 8585</p>
                <p><strong>Email:</strong> rosy@caials.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;