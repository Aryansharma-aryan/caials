import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const countries = [
  { 
    flag: "🇮🇳", 
    name: "India", 
    services: ["H-1B Visa", "Student Visa", "Green Card"], 
    gradient: "from-orange-500/20 to-green-500/20",
    accent: "from-orange-500 to-green-500",
    clients: "2,500+",
    successRate: "98%"
  },
  { 
    flag: "🇲🇽", 
    name: "Mexico", 
    services: ["Adjustment of Status", "Naturalization"], 
    gradient: "from-green-500/20 to-red-500/20",
    accent: "from-green-500 to-red-500",
    clients: "1,200+",
    successRate: "96%"
  },
  { 
    flag: "🇨🇦", 
    name: "Canada", 
    services: ["Business Immigration", "L-1 Visa"], 
    gradient: "from-red-500/20 to-blue-500/20",
    accent: "from-red-500 to-blue-500",
    clients: "950+",
    successRate: "99%"
  },
  { 
    flag: "🇦🇺", 
    name: "Australia", 
    services: ["EB-5 Investment", "Family Sponsorship"], 
    gradient: "from-blue-500/20 to-red-500/20",
    accent: "from-blue-500 to-red-500",
    clients: "650+",
    successRate: "98%"
  },
  { 
    flag: "🇬🇧", 
    name: "United Kingdom", 
    services: ["Employment-Based Visas", "O-1 Visa"], 
    gradient: "from-blue-500/20 to-red-500/20",
    accent: "from-blue-500 to-red-500",
    clients: "800+",
    successRate: "97%"
  },
  { 
    flag: "🇩🇪", 
    name: "Germany", 
    services: ["Work Visa", "J-1 Exchange Visa"], 
    gradient: "from-slate-600/20 to-red-500/20",
    accent: "from-slate-600 to-red-500",
    clients: "500+",
    successRate: "98%"
  },
  { 
    flag: "🇧🇷", 
    name: "Brazil", 
    services: ["Student Visa", "Citizenship"], 
    gradient: "from-green-500/20 to-yellow-500/20",
    accent: "from-green-500 to-yellow-500",
    clients: "450+",
    successRate: "96%"
  },
];

