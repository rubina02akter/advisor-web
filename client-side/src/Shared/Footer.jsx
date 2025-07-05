import React, { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import footerImg from "../../src/assets/4790263_49081.jpg"; // Update with your logo path
import bg from "../../src/assets/4790263_49081.jpg"; // Update with your background image
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed with: ${email}`);
      setEmail("");
    }
  };

  return (
    <div>
      {/* Main Footer Section */}
      <div
        className="relative bg-cover bg-center py-16 text-white"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>

        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start w-11/12 mx-auto gap-8 relative">
          {/* Footer Logo and Description */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            <img
              src={footerImg}
              alt="Advisor & SquadXTech Logo"
              className="w-32 md:w-48 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            />
            <div className="text-lg font-bold">Advisor & SquadXTech</div>
            <p className="text-sm max-w-md mx-auto lg:mx-0">
              Your trusted partners in technology solutions and educational services. 
              We provide cutting-edge courses and premium tech products to help you 
              stay ahead in the digital world.
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <nav>
              <h6 className="text-lg font-semibold mb-4">Quick Links</h6>
              <Link to="/" className="link link-hover block mb-2 hover:text-blue-500">
                Home
              </Link>
              <Link to="/courses" className="link link-hover block mb-2 hover:text-blue-500">
                Courses
              </Link>
              <Link to="/products" className="link link-hover block mb-2 hover:text-blue-500">
                Products
              </Link>
              <Link to="/about" className="link link-hover block mb-2 hover:text-blue-500">
                About Us
              </Link>
              <Link to="/contact" className="link link-hover block mb-2 hover:text-blue-500">
                Contact
              </Link>
            </nav>

            <nav>
              <h6 className="text-lg font-semibold mb-4">Support</h6>
              <Link to="/faq" className="link link-hover block mb-2 hover:text-blue-500">
                FAQ
              </Link>
              <Link to="/privacy" className="link link-hover block mb-2 hover:text-blue-500">
                Privacy Policy
              </Link>
              <Link to="/terms" className="link link-hover block mb-2 hover:text-blue-500">
                Terms of Service
              </Link>
              <Link to="/shipping" className="link link-hover block mb-2 hover:text-blue-500">
                Shipping Policy
              </Link>
              <Link to="/returns" className="link link-hover block mb-2 hover:text-blue-500">
                Returns & Refunds
              </Link>
            </nav>
          </div>

          {/* Contact and Social Media Section */}
          <div className="flex flex-col items-center lg:items-end gap-6">
            <div className="text-center lg:text-right">
              <h6 className="text-lg font-semibold mb-4">Contact Us</h6>
              <p className="text-sm mb-2">Email: info@advisor-squadxtech.com</p>
              <p className="text-sm mb-2">Phone: +880 XXXX XXXXXX</p>
              <p className="text-sm">Address: Your Business Address Here</p>
            </div>
            
            <div className="flex gap-6">
              <a target="_blank" rel="noopener noreferrer" href="#">
                <FaFacebook className="text-3xl text-blue-700 hover:text-blue-500" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="#">
                <FaTwitter className="text-3xl text-sky-400 hover:text-sky-300" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="#">
                <FaLinkedin className="text-3xl text-blue-600 hover:text-blue-400" />
              </a>
              <a target="_blank" rel="noopener noreferrer" href="#">
                <FaInstagram className="text-3xl text-red-400 hover:text-red-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="relative mt-12">
          <div className="w-10/12 mx-auto border-b border-white opacity-30"></div>
          <div className="text-center p-4 mt-4">
            <p className="text-xs md:text-sm font-light opacity-80">
              Copyright © {new Date().getFullYear()} - All rights reserved by 
              Advisor & SquadXTech | Developed by Your Company Name
            </p>
          </div>
          <div className="w-10/12 mx-auto border-b border-white opacity-30"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;