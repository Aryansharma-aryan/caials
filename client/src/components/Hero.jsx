import { useEffect, useState, useCallback, useMemo } from "react";
import { Globe, Users, CreditCard, GraduationCap, Building, Heart, Scale, Map, Plane, FileText } from "lucide-react";

// Mock images for demo - replace with your actual images
const HeroImg1 = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&h=1080&fit=crop";
const HeroImg2 = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop";
const HeroImg3 = "https://images.unsplash.com/photo-1486312338219-ce68e2c6b64d?w=1920&h=1080&fit=crop";

// 🚀 Pre-load images
const preloadImages = (imageUrls) => {
  imageUrls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
};

const images = [HeroImg1, HeroImg2, HeroImg3];

const imageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

const transition = { duration: 1 };

// Services data based on the card image
const services = [
  { icon: Users, title: "Family Immigration", description: "Reunite with loved ones" },
  { icon: CreditCard, title: "Green Card Petition", description: "Permanent residency solutions" },
  { icon: FileText, title: "Citizenship", description: "Become a US citizen" },
  { icon: Building, title: "Business/Visitor Visa", description: "Travel & business permits" },
  { icon: Globe, title: "OCI Card/Indian Passport", description: "Dual citizenship services" },
  { icon: GraduationCap, title: "Student Visa", description: "Education abroad support" },
  { icon: Heart, title: "Religious Visa", description: "Faith-based immigration" },
  { icon: Scale, title: "Divorce", description: "Legal separation assistance" },
  { icon: Map, title: "UK Visa", description: "United Kingdom immigration" },
  { icon: Plane, title: "Canada Visa & PR", description: "Canadian immigration services" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

const cardVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 15
    }
  }
};

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload images
  useEffect(() => {
    preloadImages(images);
    const timer = setTimeout(() => setImagesLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, []);

  // Carousel interval
  useEffect(() => {
    if (!imagesLoaded) return;
    const interval = setInterval(goToNext, 4000);
    return () => clearInterval(interval);
  }, [imagesLoaded, goToNext]);

  const backgroundStyle = useMemo(() => ({
    backgroundImage: `url(${images[currentIndex]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    filter: "blur(4px)",
    transform: "scale(1.05)",
    willChange: 'opacity',
    backfaceVisibility: 'hidden',
  }), [currentIndex]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      
      {/* Navbar placeholder - uncomment your actual Navbar */}
      {/* <div className="absolute top-14 left-0 w-full z-20">
        <Navbar />
      </div> */}

      {/* 🔄 Background Carousel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          variants={imageVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={transition}
          className="absolute inset-0 z-0"
          style={backgroundStyle}
        />
      </AnimatePresence>

      {/* 🌈 Enhanced Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-black/70 via-black/50 to-transparent" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

      {/* ✨ Main Content Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Hero Content */}
        <div className="flex-1 flex items-center px-6 md:px-16 lg:px-28 pt-20">
          <motion.div 
            className="max-w-4xl text-white space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            
            {/* Brand Badge */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
            >
              <Globe className="w-5 h-5 text-orange-400 mr-2" />
              <span className="text-sm font-medium">California Immigration Services Inc.</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight"
            >
              <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                Your Gateway to{" "}
              </span>
              <br />
              <TypeAnimation
                sequence={[
                  "Visa Success.",
                  2000,
                  "New Beginnings.",
                  2000,
                  "Global Dreams.",
                  2000,
                  "Legal Excellence.",
                  2000,
                ]}
                speed={50}
                wrapper="span"
                repeat={Infinity}
                cursor={false}
                className="text-white"
                style={{ minHeight: '1.2em', display: 'inline-block' }}
              />
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-200 max-w-3xl leading-relaxed"
            >
              <span className="text-white font-semibold">
                Trusted immigration experts
              </span>{" "}
              helping you navigate complex visa processes with{" "}
              <span className="text-orange-400 font-bold">confidence</span> and{" "}
              <span className="text-orange-400 font-bold">success</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a
                href="../consultancy"
                className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white rounded-xl shadow-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 overflow-hidden inline-block text-center"
              >
                <span className="relative z-10">Get Free Consultation</span>
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300" />
              </a>

              <button className="px-8 py-4 border-2 border-white/30 text-white rounded-xl font-bold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm">
                View Services
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Services Section */}
        <motion.div 
          className="px-6 md:px-16 lg:px-28 pb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Services Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="text-orange-400">Premium Services</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Comprehensive immigration solutions tailored to your unique journey
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
            variants={containerVariants}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                {/* Card Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-2xl backdrop-blur-md border border-white/20 group-hover:border-orange-400/50 transition-all duration-300" />
                
                {/* Card Content */}
                <div className="relative p-6 text-center space-y-4">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-orange-400 to-red-500 rounded-xl shadow-lg group-hover:shadow-orange-400/25 transition-all duration-300">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-white font-bold text-sm group-hover:text-orange-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 text-xs group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400/0 to-red-500/0 group-hover:from-orange-400/10 group-hover:to-red-500/10 rounded-2xl transition-all duration-300" />
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-12"
          >
            <p className="text-gray-300 mb-6">Ready to start your immigration journey?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-all duration-300 backdrop-blur-sm border border-white/20">
                Schedule Consultation
              </button>
              <span className="text-gray-400">•</span>
              <a href="http://www.caials.com" className="text-orange-400 hover:text-orange-300 font-medium transition-colors duration-300">
                Visit www.caials.com
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Loading indicator */}
        {!imagesLoaded && (
          <div className="absolute top-4 right-4 z-20 text-white/50 text-xs">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 border-2 border-white/20 border-t-white/60 rounded-full animate-spin" />
              <span>Loading...</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}