export default function Countries() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [windowDimensions, setWindowDimensions] = useState({ width: 1200, height: 800 });
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Set initial window dimensions
    if (typeof window !== 'undefined') {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });

      const handleResize = () => {
        setWindowDimensions({
          width: window.innerWidth,
          height: window.innerHeight
        });
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        duration: 0.6
      }
    }
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-black via-gray-950 to-black">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-gray-800/10 to-gray-700/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-gray-700/10 to-gray-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-gradient-to-br from-gray-800/5 to-gray-700/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-gray-400/30 to-gray-300/30 rounded-full"
            initial={{
              x: Math.random() * windowDimensions.width,
              y: Math.random() * windowDimensions.height,
            }}
            animate={{
              y: [null, -50, windowDimensions.height + 50],
              opacity: [0, 0.6, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 8 + 12,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="relative z-10 px-6 md:px-20 py-24">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block p-2 rounded-2xl bg-gradient-to-r from-gray-800/40 to-gray-700/40 backdrop-blur-sm border border-white/10 mb-8"
          >
            <span className="text-sm font-semibold text-gray-300 px-6 py-2 rounded-xl bg-black/30">
              🌍 Global Immigration Services
            </span>
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Countries We Serve
          </motion.h1>

          <motion.p
            className="text-gray-300 text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Connecting dreams across borders with <span className="text-white font-medium">expert immigration services</span> tailored to your unique journey. 
            <span className="text-gray-200 font-medium"> Trusted worldwide</span>, <span className="text-gray-100 font-medium">proven results</span>.
          </motion.p>
        </motion.div>

        {/* Statistics Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="backdrop-blur-xl bg-gradient-to-r from-black/40 to-gray-900/40 rounded-2xl border border-white/20 p-8 mb-16 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-black text-white mb-2">15,000+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Cases Handled</div>
            </div>
            <div>
              <div className="text-3xl font-black text-gray-200 mb-2">50+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Countries</div>
            </div>
            <div>
              <div className="text-3xl font-black text-gray-100 mb-2">96%</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-black text-gray-300 mb-2">15+</div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">Years Experience</div>
            </div>
          </div>
        </motion.div>

        {/* Country Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8 max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {countries.map((country, index) => (
            <motion.div
              key={`${country.name}-${index}`}
              variants={cardVariants}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 25 }
              }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              onClick={() => setSelectedCountry(selectedCountry === index ? null : index)}
              className="group relative cursor-pointer"
            >
              {/* Hover Glow Effect */}
              <AnimatePresence>
                {hoveredCard === index && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className={`absolute -inset-1 bg-gradient-to-r ${country.accent} rounded-3xl blur-xl opacity-25`}
                  />
                )}
              </AnimatePresence>

              {/* Card Container */}
              <div className={`relative h-full backdrop-blur-xl bg-gradient-to-br from-black/60 to-gray-900/40 rounded-3xl border border-white/20 overflow-hidden transition-all duration-500 hover:border-white/40 ${selectedCountry === index ? 'ring-2 ring-white/50' : ''}`}>
                
                {/* Background Gradient Overlay */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${country.gradient}`}></div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute top-0 -left-full h-full w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent transform rotate-12 group-hover:left-full transition-all duration-1000"></div>
                </div>

                {/* Card Content */}
                <div className="relative z-10 p-8">
                  {/* Flag and Stats Header */}
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      className="text-5xl"
                      whileHover={{ scale: 1.2, rotate: 8 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {country.flag}
                    </motion.div>
                    
                    <div className="text-right">
                      <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Success Rate</div>
                      <div className={`text-lg font-bold bg-gradient-to-r ${country.accent} bg-clip-text text-transparent`}>
                        {country.successRate}
                      </div>
                    </div>
                  </div>

                  {/* Country Name */}
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gray-200 transition-colors duration-300">
                    {country.name}
                  </h3>

                  {/* Client Count */}
                  <div className="mb-6">
                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-1">Clients Served</div>
                    <div className="text-xl font-bold text-gray-300">{country.clients}</div>
                  </div>

                  {/* Services */}
                  <div className="space-y-3 mb-6">
                    <div className="text-xs text-gray-400 uppercase tracking-wider mb-3">Specializations</div>
                    {country.services.map((service, idx) => (
                      <motion.div
                        key={`${service}-${idx}`}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * idx }}
                        className="flex items-center text-gray-300 text-sm group-hover:text-white transition-colors duration-300"
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${country.accent} rounded-full mr-3 group-hover:scale-125 transition-transform duration-300`}></div>
                        <span className="font-medium">{service}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <motion.div
                    className="absolute bottom-6 right-6"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: hoveredCard === index ? 1 : 0,
                      opacity: hoveredCard === index ? 1 : 0
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className={`w-10 h-10 bg-gradient-to-r ${country.accent} rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </motion.div>

                  {/* Bottom Accent Line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${country.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <motion.div
            className="inline-block p-2 rounded-2xl bg-gradient-to-r from-gray-800/40 to-gray-700/40 backdrop-blur-sm border border-white/10 mb-8"
          >
            <span className="text-sm font-semibold text-gray-300 px-4 py-2 rounded-xl bg-black/30">
              🚀 Ready to Start Your Journey?
            </span>
          </motion.div>

          <motion.button
            className="group relative inline-flex items-center px-12 py-6 text-lg font-bold text-white rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm border border-white/20"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={() => alert('Contact form would open here')}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-700/30 to-gray-600/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 scale-110"></div>
            
            <span className="relative flex items-center">
              Get Your Free Consultation
              <motion.svg
                className="w-6 h-6 ml-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </span>
          </motion.button>

          <p className="text-gray-400 text-sm mt-6 max-w-md mx-auto">
            Connect with our immigration experts and discover the best path forward for your unique situation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
