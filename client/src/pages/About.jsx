import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useInView, useMotionValue, useSpring } from "framer-motion";

const stats = [
  { number: "13+", label: "Years of Excellence", icon: "🏆", description: "Serving clients since 2013", color: "from-amber-400 to-orange-500", targetValue: 13, suffix: "+" },
  { number: "15,000+", label: "Visas Processed", icon: "📋", description: "Successfully approved applications", color: "from-blue-400 to-cyan-500", targetValue: 15000, suffix: "+" },
  { number: "96%", label: "Success Rate", icon: "✅", description: "Industry-leading approval rate", color: "from-emerald-400 to-teal-500", targetValue: 96, suffix: "%" },
  { number: "30+", label: "Countries Served", icon: "🌍", description: "Global clientele", color: "from-violet-400 to-purple-500", targetValue: 30, suffix: "+" },
  { number: "24/7", label: "Client Support", icon: "📞", description: "Round-the-clock assistance", color: "from-rose-400 to-pink-500", targetValue: 24, suffix: "/7" },
  { number: "500+", label: "Corporate Clients", icon: "🏢", description: "Trusted by businesses", color: "from-indigo-400 to-blue-500", targetValue: 500, suffix: "+" }
];

const whyChooseUs = [
  {
    icon: "🎯",
    title: "Proven Expertise",
    description: "13+ years of specialized immigration law experience with deep knowledge of USCIS procedures and requirements.",
    gradient: "from-amber-500/20 to-orange-500/20"
  },
  {
    icon: "⚡",
    title: "Fast Processing",
    description: "Streamlined processes and premium filing services ensure your applications are submitted quickly and accurately.",
    gradient: "from-yellow-500/20 to-amber-500/20"
  },
  {
    icon: "💼",
    title: "Corporate Solutions",
    description: "Comprehensive immigration support for businesses, from startups to Fortune 500 companies.",
    gradient: "from-blue-500/20 to-indigo-500/20"
  },
  {
    icon: "🛡️",
    title: "100% Confidential",
    description: "Your personal and business information is protected with bank-level security and strict confidentiality.",
    gradient: "from-emerald-500/20 to-teal-500/20"
  },
  {
    icon: "📱",
    title: "Digital Platform",
    description: "Advanced online portal for case tracking, document uploads, and real-time communication with our team.",
    gradient: "from-cyan-500/20 to-blue-500/20"
  },
  {
    icon: "🌟",
    title: "Personalized Service",
    description: "Every case receives individual attention with customized strategies tailored to your specific situation.",
    gradient: "from-violet-500/20 to-purple-500/20"
  },
  {
    icon: "💰",
    title: "Transparent Pricing",
    description: "No hidden fees. Clear, upfront pricing with flexible payment plans available for all services.",
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    icon: "🎓",
    title: "Certified Professionals",
    description: "Our team includes licensed attorneys, certified consultants, and USCIS-accredited representatives.",
    gradient: "from-indigo-500/20 to-blue-500/20"
  },
  {
    icon: "📊",
    title: "Real-Time Updates",
    description: "Stay informed with instant notifications about your case status and USCIS communications.",
    gradient: "from-pink-500/20 to-rose-500/20"
  },
  {
    icon: "🔄",
    title: "End-to-End Support",
    description: "From initial consultation to final approval, we handle every aspect of your immigration journey.",
    gradient: "from-purple-500/20 to-violet-500/20"
  },
  {
    icon: "🌐",
    title: "Multilingual Team",
    description: "Fluent in English, Spanish, Mandarin, Hindi, and other languages to serve diverse communities.",
    gradient: "from-teal-500/20 to-cyan-500/20"
  },
  {
    icon: "⏱️",
    title: "Emergency Services",
    description: "Expedited processing available for urgent cases with 24-hour emergency consultation services.",
    gradient: "from-red-500/20 to-rose-500/20"
  }
];

// Counter component with count-up animation
function AnimatedCounter({ targetValue, suffix, duration = 2 }) {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0
  });
  
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(targetValue);
    }
  }, [isInView, motionValue, targetValue]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      setDisplayValue(Math.floor(latest));
    });
    return unsubscribe;
  }, [springValue]);

  const formatNumber = (num) => {
    if (num >= 1000) {
      return num.toLocaleString();
    }
    return num.toString();
  };

  return (
    <span ref={ref} className="font-mono">
      {formatNumber(displayValue)}{suffix}
    </span>
  );
}

