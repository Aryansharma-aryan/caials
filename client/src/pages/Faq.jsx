import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Users, FileText, Clock, Shield, Globe, Award } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqData = [
    {
      category: "General Services",
      icon: <Globe className="w-5 h-5" />,
      questions: [
        {
          question: "What immigration services does California Immigration Services offer?",
          answer: "We provide comprehensive immigration and naturalization services including US Citizenship through Naturalization, Family Sponsored Green Cards, Employment Based Green Cards, H-1B Visa Petitions, Student Visas (F-1), Religious Worker Visas (R-1), Exchange Visitor Visas (J-1), Intra-Company Transferee Visas (L-1), Extraordinary Ability Visas (O-1), Tourist/Visitor Visas, and Indian Passport/Visa/OCI services."
        },
        {
          question: "Who can use your services?",
          answer: "Our services cater to individuals, family members, and corporate clients of all sizes - from small businesses to large corporations seeking assistance with immigrant and non-immigrant visa petitions and green card filings."
        },
        {
          question: "Are you registered and bonded?",
          answer: "Yes, California Immigration Center is a registered and bonded Immigration Consultants' firm, ensuring professional and secure handling of your immigration matters."
        }
      ]
    },
    {
      category: "Process & Documentation",
      icon: <FileText className="w-5 h-5" />,
      questions: [
        {
          question: "How do you handle the documentation process?",
          answer: "We maintain end-to-end documentation accuracy for every immigration application. Our experienced consultants carefully prepare and edit all documents before submitting them directly to the United States Citizenship & Immigration Service (USCIS) for processing."
        },
        {
          question: "What is your pre-application service?",
          answer: "Our pre-application service involves gathering crucial information from clients and conducting thorough consultations. This step is essential for ensuring a smooth immigration application process and proper documentation preparation."
        },
        {
          question: "Can you file applications directly with USCIS?",
          answer: "Yes, our professional immigration team includes document assistants who can directly file your petition with the United States Citizenship & Immigration Services for processing."
        }
      ]
    },
    {
      category: "Expertise & Experience",
      icon: <Award className="w-5 h-5" />,
      questions: [
        {
          question: "What makes your consultants qualified?",
          answer: "Our team consists of highly qualified and experienced immigration consultants with extensive knowledge of the certified immigration consultant process. Their expertise ensures skillful processing of applications with maximum success rates."
        },
        {
          question: "How do you ensure accuracy in applications?",
          answer: "We treat every application as a new case with utmost importance and swiftness. Even small negligence can cause negative results, so our professionals maintain accuracy throughout the entire documentation and filing process."
        },
        {
          question: "What additional services do you provide?",
          answer: "Beyond immigration services, our team also offers assistance with notary services, wills, power of attorney, agreements, and other legal document preparation needs."
        }
      ]
    },
    {
      category: "Client Support",
      icon: <Users className="w-5 h-5" />,
      questions: [
        {
          question: "What type of support can I expect?",
          answer: "We provide end-to-end assistance during the immigration process with a professional yet personal approach. Our highly experienced team makes services available 24/7, and we handle the entire application process so you can focus on other relocation and official work."
        },
        {
          question: "How quickly can you process applications?",
          answer: "We provide quick solutions through expert immigration consultants who ensure timely and precise immigration applications. What might take an ordinary person excess time, our experts handle efficiently with proper timing and accuracy."
        },
        {
          question: "Do you provide education about the visa process?",
          answer: "Yes, when you choose us as your immigration consultant, we start by educating you about visa processing and determining the type of visa you are eligible for, ensuring you understand the entire process."
        }
      ]
    },
    {
      category: "Specific Visa Types",
      icon: <Shield className="w-5 h-5" />,
      questions: [
        {
          question: "What is an H-1B visa and how can you help?",
          answer: "The H-1B visa is designed to allow U.S. employers to recruit and employ foreign professionals. We assist with H-1B visa petitions, handling all documentation and filing requirements to maximize your chances of approval."
        },
        {
          question: "Can you help with family-sponsored green cards?",
          answer: "Yes, we assist with Family Sponsored Green Cards for immediate relatives, which refers to parents, spouses, and unmarried children of U.S. citizens, helping families reunite through proper immigration channels."
        },
        {
          question: "What employment-based green card services do you offer?",
          answer: "We handle Employment Based Green Card applications under the Immigration and Nationality Act, which provides 140,000 employment-based immigrant visas annually for qualified professionals seeking permanent residence."
        },
        {
          question: "Do you assist with student visas?",
          answer: "Yes, we help with F-1 student visas, which are non-immigrant visas issued by U.S. Consulates abroad to international students seeking to study in the United States."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Expert Immigration & Naturalization Services
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {faqData.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            {/* Category Header */}
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white mr-4">
                {category.icon}
              </div>
              <h2 className="text-2xl font-bold text-gray-800">{category.category}</h2>
            </div>

            {/* Questions */}
            <div className="space-y-4">
              {category.questions.map((item, questionIndex) => {
                const itemKey = `${categoryIndex}-${questionIndex}`;
                const isOpen = openItems[itemKey];
                
                return (
                  <div
                    key={itemKey}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
                  >
                    <button
                      onClick={() => toggleItem(itemKey)}
                      className="w-full px-6 py-5 text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-800 pr-4">
                          {item.question}
                        </h3>
                        <div className="flex-shrink-0">
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-blue-600 transform transition-transform duration-200" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-blue-600 transform transition-transform duration-200" />
                          )}
                        </div>
                      </div>
                    </button>
                    
                    {isOpen && (
                      <div className="px-6 pb-5">
                        <div className="pt-2 border-t border-gray-100">
                          <p className="text-gray-700 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Contact Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
          <p className="text-blue-100 mb-6 text-lg">
            Our experienced immigration consultants are available 24/7 to assist you with your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 shadow-lg">
              Schedule Consultation
            </button>
            <button className="border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200">
              Contact Us Today
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">Registered & Bonded</h4>
            <p className="text-gray-600 text-sm">Licensed immigration consultants you can trust</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-purple-600" />
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">24/7 Support</h4>
            <p className="text-gray-600 text-sm">Round-the-clock assistance for your needs</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-6 h-6 text-indigo-600" />
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">Expert Team</h4>
            <p className="text-gray-600 text-sm">Highly qualified immigration professionals</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;