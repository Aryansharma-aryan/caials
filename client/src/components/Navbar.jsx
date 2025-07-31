import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = ["Home", "Visa", "Coaching", "About", "Contact"];

  // Disable scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <header className="absolute top-2 left-0 w-full z-30 bg-transparent mt-10">
      <nav className="flex items-center justify-between px-6 md:px-16 py-6">
        {/* Logo */}
        <div className="flex items-center mt-5">
          <img
            src={logo}
            alt="Logo"
            className="w-65 md:w-66 h-auto object-contain drop-shadow-2xl"
          />
        </div>

        {/* Desktop Links - HIDDEN */}
        <ul className="hidden items-center space-x-10 font-medium text-lg text-white">
          {navLinks.map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                className="relative group"
              >
                <span className="transition group-hover:text-red-500">
                  {item}
                </span>
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu - RED COLOR WITH GLOW */}
        <button
          className="text-red-900 z-50 hover:text-red-400 transition-all duration-300 transform hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(239,68,68,0.8)] active:scale-95"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={32} /> : <Menu size={35} />}
        </button>

        {/* Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-72 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white shadow-2xl transform transition-transform duration-300 z-40 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } backdrop-blur-lg`} // Enhanced blur
        >
          <div className="flex flex-col h-full">
            {/* Shimmer Logo */}
            <div className="flex justify-center mt-6">
              <div className="w-36 h-12 shimmer rounded">
                <img
                  src={logo}
                  alt="Sidebar Logo"
                  className="w-36 object-contain drop-shadow-lg opacity-0"
                  onLoad={(e) => (e.target.style.opacity = 1)}
                />
              </div>
            </div>

            {/* Nav Links */}
            <ul className="flex flex-col space-y-6 mt-10 text-lg font-semibold px-6">
              {navLinks.map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                    className="block hover:text-red-400 transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Divider */}
            <div className="border-t border-gray-600 my-6 mx-6"></div>

            {/* Contact Info */}
            <div className="mt-auto px-6 pb-10 text-sm space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <span className="text-red-400">📞</span>
                <span>+1 408 422 8585</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-red-400">📧</span>
                <span>rosy@caials.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-md z-30"
            onClick={toggleMenu}
          ></div>
        )}
      </nav>
    </header>
  );
}