export default function About() {
  const [hoveredStat, setHoveredStat] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-violet-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-600/10 to-blue-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-6 md:px-20">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-6xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block p-2 rounded-2xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-white/10 mb-8"
          >
            <span className="text-sm font-semibold text-blue-300 px-4 py-2 rounded-xl bg-white/5">
              ✨ Trusted Immigration & Visa Experts in California
            </span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight">
            About CAIALS
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed font-light">
            Transforming dreams into reality through expert immigration services. 
            <span className="text-blue-300"> Trusted by thousands</span>, 
            <span className="text-purple-300"> proven by results</span>.
          </p>
        </motion.div>
      </section>

      {/* Stats Section with Count-Up Effect */}
      <section className="relative z-10 py-20 px-6 md:px-20">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Excellence in Numbers
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Our track record speaks for itself — delivering exceptional results through unwavering commitment to excellence
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                onHoverStart={() => setHoveredStat(index)}
                onHoverEnd={() => setHoveredStat(null)}
                className="group relative"
              >
                <AnimatePresence>
                  {hoveredStat === index && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-3xl blur-xl opacity-60`}
                    />
                  )}
                </AnimatePresence>
                
                <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/10 to-white/5 rounded-3xl border border-white/20 p-8 text-center hover:border-white/40 transition-all duration-500 group-hover:transform group-hover:scale-105">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-black text-white mb-3">
                    <AnimatedCounter 
                      targetValue={stat.targetValue} 
                      suffix={stat.suffix}
                      duration={2.5}
                    />
                  </div>
                  <div className="text-sm font-bold text-blue-300 mb-2 uppercase tracking-wider">
                    {stat.label}
                  </div>
                  <div className="text-xs text-slate-400 leading-relaxed">
                    {stat.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="relative z-10 py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/2 rounded-3xl border border-white/10 p-12 md:p-16 relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/30 to-purple-600/30 rounded-3xl"></div>
            </div>
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="inline-block p-2 rounded-2xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-white/10 mb-6">
                    <span className="text-sm font-semibold text-blue-300 px-4 py-2 rounded-xl bg-white/5">
                      🎯 Our Purpose
                    </span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                    Bridging Dreams with Reality
                  </h2>
                  
                  <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                    <p className="font-light">
                      To provide <span className="text-blue-300 font-medium">exceptional immigration services</span> that transform lives and build bridges between dreams and reality. We believe every person deserves the opportunity to achieve their American dream through expert guidance, compassionate support, and unwavering dedication.
                    </p>
                    <p className="font-light">
                      Since <span className="text-purple-300 font-medium">2013</span>, we've been committed to delivering personalized, results-driven immigration solutions that exceed expectations and create lasting positive impact in our clients' lives.
                    </p>
                  </div>
                </motion.div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="space-y-8"
              >
                <div className="backdrop-blur-lg bg-gradient-to-br from-blue-500/10 to-blue-600/5 rounded-3xl p-8 border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-4">🎯</div>
                    <h3 className="text-2xl font-bold text-blue-300">Our Vision</h3>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    To be the most trusted immigration services in California, known for our integrity, expertise, and transformative client success stories.
                  </p>
                </div>
                
                <div className="backdrop-blur-lg bg-gradient-to-br from-purple-500/10 to-purple-600/5 rounded-3xl p-8 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-4">⚖️</div>
                    <h3 className="text-2xl font-bold text-purple-300">Our Values</h3>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Excellence, integrity, compassion, and innovation guide every decision we make and every service we provide to our valued clients.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative z-10 py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-20"
          >
            <div className="inline-block p-2 rounded-2xl bg-gradient-to-r from-violet-600/20 to-pink-600/20 backdrop-blur-sm border border-white/10 mb-8">
              <span className="text-sm font-semibold text-violet-300 px-4 py-2 rounded-xl bg-white/5">
                🌟 What Sets Us Apart
              </span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
              Why Choose CAIALS?
            </h2>
            
            <p className="text-slate-400 text-xl max-w-4xl mx-auto leading-relaxed">
              Discover what sets us apart as California's leading immigration services and why thousands of clients trust us.
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                onHoverStart={() => setHoveredFeature(index)}
                onHoverEnd={() => setHoveredFeature(null)}
                className="group relative"
              >
                <AnimatePresence>
                  {hoveredFeature === index && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-pink-600 rounded-3xl blur-xl opacity-50"
                    />
                  )}
                </AnimatePresence>
                
                <div className={`relative backdrop-blur-xl bg-gradient-to-br ${item.gradient} rounded-3xl border border-white/20 p-8 h-full hover:border-white/40 transition-all duration-500 group-hover:transform group-hover:scale-105`}>
                  <div className="text-4xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed text-sm font-light">
                    {item.description}
                  </p>
                  
                  {/* Subtle bottom accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-3xl"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Bottom spacer */}
      <div className="h-20"></div>
    </div>
  );
}
