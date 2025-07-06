import React, { useContext, useState } from "react";
import { FiMenu, FiX, FiHome, FiLogOut, FiShoppingCart, FiBook } from "react-icons/fi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Swal from "sweetalert2";
import { FaLaptopCode, FaUserTie } from "react-icons/fa";
import userImg from "../../src/assets/icons8-user-96.png";
import AuthContext from "../context/AuthContext";
import { BsGrid3X3Gap } from "react-icons/bs";
import logo from '../../src/assets/logo/logo.jpg'

const Navbar = () => {
  const { logOut, user, loading } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleSignOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Logged out successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => console.error("Logout Error:", error.message));
  };

  if (loading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-2 transition ${
              isActive ? "text-blue-400" : "hover:text-blue-300 text-white"
            }`
          }
        >
          <FiHome /> Home
        </NavLink>
      </li>
    
      <li>
        <NavLink
          to="/courses"
          className={({ isActive }) =>
            `flex items-center gap-2 transition ${
              isActive ? "text-blue-400" : "hover:text-blue-300 text-white"
            }`
          }
        >
          <FiBook /> Advisor Courses
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `flex items-center gap-2 transition ${
              isActive ? "text-blue-400" : "hover:text-blue-300 text-white"
            }`
          }
        >
          <FaUserTie /> About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `flex items-center gap-2 transition ${
              isActive ? "text-blue-400" : "hover:text-blue-300 text-white"
            }`
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="text-white fixed w-full z-50 bg-opacity-40 bg-[#152c54] backdrop-blur-md shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold flex items-center gap-1">
          <div className="flex items-center">
           <img src={logo} alt="" className="w-8 rounded-full"/>
          </div>
          <span>
            Advisor & <span className="text-blue-400">SquadXTech</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex gap-8">{navLinks}</ul>

        {/* User Avatar & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-4">
              <Link to="/cart" className="relative">
                <FiShoppingCart className="text-2xl" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Link>
              
              <div className="dropdown dropdown-end z-50">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div
                    title={user?.displayName || "User"}
                    className="w-10 rounded-full tooltip"
                    data-tip={user?.displayName}
                  >
                    <img
                      referrerPolicy="no-referrer"
                      src={user?.photoURL || userImg}
                      alt="User Profile"
                    />
                  </div>
                </div>
                <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-blue-500 rounded-box md:w-52 w-40 text-sm">
                  <li className="text-center font-semibold underline mb-2">
                    {user?.displayName || "Anonymous"}
                  </li>
                  <li>
                    <Link
                      to="/dashboard"
                      className="bg-white text-blue-900 py-1 rounded text-center flex items-center gap-2"
                    >
                      <BsGrid3X3Gap /> Dashboard
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleSignOut}
                      className="bg-white text-blue-900 py-1 mt-1 rounded flex items-center gap-2"
                    >
                      <FiLogOut /> Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <img
                src={userImg}
                alt="user"
                className="w-10 h-10 rounded-full"
              />
              <Link to="/login" className="btn btn-outline">
                Login
              </Link>
            </div>
          )}

          {/* Hamburger menu button for small screens */}
          <button
            className="lg:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-2/3 md:w-1/2  bg-opacity-60 backdrop-blur-md shadow-lg text-white z-50 lg:hidden"
          >
            <div className="flex justify-between items-center p-4 border-b border-gray-600">
              <span className="text-lg font-bold">Advisor & SquadXTech</span>
              <button onClick={toggleMenu}>
                <FiX size={24} />
              </button>
            </div>

            <ul className="flex flex-col bg-black bg-opacity-60 backdrop-blur-md shadow-lg gap-4 p-6">
              {navLinks}
              {user ? (
                <>
                 
                  <li>
                    <Link
                      to="/cart"
                      onClick={toggleMenu}
                      className="flex items-center gap-2"
                    >
                      <FiShoppingCart /> My Cart
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        toggleMenu();
                        handleSignOut();
                      }}
                      className="flex items-center gap-2"
                    >
                      <FiLogOut /> Logout
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <NavLink
                    to="/login"
                    onClick={toggleMenu}
                    className={({ isActive }) =>
                      `flex items-center gap-2 ${
                        isActive ? "text-blue-400" : "text-white"
                      }`
                    }
                  >
                    <FiLogOut /> Login
                  </NavLink>
                </li>
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;