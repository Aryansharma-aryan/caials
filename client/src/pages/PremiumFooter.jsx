import React from 'react';
import { 
  Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram, Youtube,
  Shield, Award, Users, FileText, ChevronRight, Heart, Star
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
    <footer className="bg-slate-900 text-white font-sans">

      {/* Achievement Bar */}
      <div className="bg-gradient-to-r from-blue-800 to-indigo-800 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {achievements.map((a, i) => (
            <div key={i} className="text-center animate-fadeIn">
              <div className="flex justify-center mb-3">
                <div className="p-4 bg-white bg-opacity-10 rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
                  <div className="text-blue-300">{a.icon}</div>
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-1">{a.count}</div>
              <div className="text-blue-200 text-sm">{a.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-4 gap-12">

          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              California Immigration Services
            </h3>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Professional Immigration & Naturalization services for individuals, families & corporate clients.
            </p>

            {/* Trust Badges */}
            <div className="flex space-x-4 mb-6">
              <div className="bg-white bg-opacity-10 p-3 rounded-lg flex-1 text-center hover:bg-opacity-20 transition">
                <Shield className="mx-auto mb-1 w-6 h-6 text-blue-400"/>
                <div className="text-xs text-blue-200">Registered & Bonded</div>
              </div>
              <div className="bg-white bg-opacity-10 p-3 rounded-lg flex-1 text-center hover:bg-opacity-20 transition">
                <Award className="mx-auto mb-1 w-6 h-6 text-purple-400"/>
                <div className="text-xs text-blue-200">Expert Consultants</div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-3">
              {socialLinks.map((s,i)=>(
                <a key={i} href={s.href} className="w-10 h-10 flex items-center justify-center bg-white bg-opacity-10 rounded-full hover:bg-opacity-20 transition">
                  <div className="text-blue-300 hover:text-white">{s.icon}</div>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">Our Services</h4>
            <div className="space-y-5">
              {services.map((s,i)=>(
                <div key={i}>
                  <h5 className="text-blue-300 font-semibold mb-2">{s.title}</h5>
                  <ul className="space-y-1">
                    {s.items.map((item, idx)=>(
                      <li key={idx} className="flex items-center group">
                        <ChevronRight className="w-3 h-3 text-blue-400 mr-2 group-hover:text-blue-200"/>
                        <a href="#" className="text-blue-100 text-sm hover:text-white transition">{item}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link,i)=>(
                <li key={i} className="flex items-center group">
                  <ChevronRight className="w-3 h-3 text-blue-400 mr-2 group-hover:text-blue-200"/>
                  <a href="#" className="text-blue-100 hover:text-white text-sm transition">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xl font-bold text-white mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 mr-3"/>
                <div className="text-blue-100 text-sm">
                  2450 Peralta Blvd, Suite #107<br/>Fremont, CA 94536
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-blue-400 mt-1 mr-3"/>
                <div>
                  <a href="tel:+14084228585" className="text-blue-100 hover:text-white text-sm">+1 408 422 8585</a>
                  <div className="text-xs text-blue-300">24/7 Support</div>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-blue-400 mt-1 mr-3"/>
                <div>
                  <a href="mailto:rosy@caials.com" className="text-blue-100 hover:text-white text-sm">rosy@caials.com</a>
                  <div className="text-xs text-blue-300">Response within 2 hours</div>
                </div>
              </div>

              {/* CTA Button */}
              <button className="mt-4 w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 py-3 font-semibold rounded-lg flex items-center justify-center transform hover:scale-105 transition">
                <Phone className="w-4 h-4 mr-2"/> Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-gradient-to-r from-blue-800 to-indigo-900 py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <h4 className="text-xl font-bold text-white">Stay Updated on Immigration News</h4>
          <div className="flex w-full md:w-auto">
            <input type="email" placeholder="Enter your email" className="px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-l-lg text-white placeholder-blue-200 focus:outline-none focus:bg-opacity-30 md:w-64"/>
            <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-r-lg font-semibold text-white transition hover:scale-105">Subscribe</button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-900 py-6 border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
          <p className="text-blue-200 text-sm flex items-center">
            © 2024 California Immigration Services <Heart className="w-4 h-4 text-red-400 mx-1"/> Made with care
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-blue-300 hover:text-white text-sm">Privacy Policy</a>
            <a href="#" className="text-blue-300 hover:text-white text-sm">Terms of Service</a>
            <a href="#" className="text-blue-300 hover:text-white text-sm">Disclaimer</a>
          </div>
        </div>
        <p className="text-blue-300 text-xs text-center mt-4">
          California Immigration Services is not a law firm. We are registered & bonded consultants specializing in Immigration & Naturalization paperwork.
        </p>
      </div>
    </footer>
  );
};

export default PremiumFooter;
