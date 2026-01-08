import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const visaServices = [
  {
    title: "Family Immigration",
    category: "Family-Based Immigration",
    description: "Reunite with your loved ones through comprehensive family-based immigration services. We specialize in helping families navigate complex immigration processes to bring relatives to the United States.",
    detailedDescription: "Our family immigration services cover all aspects of bringing family members to the United States. We handle immediate relative petitions for spouses, parents, and unmarried children under 21 of U.S. citizens, as well as family preference categories for siblings and married children. Our experienced team guides you through the entire process, from filing the initial I-130 petition to consular processing or adjustment of status. We also provide support for K-1 fiancé visas, marriage-based green cards, and help with overcoming common challenges such as inadmissibility issues, lengthy processing times, and complex documentation requirements.",
    features: [
      "I-130 Petition for Alien Relative",
      "Marriage-based Green Card applications",
      "K-1 Fiancé visa processing",
      "Family preference category petitions",
      "Consular processing guidance",
      "Adjustment of status applications",
      "Inadmissibility waivers",
      "Document preparation and review"
    ],
    processingTime: "8-33 months",
    successRate: "96%",
    icon: "👨‍👩‍👧‍👦",
    gradient: "from-pink-400 to-rose-500"
  },
  {
    title: "Green Card Petition",
    category: "Permanent Immigration",
    description: "Expert guidance through employment-based and family-based permanent residency processes with comprehensive legal support.",
    detailedDescription: "Our green card petition services encompass all categories of permanent residency applications. For employment-based cases, we handle PERM Labor Certifications, National Interest Waivers, and extraordinary ability petitions. We guide you through the three-step process: labor certification (if required), I-140 immigrant petition, and adjustment of status or consular processing. Our team has extensive experience with priority date tracking, handling RFEs, and navigating complex immigration law changes. We also assist with family-based green cards, diversity visa applications, and special immigrant categories including religious workers and international broadcasters.",
    features: [
      "PERM Labor Certification",
      "I‑140 immigrant petition filing",
      "I‑485 adjustment of status",
      "National Interest Waiver (NIW)",
      "Family-based petitions (I‑130)",
      "Consular processing abroad",
      "Priority date tracking & strategy",
      "EB-1, EB-2, EB-3 category expertise"
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
    detailedDescription: "Our citizenship and naturalization services provide comprehensive support for lawful permanent residents seeking U.S. citizenship. We begin with a thorough eligibility assessment, reviewing your continuous residence, physical presence, and good moral character requirements. Our team prepares your N-400 application with meticulous attention to detail, ensuring all supporting documentation is complete and accurate. We provide extensive preparation for the naturalization test, including civics and English language components, and offer mock interview sessions to build your confidence. Our services extend to handling complex cases involving criminal history, tax issues, or extended absences from the United States.",
    features: [
      "N‑400 application preparation",
      "Continuous residence documentation",
      "Good moral character evidence",
      "Citizenship test preparation",
      "Interview coaching and support",
      "Oath ceremony assistance",
      "Expedited processing when eligible",
      "Complex case handling"
    ],
    processingTime: "8-14 months",
    successRate: "98%",
    icon: "🇺🇸",
    gradient: "from-blue-400 to-indigo-500"
  },
  {
    title: "Business / Visitor Visa",
    category: "Temporary Visas",
    description: "Professional assistance for business and tourism visitors to maximize approval chances and ensure smooth entry to the United States.",
    detailedDescription: "Our B-1/B-2 visitor visa services are designed to maximize your chances of approval for business or tourism visits to the United States. We provide comprehensive consultation to determine the most appropriate visa category for your travel purpose and help you prepare a compelling application. Our team assists with DS-160 form completion, schedules visa interviews, and provides thorough preparation including mock interview sessions. We help document your strong ties to your home country, demonstrate sufficient financial resources, and clearly establish the temporary nature of your visit. For business visitors, we assist with invitation letters, meeting schedules, and supporting documentation from U.S. sponsors.",
    features: [
      "DS‑160 form completion",
      "Financial documentation review",
      "Strong ties evidence preparation",
      "Interview preparation & coaching",
      "Visa denial appeal assistance",
      "Multiple entry visa strategies",
      "Extension of stay applications",
      "Business meeting documentation"
    ],
    processingTime: "2-8 weeks",
    successRate: "89%",
    icon: "✈️",
    gradient: "from-cyan-400 to-blue-500"
  },
  {
    title: "OCI Card / Indian Passport",
    category: "Overseas Citizen Services",
    description: "Comprehensive assistance for Overseas Citizen of India (OCI) card applications and Indian passport services for eligible individuals.",
    detailedDescription: "Our OCI card and Indian passport services cater to individuals of Indian origin and their family members seeking to obtain or renew these important documents. For OCI applications, we guide you through eligibility requirements, help gather necessary documentation including birth certificates, passports, and naturalization certificates, and ensure your application meets all current requirements. We assist with both new OCI applications and OCI card replacements due to passport changes. For Indian passport services, we help with renewals, new applications for minors, and address changes. Our team stays updated with the latest consular requirements and processing procedures to ensure smooth application processing.",
    features: [
      "OCI card new applications",
      "OCI card renewal and replacement",
      "Indian passport renewal services",
      "Document verification and preparation",
      "Consular appointment scheduling",
      "Application tracking and follow-up",
      "Emergency passport services",
      "Minor passport applications"
    ],
    processingTime: "3-6 months",
    successRate: "94%",
    icon: "🇮🇳",
    gradient: "from-orange-400 to-red-500"
  },
  {
    title: "India Visa Services",
    category: "India Travel",
    description: "Complete visa assistance for travel to India including tourist, business, medical, and employment visas with expert guidance.",
    detailedDescription: "Our India visa services provide comprehensive support for various types of Indian visas including tourist, business, medical, employment, and student visas. We assist with the online application process, document preparation, and appointment scheduling at Indian consulates. Our team is well-versed with the latest e-visa procedures and traditional visa applications. We help determine the most appropriate visa category based on your travel purpose, ensure all documentation meets current requirements, and provide guidance on visa validity periods and entry conditions. For business visas, we assist with invitation letters and company documentation, while for medical visas, we help with hospital letters and treatment documentation.",
    features: [
      "Tourist visa applications",
      "Business visa processing",
      "Medical visa assistance",
      "Employment visa services",
      "E-visa application support",
      "Document preparation and review",
      "Consular appointment coordination",
      "Visa extension guidance"
    ],
    processingTime: "1-4 weeks",
    successRate: "92%",
    icon: "🕉️",
    gradient: "from-amber-400 to-orange-500"
  },
  {
    title: "Student Visa (F-1)",
    category: "Academic Visas",
    description: "Complete support for international students pursuing full-time academic programs in accredited U.S. institutions.",
    detailedDescription: "Our F-1 student visa services provide comprehensive support for international students at every stage of their academic journey in the United States. We begin with university selection guidance, helping you choose institutions that match your academic goals and visa processing requirements. Our team assists with I-20 document processing, SEVIS fee payment, and DS-160 form completion. We provide thorough visa interview preparation, including mock interviews and coaching on common questions. Once in the U.S., we continue to support students with Optional Practical Training (OPT) applications, STEM OPT extensions, Curricular Practical Training (CPT) authorizations, and F-1 to H-1B transition planning.",
    features: [
      "University selection guidance",
      "I-20 document processing",
      "SEVIS fee payment assistance",
      "Visa interview preparation",
      "OPT/STEM OPT applications",
      "CPT authorization support",
      "F‑1 to H‑1B transition planning",
      "Status maintenance guidance"
    ],
    processingTime: "2-4 months",
    successRate: "92%",
    icon: "🎓",
    gradient: "from-amber-400 to-orange-500"
  },
  {
    title: "Religious Visa (R-1)",
    category: "Religious Worker",
    description: "Specialized services for religious workers seeking temporary entry to the United States for religious purposes and activities.",
    detailedDescription: "Our R-1 religious visa services are specifically designed for religious workers, ministers, and individuals engaged in religious occupations or vocations. We assist qualifying religious organizations in petitioning for their religious workers and help individuals navigate the complex requirements for R-1 classification. Our services include verification of the religious organization's tax-exempt status, documentation of the beneficiary's religious training and experience, and preparation of detailed job descriptions for religious positions. We also handle R-1 extensions, changes of status, and the transition from R-1 to permanent residency through special immigrant religious worker categories.",
    features: [
      "R-1 petition preparation and filing",
      "Religious organization qualification verification",
      "Religious worker background documentation",
      "Job description and duties preparation",
      "Tax-exempt status verification",
      "R-1 extensions and renewals",
      "Change of status applications",
      "Path to permanent residency guidance"
    ],
    processingTime: "3-6 months",
    successRate: "91%",
    icon: "⛪",
    gradient: "from-purple-400 to-violet-500"
  },
  {
    title: "Divorce Proceedings",
    category: "Family Law Services",
    description: "Compassionate legal support for divorce proceedings with attention to immigration status implications and family welfare.",
    detailedDescription: "Our divorce services provide sensitive and comprehensive legal support for individuals navigating the dissolution of marriage, particularly when immigration status is involved. We understand the unique challenges faced by immigrants during divorce proceedings, including concerns about conditional permanent residence, VAWA self-petitions, and the impact on pending immigration applications. Our team provides guidance on property division, child custody arrangements, spousal support, and the protection of immigration benefits. We work closely with family law attorneys and immigration specialists to ensure all aspects of your case are properly addressed, including the preparation of joint petitions to remove conditions on residence before divorce finalization.",
    features: [
      "Divorce petition filing and processing",
      "Immigration status protection strategies",
      "VAWA self-petition assistance",
      "Conditional residence issues",
      "Property division guidance",
      "Child custody arrangements",
      "Spousal support negotiations",
      "Collaborative legal approach"
    ],
    processingTime: "6-18 months",
    successRate: "88%",
    icon: "⚖️",
    gradient: "from-gray-400 to-slate-500"
  },
  {
    title: "Various Immigration Services",
    category: "Comprehensive Immigration",
    description: "Wide range of specialized immigration services including waivers, appeals, deportation defense, and complex case solutions.",
    detailedDescription: "Our comprehensive immigration services cover a broad spectrum of specialized cases and complex immigration matters. This includes inadmissibility waivers for various grounds such as unlawful presence, criminal convictions, and health-related issues. We handle immigration appeals before the Board of Immigration Appeals (BIA), federal court litigation, and deportation defense proceedings. Our team provides expertise in humanitarian cases including asylum, withholding of removal, and Convention Against Torture claims. We also assist with immigration consequences of criminal convictions, post-conviction relief, and complex family reunification cases involving multiple jurisdictions and legal challenges.",
    features: [
      "Inadmissibility waivers (I-601/I-601A)",
      "Immigration appeals and litigation",
      "Deportation defense representation",
      "Asylum and refugee cases",
      "Criminal immigration consequences",
      "Post-conviction relief coordination",
      "Humanitarian parole applications",
      "Complex multi-jurisdictional cases"
    ],
    processingTime: "Varies by case",
    successRate: "85%",
    icon: "🛡️",
    gradient: "from-indigo-400 to-purple-500"
  },
  {
    title: "H‑1B Visa Petitions",
    category: "Professional Work Visas",
    description: "Comprehensive H‑1B visa services for highly skilled professionals in specialty occupations. We handle the complete process from initial consultation to visa approval.",
    detailedDescription: "Our H-1B visa services represent the gold standard in professional work visa assistance. We provide end-to-end support for employers and employees navigating the complex H-1B process. Our services begin with eligibility assessment and job analysis to ensure the position qualifies as a specialty occupation. We handle Labor Condition Application (LCA) preparation and filing, ensuring compliance with prevailing wage requirements and working conditions. Our team prepares comprehensive I-129 petitions with detailed supporting evidence, including employer letters, educational credential evaluations, and expert opinion letters when needed. We also provide strategic guidance for the H-1B lottery system, premium processing decisions, and long-term career planning including the transition to permanent residency.",
    features: [
      "Labor Condition Application (LCA) filing",
      "Form I-129 petition preparation & submission",
      "H‑1B lottery registration and strategy",
      "RFE response preparation",
      "Extension and transfer assistance",
      "Consular processing support",
      "Path to permanent residency planning",
      "Premium processing guidance"
    ],
    processingTime: "4-8 months",
    successRate: "95%",
    icon: "💼",
    gradient: "from-emerald-400 to-teal-500"
  },
  {
    title: "U.K. Visa Services",
    category: "International Visa Services",
    description: "Expert assistance with United Kingdom visa applications including visitor, work, study, and settlement visas with comprehensive support.",
    detailedDescription: "Our U.K. visa services provide expert guidance for various types of British visas including visitor visas, work permits, student visas, spouse visas, and settlement applications. We assist with the complex UK immigration system, helping clients navigate the points-based system for work visas, Tier 4 student applications, and family reunion cases. Our team is experienced with UK visitor visa applications, ensuring proper documentation of travel purposes, financial capacity, and return intentions. For work-related applications, we assist with Skilled Worker visas, Global Talent visas, and Innovator visas. We also provide support for UK settlement applications, citizenship by naturalization, and complex cases involving previous visa refusals or immigration violations.",
    features: [
      "UK visitor visa applications",
      "Skilled Worker visa petitions",
      "Student visa (Tier 4) assistance",
      "Spouse and family reunion visas",
      "Settlement and ILR applications",
      "UK citizenship by naturalization",
      "Points-based system guidance",
      "Visa refusal appeals and reviews"
    ],
    processingTime: "3-12 weeks",
    successRate: "90%",
    icon: "🇬🇧",
    gradient: "from-blue-400 to-red-500"
  },
  {
    title: "Canada Visa & PR",
    category: "Canadian Immigration",
    description: "Comprehensive Canadian immigration services including visitor visas, work permits, study permits, and permanent residency applications.",
    detailedDescription: "Our Canadian immigration services cover the full spectrum of Canada's immigration programs. We specialize in the Express Entry system, including Federal Skilled Worker, Canadian Experience Class, and Provincial Nominee Programs (PNP). Our team provides comprehensive support for permanent residency applications, from initial eligibility assessment through landing and settlement. We assist with temporary residence applications including visitor visas, work permits, and study permits. Our services extend to family class sponsorship, Quebec immigration programs, and Canadian citizenship applications. We also provide guidance on maintaining permanent resident status, meeting residency obligations, and addressing complex cases involving criminal inadmissibility or medical issues.",
    features: [
      "Express Entry system navigation",
      "Provincial Nominee Program (PNP)",
      "Family class sponsorship",
      "Work permits and LMIAs",
      "Study permits and DLI selection",
      "Visitor visa applications",
      "Canadian citizenship services",
      "Immigration appeals and reviews"
    ],
    processingTime: "6-18 months",
    successRate: "93%",
    icon: "🇨🇦",
    gradient: "from-red-400 to-red-600"
  }
];export default function Services() {
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
          <span className="bg-gradient-to-r from-rose-400 to-emerald-400 bg-clip-text text-transparent font-semibold"> 13+ years of proven success</span> and 
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
