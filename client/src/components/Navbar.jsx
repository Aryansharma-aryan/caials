import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Phone, MessageCircle, Sparkles, ArrowRight } from "lucide-react";
import axios from "axios";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [pendingCount, setPendingCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  useEffect(() => {
    const fetchPendingCount = async () => {
      const token = localStorage.getItem("adminToken");
      setIsLoggedIn(!!token);

      if (!token) return;

      try {
        const res = await axios.get(
          "https://caials-ebon.onrender.com/api/getConsultation/pendingCount",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setPendingCount(res.data.count || 0);
      } catch (error) {
        console.error("Error fetching pending count:", error);
      }
    };

    fetchPendingCount();
  }, [isOpen]);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    setIsLoggedIn(false);
    navigate("/login");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name : "services" , path: "/services"},
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    {name : "Faq", path: "/faq"},
    !isLoggedIn && { name: "Login", path: "/login", color: "text-blue-400" },
    isLoggedIn && { name: "Logout", action: handleLogout, color: "text-red-400" },
    {
      name: "Admin Dashboard",
      path: "/admin",
      badge: pendingCount,
      color: "text-emerald-400",
    },
  ].filter(Boolean);

  return (
    <header className=" w-full z-50">
      
      <nav className="relative flex items-center justify-between px-6 md:px-16 py-6 bg-transparent">
        {/* Logo Section */}
        <div className="flex items-center">
          <div className="relative group">
            <div className="absolute -inset-2 "></div>
            <img
              src={logo}
              alt="Logo"
              className="relative w-44 md:w-56 h-auto object-contain drop-shadow-2xl transform group-hover:scale-105 transition-all duration-300"
            />
          </div>
        </div>

        {/* Center - Contact Us Badge */}
        <div className="hidden lg:flex items-center">
          <Link
            to="/consultancy"
            className="relative group overflow-hidden"
          >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 rounded-full animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
          {/* Badge Content */}
<div className="relative bg-gradient-to-r from-amber-500 to-rose-500 hover:from-yellow-400 hover:to-pink-500 text-white px-8 py-4 rounded-full shadow-2xl transform group-hover:scale-110 transition-all duration-300 flex items-center space-x-3">

  {/* Sparkle Animation */}
  <div className="absolute -top-1 -right-1">
    <Sparkles className="w-4 h-4 text-yellow-200 animate-bounce" />
  </div>

  <MessageCircle className="w-5 h-5 animate-pulse" />

  <span className="font-bold text-lg px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white shadow-md">
    Free Consultancy
  </span>

  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />

  {/* Floating particles */}
  <div className="absolute inset-0 overflow-hidden rounded-full">
    <div className="absolute top-2 left-4 w-1 h-1 bg-white rounded-full animate-ping"></div>
    <div className="absolute bottom-3 right-6 w-1 h-1 bg-yellow-100 rounded-full animate-ping delay-150"></div>
    <div className="absolute top-4 right-3 w-1 h-1 bg-pink-200 rounded-full animate-ping delay-300"></div>
  </div>
</div>

            
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-purple-500 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300 -z-10"></div>
          </Link>
        </div>

        {/* Right Side - Menu Button */}
        <div className="flex items-center space-x-4">
          {/* Contact Badge for Mobile */}
          <Link
            to="/consultancy"
            className="lg:hidden relative group"
          >
            <div className="bg-gradient-to-r from-rose-500 to-purple-600 text-white px-4 py-2 rounded-full shadow-lg transform group-hover:scale-105 transition-all duration-300 flex items-center space-x-2">
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm font-semibold">Consult</span>
            </div>
          </Link>

          {/* Premium Menu Button */}
          <button
className="relative group p-3 rounded-xl bg-gradient-to-r from-red-900 to-red-900 hover:from-red-400 hover:to-red-800 text-white shadow-2xl transform hover:scale-110 transition-all duration-300"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {/* Button Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-pink-600 rounded-xl blur opacity-50 group-hover:opacity-75 transition-opacity duration-300 -z-10"></div>
            
            {/* Icon with rotation animation */}
            <div className="relative transform transition-transform duration-300">
              {isOpen ? (
                <X size={28} className="drop-shadow-lg" />
              ) : (
                <Menu size={28} className="drop-shadow-lg" />
              )}
            </div>
            
            {/* Notification dot */}
            {pendingCount > 0 && !isOpen && (
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center animate-bounce">
                <span className="text-xs font-bold text-white">{pendingCount}</span>
              </div>
            )}
          </button>
        </div>

        {/* Premium Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-80 bg-gradient-to-br from-slate-800 via-slate-900 to-black text-white shadow-2xl transform transition-all duration-500 z-40 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
          <div className="absolute inset-0 backdrop-blur-md"></div>
          
          <div className="relative flex flex-col h-full">
            {/* Sidebar Header */}
            <div className="flex justify-center mt-8 mb-2">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-rose-500 to-purple-600 rounded-xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                <img
                  src={logo}
                  alt="Sidebar Logo"
                  className="relative w-32 object-contain drop-shadow-xl transform group-hover:scale-105 transition-all duration-300"
                />
              </div>
            </div>

            {/* Premium Divider */}
            <div className="mx-6 mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-rose-500 to-transparent"></div>
            </div>

            {/* Navigation Links */}
            <ul className="flex flex-col space-y-4 px-8">
              {navLinks.map((link) => (
                <li key={link.name} className="relative group">
                  {/* Link Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-purple-600/0 to-pink-600/0 group-hover:from-blue-600/20 group-hover:via-purple-600/20 group-hover:to-pink-600/20 rounded-xl transition-all duration-300"></div>
                  
                  {link.action ? (
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        link.action();
                      }}
                      className={`relative w-full text-left py-3 px-4 rounded-xl font-semibold text-lg hover:text-rose-300 transition-all duration-300 transform group-hover:translate-x-2 ${link.color || ""}`}
                    >
                      <span className="relative z-10">{link.name}</span>
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      className={`relative block py-3 px-4 rounded-xl font-semibold text-lg hover:text-rose-300 transition-all duration-300 transform group-hover:translate-x-2 ${link.color || ""}`}
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="relative z-10 flex items-center justify-between">
                        {link.name}
                        
                        {/* Enhanced Badge */}
                        {link.badge > 0 && (
                          <div className="relative">
                            <div className="absolute inset-0 bg-red-500 rounded-full animate-ping"></div>
                            <span className="relative bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg border border-red-400">
                              {link.badge} new
                            </span>
                          </div>
                        )}
                      </span>
                      
                      {/* Hover Arrow */}
                      <ArrowRight className="absolute right-4 top-1/2 transform -translate-y-1/2 w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Consultation CTA in Sidebar */}
            <div className="mx-8 mt-8">
              <Link
                to="/consultancy"
                className="relative group block overflow-hidden rounded-2xl"
                onClick={() => setIsOpen(false)}
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500 via-purple-500 to-blue-500 animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative bg-gradient-to-r from-rose-600 to-purple-600 group-hover:from-rose-500 group-hover:to-purple-500 p-6 text-center transform group-hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-center mb-3">
                    <div className="relative">
                      <MessageCircle className="w-8 h-8 animate-bounce" />
                      <div className="absolute -top-1 -right-1">
                        <Sparkles className="w-4 h-4 text-yellow-300 animate-spin" />
                      </div>
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2">Free Consultancy</h3>
                  <p className="text-sm text-blue-100 mb-3">Get expert immigration advice</p>
                  <div className="flex items-center justify-center text-sm font-semibold">
                    <span>Book Now</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
                
                {/* Floating particles */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute top-2 left-4 w-1 h-1 bg-white rounded-full animate-ping delay-100"></div>
                  <div className="absolute bottom-3 right-6 w-1 h-1 bg-blue-200 rounded-full animate-ping delay-300"></div>
                  <div className="absolute top-1/2 left-3 w-1 h-1 bg-purple-200 rounded-full animate-ping delay-500"></div>
                </div>
              </Link>
            </div>

            {/* Premium Divider */}
            <div className="mx-8 my-8">
              <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse"></div>
            </div>

            {/* Enhanced Footer */}
            <div className="mt-auto px-8 pb-8 space-y-4">
              <div className="bg-gradient-to-r from-slate-700/50 to-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-slate-600/30">
                <h4 className="text-sm font-semibold text-rose-300 mb-3 flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  Quick Contact
                </h4>
                <div className="space-y-2 text-sm text-slate-300">
                  <div className="flex items-center space-x-3 group cursor-pointer hover:text-white transition-colors duration-200">
                    <span className="text-rose-400">📞</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">+1 408 422 8585</span>
                  </div>
                  <div className="flex items-center space-x-3 group cursor-pointer hover:text-white transition-colors duration-200">
                    <span className="text-rose-400">📧</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">rosy@caials.com</span>
                  </div>
                </div>
              </div>
              
              {/* Premium Badge */}
              <div className="text-center">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-sm border border-yellow-400/30 rounded-full px-4 py-2">
                  <Sparkles className="w-4 h-4 text-yellow-400 animate-spin" />
                  <span className="text-xs font-semibold text-yellow-300">Premium Service</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-gradient-to-br from-black/80 via-blue-900/40 to-purple-900/40 backdrop-blur-lg z-30"
            onClick={toggleMenu}
          >
            {/* Animated background elements */}
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-purple-500/10 rounded-full animate-pulse delay-300"></div>
            <div className="absolute top-1/2 left-1/2 w-16 h-16 bg-pink-500/10 rounded-full animate-pulse delay-500"></div>
          </div>
        )}
      </nav>

      {/* Floating Contact Badge - Visible on larger screens */}
      <div className="hidden xl:block fixed bottom-8 right-8 z-50">
        <Link
          to="/consultancy"
          className="relative group"
        >
          {/* Pulsing Ring */}
          <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-purple-600 rounded-full animate-ping opacity-50"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-rose-500 to-purple-600 rounded-full animate-pulse opacity-30 scale-110"></div>
          
          {/* Main Button */}
          <div className="relative bg-gradient-to-r from-rose-600 to-purple-600 hover:from-rose-500 hover:to-purple-500 text-white p-4 rounded-full shadow-2xl transform group-hover:scale-110 transition-all duration-300 flex items-center space-x-3">
            <MessageCircle className="w-6 h-6 animate-bounce" />
            <span className="font-bold text-sm pr-2">Get Free Consultation</span>
            
            {/* Sparkle */}
            <div className="absolute -top-2 -right-2">
              <Sparkles className="w-5 h-5 text-yellow-300 animate-spin" />
            </div>
          </div>
        </Link>
      </div>
    </header>
  );
}