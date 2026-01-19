import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Globe,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  Shield,
  Award,
  Users,
  FileText,
  ChevronRight,
  Heart,
  Star
} from 'lucide-react';

const PremiumFooter = () => {
  const quickLinks = [
    'US Citizenship Through Naturalization',
    'Family Sponsored Green Card',
    'Employment Based Green Card',
    'H-1B Visa Petitions',
    'Student Visas (F-1)',
    'Tourist/Visitor Visas'
  ];

  const companyLinks = [
    'About Us',
    'Our Team',
    'Success Stories',
    'FAQ',
    'Blog',
    'Resources'
  ];

  const legalLinks = [
    'Privacy Policy',
    'Terms of Service',
    'Disclaimer',
    'USCIS Guidelines',
    'Immigration Forms',
    'Document Checklist'
  ];

  const services = [
    {
      title: 'Individual Services',
      items: [
        'Green Card Applications',
        'Visa Processing',
        'Citizenship Applications',
        'Family Reunification'
      ]
    },
    {
      title: 'Corporate Services',
      items: [
        'H-1B Petitions',
        'L-1 Transfers',
        'O-1 Visas',
        'Immigration Compliance'
      ]
    }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', label: 'Facebook' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
    { icon: <Youtube className="w-5 h-5" />, href: '#', label: 'YouTube' }
  ];

  const achievements = [
    { icon: <Users className="w-6 h-6" />, count: '5000+', label: 'Happy Clients' },
    { icon: <Award className="w-6 h-6" />, count: '15+', label: 'Years Experience' },
    { icon: <FileText className="w-6 h-6" />, count: '98%', label: 'Success Rate' },
    { icon: <Star className="w-6 h-6" />, count: '4.9', label: 'Client Rating' }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      {/* Achievement Bar */}
      <div className="bg-gradient-to-r from-blue-800 to-indigo-800 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2">
                  <div className="p-3 bg-white bg-opacity-20 rounded-full">
                    <div className="text-blue-200">
                      {achievement.icon}
                    </div>
                  </div>
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {achievement.count}
                </div>
                <div className="text-blue-200 text-sm">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                  California Immigration Services
                </h3>
                <p className="text-blue-100 leading-relaxed mb-6">
                  Your registered and bonded Immigration Consultants offering professional Immigration & Naturalization services to individuals & their family members, as well as catering to Corporate Sector.
                </p>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white bg-opacity-10 rounded-lg p-3 text-center">
                  <Shield className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                  <div className="text-xs text-blue-200">Registered & Bonded</div>
                </div>
                <div className="bg-white bg-opacity-10 rounded-lg p-3 text-center">
                  <Award className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                  <div className="text-xs text-blue-200">Expert Consultants</div>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-white bg-opacity-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <div className="text-blue-300 group-hover:text-white transition-colors duration-300">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="lg:col-span-1">
              <h4 className="text-xl font-bold text-white mb-6">Our Services</h4>
              <div className="space-y-6">
                {services.map((serviceGroup, index) => (
                  <div key={index}>
                    <h5 className="text-blue-300 font-semibold mb-3">{serviceGroup.title}</h5>
                    <ul className="space-y-2">
                      {serviceGroup.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <a
                            href="#"
                            className="text-blue-100 hover:text-white flex items-center group transition-colors duration-200"
                          >
                            <ChevronRight className="w-3 h-3 mr-2 text-blue-400 group-hover:text-blue-300" />
                            <span className="text-sm">{item}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1">
              <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
              <div className="space-y-6">
                <div>
                  <h5 className="text-blue-300 font-semibold mb-3">Popular Services</h5>
                  <ul className="space-y-2">
                    {quickLinks.slice(0, 4).map((link, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className="text-blue-100 hover:text-white flex items-center group transition-colors duration-200"
                        >
                          <ChevronRight className="w-3 h-3 mr-2 text-blue-400 group-hover:text-blue-300" />
                          <span className="text-sm">{link}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="text-blue-300 font-semibold mb-3">Company</h5>
                  <ul className="space-y-2">
                    {companyLinks.slice(0, 4).map((link, index) => (
                      <li key={index}>
                        <a
                          href="#"
                          className="text-blue-100 hover:text-white flex items-center group transition-colors duration-200"
                        >
                          <ChevronRight className="w-3 h-3 mr-2 text-blue-400 group-hover:text-blue-300" />
                          <span className="text-sm">{link}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h4 className="text-xl font-bold text-white mb-6">Contact Information</h4>
              
              {/* Office Locations */}
              <div className="space-y-6">
                <div className="bg-white bg-opacity-5 rounded-lg p-4">
                  <h5 className="text-blue-300 font-semibold mb-3 flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    Fremont Office (Head Office)
                  </h5>
                  <p className="text-blue-100 text-sm mb-2">
                    2450 Peralta Blvd, Suit #107<br />Fremont, CA 94536
                  </p>
                </div>

                <div className="bg-white bg-opacity-5 rounded-lg p-4">
                  <h5 className="text-blue-300 font-semibold mb-3 flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    Tracy Office
                  </h5>
                  <p className="text-blue-100 text-sm mb-2">
                    1660 W Linne Road, Unit J24<br />Tracy, CA 95376
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
                    <div>
                      <a href="tel:+14084228585" className="text-blue-100 hover:text-white transition-colors">
                        +1 408 422 8585
                      </a>
                      <div className="text-xs text-blue-300">Available 24/7</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Mail className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
                    <div>
                      <a href="mailto:rosy@caials.com" className="text-blue-100 hover:text-white transition-colors">
                        rosy@caials.com
                      </a>
                      <div className="text-xs text-blue-300">Response within 2 hours</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-blue-400 mr-3 flex-shrink-0" />
                    <div>
                      <span className="text-blue-100">Mon - Fri: 9:00 AM - 6:00 PM</span>
                      <div className="text-xs text-blue-300">Emergency consultations available</div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="mt-6">
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                    <Phone className="w-4 h-4 inline mr-2" />
                    Schedule Consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-800 to-indigo-800 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="text-xl font-bold text-white mb-2">Stay Updated on Immigration News</h4>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-l-lg text-white placeholder-blue-200 focus:outline-none focus:bg-opacity-30 flex-1 md:w-64"
              />
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-6 py-3 rounded-r-lg font-semibold text-white transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-900 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <p className="text-blue-200 text-sm">
                © 2024 California Immigration Services. All rights reserved.
              </p>
              <Heart className="w-4 h-4 text-red-400 mx-2" />
              <p className="text-blue-200 text-sm">Made with care for our immigrant community</p>
            </div>
            
            <div className="flex items-center space-x-6">
              {legalLinks.slice(0, 3).map((link, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-blue-300 hover:text-white text-sm transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          
          <div className="mt-4 pt-4 border-t border-blue-800">
            <p className="text-blue-300 text-xs text-center">
              <strong>Disclaimer:</strong> California Immigration Services is not a law firm. We are registered and bonded immigration consultants. 
              We specialize in the preparation of Immigration and Naturalization paperwork and documents. 
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default PremiumFooter;
