import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const visaServices = [
  {
    title: "H‑1B Visa Petitions",
    category: "Professional Work Visas",
    description: "Comprehensive H‑1B visa services for highly skilled professionals in specialty occupations. We handle the complete process from initial consultation to visa approval.",
    features: [
      "Labor Condition Application (LCA) filing",
      "Form I-129 petition preparation & submission",
      "H‑1B lottery registration and strategy",
      "RFE response preparation",
      "Extension and transfer assistance",
      "Consular processing support",
      "Path to permanent residency planning"
    ],
    processingTime: "4-8 months",
    successRate: "95%",
    icon: "💼",
    gradient: "from-emerald-400 to-teal-500"
  },
  {
    title: "F‑1 Student Visas",
    category: "Academic Visas",
    description: "Complete support for international students pursuing full-time academic programs in accredited U.S. institutions.",
    features: [
      "University selection guidance",
      "I-20 document processing",
      "SEVIS fee payment assistance",
      "Visa interview preparation",
      "OPT/STEM OPT applications",
      "CPT authorization support",
      "F‑1 to H‑1B transition planning"
    ],
    processingTime: "2-4 months",
    successRate: "92%",
    icon: "🎓",
    gradient: "from-amber-400 to-orange-500"
  },
  {
    title: "Green Card (Permanent Residency)",
    category: "Permanent Immigration",
    description: "Expert guidance through employment-based and family-based permanent residency processes with comprehensive legal support.",
    features: [
      "PERM Labor Certification",
      "I‑140 immigrant petition filing",
      "I‑485 adjustment of status",
      "National Interest Waiver (NIW)",
      "Family-based petitions (I‑130)",
      "Consular processing abroad",
      "Priority date tracking & strategy"
    ],
    processingTime: "12-36 months",
    successRate: "97%",
    icon: "🏠",
    gradient: "from-rose-400 to-pink-500"
  },
  {
    title: "U.S. Citizenship / Naturalization",
    category: "Citizenship Services",
    description: "Helping lawful permanent residents achieve U.S. citizenship through the naturalization process with expert preparation and support.",
    features: [
      "N‑400 application preparation",
      "Continuous residence documentation",
      "Good moral character evidence",
      "Citizenship test preparation",
      "Interview coaching and support",
      "Oath ceremony assistance",
      "Expedited processing when eligible"
    ],
    processingTime: "8-14 months",
    successRate: "98%",
    icon: "🇺🇸",
    gradient: "from-blue-400 to-indigo-500"
  },
  {
    title: "B‑1/B‑2 Visitor Visas",
    category: "Temporary Visas",
    description: "Professional assistance for business and tourism visitors to maximize approval chances and ensure smooth entry to the United States.",
    features: [
      "DS‑160 form completion",
      "Financial documentation review",
      "Strong ties evidence preparation",
      "Interview preparation & coaching",
      "Visa denial appeal assistance",
      "Multiple entry visa strategies",
      "Extension of stay applications"
    ],
    processingTime: "2-8 weeks",
    successRate: "89%",
    icon: "✈️",
    gradient: "from-cyan-400 to-blue-500"
  },
  {
    title: "L‑1 Intra-Company Transfers",
    category: "Executive Transfers",
    description: "Specialized services for multinational companies transferring executives, managers, and specialized knowledge employees to U.S. operations.",
    features: [
      "L‑1A manager/executive petitions",
      "L‑1B specialized knowledge cases",
      "Qualifying relationship documentation",
      "Blanket L petition applications",
      "Individual L‑1 petitions",
      "Extensions and amendments",
      "L‑1 to green card transition"
    ],
    processingTime: "3-6 months",
    successRate: "94%",
    icon: "🏢",
    gradient: "from-violet-400 to-purple-500"
  },
  {
    title: "O‑1 Visa for Extraordinary Ability",
    category: "Exceptional Talent",
    description: "Tailored representation for individuals with extraordinary ability in sciences, arts, education, business, or athletics seeking O‑1 classification.",
    features: [
      "Extraordinary ability evidence compilation",
      "Advisory opinion letters",
      "Peer recommendation letters",
      "Achievement documentation",
      "Media coverage portfolio",
      "O‑1A and O‑1B classifications",
      "Extensions and amendments"
    ],
    processingTime: "2-4 months",
    successRate: "91%",
    icon: "⭐",
    gradient: "from-yellow-400 to-amber-500"
  },
  {
    title: "EB‑5 Investor Green Card",
    category: "Investment Immigration",
    description: "Comprehensive EB‑5 investment immigration services for qualified investors seeking permanent residency through job-creating investments.",
    features: [
      "Regional Center project selection",
      "Direct investment structuring",
      "I‑526E petition preparation",
      "Source of funds documentation",
      "Job creation compliance",
      "I‑829 removal of conditions",
      "Investment monitoring & reporting"
    ],
    processingTime: "24-60 months",
    successRate: "93%",
    icon: "💰",
    gradient: "from-emerald-400 to-green-500"
  },
  {
    title: "J‑1 Exchange Visitor Programs",
    category: "Cultural Exchange",
    description: "Support for various J‑1 exchange visitor categories including researchers, professors, trainees, and cultural exchange participants.",
    features: [
      "DS‑2019 form processing",
      "Program sponsor coordination",
      "J‑1 waiver applications",
      "Academic and training programs",
      "Two-year home residency waivers",
      "Program extensions",
      "Status maintenance guidance"
    ],
    processingTime: "1-3 months",
    successRate: "96%",
    icon: "🌍",
    gradient: "from-teal-400 to-cyan-500"
  }
];

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ["All", ...new Set(visaServices.map(service => service.category))];
  
  const filteredServices = selectedCategory === "All" 
    ? visaServices 
    : visaServices.filter(service => service.category === selectedCategory);

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 py-20 px-6 md:px-20 relative overflow-hidden">
      
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-rose-400/30 to-pink-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-emerald-400/20 to-teal-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-r from-amber-400/25 to-orange-600/25 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-40 right-1/3 w-64 h-64 bg-gradient-to-r from-cyan-400/30 to-blue-600/30 rounded-full blur-3xl animate-pulse delay-700"></div>
        
        {/* Floating Particles */}
        <div className="absolute top-1/3 left-1/2 w-4 h-4 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full blur-sm animate-bounce delay-300"></div>
        <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full blur-sm animate-bounce delay-1000"></div>
        <div className="absolute top-1/4 right-1/3 w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full blur-sm animate-bounce delay-700"></div>
        
        {/* Mesh Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-900/10 via-transparent to-emerald-900/10"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-amber-900/10 via-transparent to-cyan-900/10"></div>
      </div>
      
      {/* Header Section */}
      <div className="relative z-10 text-center mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          className="mb-8"
        >
          <div className="inline-block p-1 rounded-full bg-gradient-to-r from-rose-500 via-emerald-500 via-amber-500 to-cyan-500 animate-pulse">
            <div className="bg-slate-950 rounded-full px-8 py-3">
              <span className="text-lg font-bold bg-gradient-to-r from-rose-400 to-emerald-400 bg-clip-text text-transparent">
                Premium Immigration Services
              </span>
            </div>
          </div>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, type: "spring", stiffness: 80 }}
          className="text-7xl md:text-8xl font-black mb-8 leading-tight"
        >
          <span className="bg-gradient-to-r from-rose-300 via-emerald-300 via-amber-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-2xl">
            Immigration
          </span>
          <br />
          <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
            Excellence
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light"
        >
          Transform your American dream into reality with our world-class immigration expertise. 
          <span className="bg-gradient-to-r from-rose-400 to-emerald-400 bg-clip-text text-transparent font-semibold"> 25+ years of proven success</span> and 
          <span className="bg-gradient-to-r from-amber-400 to-cyan-400 bg-clip-text text-transparent font-semibold"> exceptional client satisfaction.</span>
        </motion.p>
      </div>

      {/* Enhanced Category Filter */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="flex flex-wrap justify-center gap-6 mb-16 relative z-10"
      >
        {categories.map((category, index) => (
          <motion.button
            key={category}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
            onClick={() => setSelectedCategory(category)}
            className={`group relative px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-500 backdrop-blur-xl border-2 overflow-hidden ${
              selectedCategory === category
                ? 'bg-gradient-to-r from-rose-500/20 to-emerald-500/20 border-white/60 text-white shadow-2xl shadow-rose-500/25'
                : 'bg-slate-900/30 border-slate-700/50 text-slate-300 hover:bg-slate-800/40 hover:border-slate-600/60 hover:text-white'
            }`}
          >
            {/* Animated background for active state */}
            {selectedCategory === category && (
              <div className="absolute inset-0 bg-gradient-to-r from-rose-600/30 via-emerald-600/30 to-cyan-600/30 animate-pulse"></div>
            )}
            <span className="relative z-10">{category}</span>
            
            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-rose-400/0 to-emerald-400/0 group-hover:from-rose-400/10 group-hover:to-emerald-400/10 transition-all duration-500 rounded-2xl"></div>
          </motion.button>
        ))}
      </motion.div>

      {/* Enhanced Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 relative z-10">
        {filteredServices.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ 
              delay: 0.15 * index, 
              duration: 0.8,
              type: "spring",
              stiffness: 80
            }}
            onHoverStart={() => setHoveredCard(index)}
            onHoverEnd={() => setHoveredCard(null)}
            className="group relative h-full"
          >
            {/* Multi-layered Glow Effect */}
            <div className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-700 ${hoveredCard === index ? 'opacity-60 scale-105' : ''}`}></div>
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${service.gradient} rounded-3xl blur-lg opacity-0 group-hover:opacity-40 transition-all duration-500 ${hoveredCard === index ? 'opacity-40' : ''}`}></div>
            
            {/* Main Card with Glassmorphism */}
            <div className="relative backdrop-blur-2xl bg-gradient-to-br from-slate-900/60 to-slate-800/40 rounded-3xl border border-slate-700/50 p-8 h-full shadow-2xl group-hover:shadow-3xl transition-all duration-700 group-hover:border-slate-600/70 group-hover:bg-gradient-to-br group-hover:from-slate-900/80 group-hover:to-slate-800/60">
              
              {/* Floating Icon with Gradient Background */}
              <div className="relative mb-8">
                <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-2xl blur-lg opacity-50 group-hover:opacity-70 transition-all duration-500 scale-110`}></div>
                <div className={`relative w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-black/20 group-hover:scale-110 transition-all duration-500`}>
                  {service.icon}
                </div>
              </div>

              {/* Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-slate-100 transition-colors duration-300">
                  {service.title}
                </h3>
                <span className={`inline-block text-sm font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent border border-slate-600/50 px-4 py-2 rounded-full backdrop-blur-sm bg-slate-800/30`}>
                  {service.category}
                </span>
              </div>

              {/* Description */}
              <p className="text-slate-300 leading-relaxed mb-8 group-hover:text-slate-200 transition-colors duration-300">
                {service.description}
              </p>

              {/* Features with Enhanced Styling */}
              <div className="mb-8">
                <h4 className="text-white font-bold mb-4 flex items-center gap-3">
                  <div className={`w-3 h-3 bg-gradient-to-r ${service.gradient} rounded-full shadow-lg`}></div>
                  Key Services
                </h4>
                <ul className="space-y-3">
                  {service.features.slice(0, 4).map((feature, idx) => (
                    <motion.li 
                      key={idx} 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * idx }}
                      className="text-sm text-slate-300 flex items-center gap-3 group-hover:text-slate-200 transition-colors duration-300"
                    >
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full flex-shrink-0 shadow-sm`}></div>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                  {service.features.length > 4 && (
                    <li className={`text-sm font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent flex items-center gap-3`}>
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full flex-shrink-0`}></div>
                      +{service.features.length - 4} more specialized services
                    </li>
                  )}
                </ul>
              </div>

              {/* Enhanced Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 rounded-2xl p-4 border border-slate-600/30 backdrop-blur-sm group-hover:border-slate-500/50 transition-all duration-300">
                  <div className="text-sm text-slate-400 mb-1">Processing Time</div>
                  <div className="text-white font-bold text-lg">{service.processingTime}</div>
                </div>
                <div className="bg-gradient-to-br from-slate-800/60 to-slate-700/40 rounded-2xl p-4 border border-slate-600/30 backdrop-blur-sm group-hover:border-slate-500/50 transition-all duration-300">
                  <div className="text-sm text-slate-400 mb-1">Success Rate</div>
                  <div className="text-emerald-400 font-bold text-lg">{service.successRate}</div>
                </div>
              </div>

              {/* Premium CTA Button */}
              <button className={`w-full bg-gradient-to-r ${service.gradient} hover:shadow-2xl text-white font-bold py-4 px-6 rounded-2xl transition-all duration-500 transform hover:scale-105 shadow-lg group-hover:shadow-xl relative overflow-hidden`}>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Started
                  <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Premium Bottom CTA Section */}
      <motion.div 
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="mt-24 relative z-10"
      >
        <div className="relative overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-rose-600/20 via-emerald-600/20 via-amber-600/20 to-cyan-600/20 rounded-3xl blur-xl"></div>
          
          <div className="relative backdrop-blur-2xl bg-gradient-to-br from-slate-900/80 to-slate-800/60 rounded-3xl border border-slate-600/50 p-16 max-w-6xl mx-auto text-center shadow-2xl">
            {/* Decorative Elements */}
            <div className="absolute top-6 left-6 w-6 h-6 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full animate-pulse"></div>
            <div className="absolute top-6 right-6 w-4 h-4 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full animate-pulse delay-300"></div>
            <div className="absolute bottom-6 left-8 w-5 h-5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full animate-pulse delay-700"></div>
            <div className="absolute bottom-6 right-8 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-pulse delay-500"></div>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
                <span className="bg-gradient-to-r from-rose-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  Ready to Transform
                </span>
                <br />
                <span className="text-white">Your Future?</span>
              </h2>
              
              <p className="text-slate-300 text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                Join thousands of successful clients who trusted us with their immigration journey. 
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent font-semibold"> Your American dream starts here.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <button className="group relative bg-gradient-to-r from-rose-500 to-emerald-500 hover:from-rose-600 hover:to-emerald-600 text-white font-bold py-5 px-10 rounded-2xl transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-rose-500/25 overflow-hidden">
                  <span className="relative z-10 flex items-center gap-3 text-lg">
                    Schedule Free Consultation
                    <span className="transform group-hover:rotate-12 transition-transform duration-300">✨</span>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                </button>
                
                <button className="group relative border-2 border-slate-600/50 hover:border-emerald-400/50 text-white font-bold py-5 px-10 rounded-2xl transition-all duration-500 hover:bg-emerald-500/10 backdrop-blur-sm overflow-hidden">
                  <span className="relative z-10 flex items-center gap-3 text-lg">
                    📞 Call +1 408 422 8585
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/0 to-emerald-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}