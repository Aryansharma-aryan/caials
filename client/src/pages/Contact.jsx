import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Calendar,
  Shield,
  Award,
  Globe,
  FileText,
  Navigation,
  Building
} from 'lucide-react';

const Contact = () => {
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
      iconColor: "text-indigo-600",
      coordinates: "37.5485,-121.9886"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Tracy Office",
      content: "1660 W Linne Road, Unit J24",
      subContent: "Tracy, CA 95376",
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
      coordinates: "37.7396,-121.4252"
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
            Visit Our Offices
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Find us at our convenient locations in Fremont and Tracy. Our expert immigration consultants are ready to assist you with personalized guidance.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Interactive Map Section */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
              <h2 className="text-2xl font-bold mb-2 flex items-center">
                <Navigation className="w-6 h-6 mr-2" />
                Our Locations
              </h2>
              <p className="text-blue-100">Find directions to our offices</p>
            </div>
            
            {/* Map Container */}
            <div className="relative h-80 bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100">
              {/* Decorative Map Background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full overflow-hidden">
                  {/* Grid Pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
                      {Array.from({ length: 48 }, (_, i) => (
                        <div key={i} className="border border-blue-300"></div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Location Markers */}
                  <div className="absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="w-8 h-8 bg-red-500 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold whitespace-nowrap">
                        Fremont Office
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute top-2/3 right-1/3 transform translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div className="w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold whitespace-nowrap">
                        Tracy Office
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-16 h-16 bg-white bg-opacity-30 rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-white bg-opacity-20 rounded-full"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white bg-opacity-10 rounded-full"></div>
                </div>
              </div>
              
              {/* Map Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-30"></div>
              
              {/* Map Controls */}
              <div className="absolute top-4 right-4 flex flex-col space-y-2">
                <button className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <span className="text-gray-600 font-bold">+</span>
                </button>
                <button className="w-10 h-10 bg-white rounded-lg shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <span className="text-gray-600 font-bold">-</span>
                </button>
              </div>
            </div>
            
            {/* Map Footer */}
            <div className="p-4 bg-gray-50 border-t">
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  California, USA
                </span>
                <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center">
                  <Navigation className="w-4 h-4 mr-1" />
                  Get Directions
                </button>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-start">
                    <div className={`p-3 ${info.bgColor} rounded-lg mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}>
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

            {/* Office Hours */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-start">
                <div className="p-3 bg-orange-100 rounded-lg mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
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
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white shadow-xl">
              <h3 className="text-xl font-bold mb-4">Need Immediate Assistance?</h3>
              <div className="space-y-3">
                <button className="w-full bg-white text-blue-600 font-semibold py-3 px-4 rounded-lg hover:bg-blue-50 transition-all duration-200 flex items-center justify-center hover:scale-105 transform shadow-lg">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: +1 408 422 8585
                </button>
                <button className="w-full border-2 border-white text-white font-semibold py-3 px-4 rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200 flex items-center justify-center hover:scale-105 transform shadow-lg">
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Office Locations Detail Cards */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {officeLocations.map((location, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 group">
              <div className={`h-2 bg-gradient-to-r ${index === 0 ? 'from-blue-500 to-indigo-500' : 'from-green-500 to-emerald-500'}`}></div>
              
              <div className="p-8">
                <div className="flex items-start mb-6">
                  <div className={`p-4 ${location.bgColor} rounded-xl mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    <div className={location.iconColor}>
                      <Building className="w-8 h-8" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{location.title}</h3>
                    <div className="space-y-2">
                      <p className="text-gray-700 flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                        {location.content}
                      </p>
                      <p className="text-gray-600 ml-6">{location.subContent}</p>
                      <p className="text-gray-700 flex items-center">
                        <Phone className="w-4 h-4 mr-2 text-gray-500" />
                        +1 408 422 8585
                      </p>
                      <p className="text-gray-700 flex items-center">
                        <Mail className="w-4 h-4 mr-2 text-gray-500" />
                        rosy@caials.com
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <button className={`py-3 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center hover:scale-105 transform shadow-md ${
                    index === 0 
                      ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                      : 'bg-green-500 hover:bg-green-600 text-white'
                  }`}>
                    <Navigation className="w-4 h-4 mr-2" />
                    Directions
                  </button>
                  <button className="py-3 px-4 rounded-lg border-2 border-gray-300 text-gray-700 font-medium hover:border-gray-400 hover:bg-gray-50 transition-all duration-200 flex items-center justify-center hover:scale-105 transform">
                    <Phone className="w-4 h-4 mr-2" />
                    Call
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <div className="text-blue-600">
                  {feature.icon}
                </div>
              </div>
              <h3 className="font-bold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Enhanced Contact Banner */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl shadow-2xl overflow-hidden">
          <div className="relative p-8">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="grid grid-cols-6 grid-rows-4 h-full w-full">
                {Array.from({ length: 24 }, (_, i) => (
                  <div key={i} className="border border-white"></div>
                ))}
              </div>
            </div>
            
            <div className="relative z-10 text-center text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to Start Your Immigration Journey?</h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Contact our experienced immigration consultants today for personalized assistance with your case.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-30 transition-all duration-300">
                  <Phone className="w-8 h-8 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Call Us</h4>
                  <p className="text-blue-100">+1 408 422 8585</p>
                </div>
                
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-30 transition-all duration-300">
                  <Mail className="w-8 h-8 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Email Us</h4>
                  <p className="text-blue-100">rosy@caials.com</p>
                </div>
                
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-30 transition-all duration-300">
                  <Clock className="w-8 h-8 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Office Hours</h4>
                  <p className="text-blue-100">Mon-Sat: 10AM-6PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;