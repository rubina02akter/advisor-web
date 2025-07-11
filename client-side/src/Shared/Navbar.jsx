import { AnimatePresence, motion } from "framer-motion";
import React, { useContext, useState } from "react";
import { FiHome, FiLogOut, FiMenu, FiX } from "react-icons/fi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import userImg from "../../src/assets/icons8-user-96.png";
import logo from "../../src/assets/logo/logo.jpg";
import "../../src/CssStyle/navbar.css";
import AuthContext from "../context/AuthContext";

const Navbar = () => {
  const { signOutUser, user, loading } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOutUser()
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
      .catch((error) => console.error("signOutUser Error:", error.message));
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  if (loading) {
    return (
      <div className="h-[100vh] flex justify-center items-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }

  const links = (
    <>
      <li
        key="home"
        className=" "
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            `nav-btn ${
              isActive
                ? "text-white bg-gradient-to-br from-[#0322d4] via-[#22C3F2] to-[#22C3F2] border-0"
                : "text-[#22C3F2] border border-[#22C3F2] bg-transparent hover:bg-[#22C3F2]/20"
            }`
          }
        >
          <span className="bubble bubble-1"></span>
          <span className="bubble bubble-2"></span>
          <span className="bubble bubble-3"></span>
          <span className="btn-text">
            <FiHome /> Home
          </span>
        </NavLink>

      </li>
      <li
        key="menu"
        className=""
      >
        <NavLink
          to="/courses"
          className={({ isActive }) =>
            `nav-btn ${
              isActive
                ? "text-white bg-gradient-to-br from-[#0322d4] via-[#22C3F2] to-[#22C3F2]"
                : "text-[#22C3F2] border border-[#22C3F2] bg-transparent hover:bg-[#22C3F2]/20"
            }`
          }
        >
          <span className="bubble bubble-1"></span>
          <span className="bubble bubble-2"></span>
          <span className="bubble bubble-3"></span>
          <span className="btn-text">All Courses</span>
        </NavLink>
      </li>
      <li
        key="qn"
        className=""
      >
        <NavLink
          to="/add-course"
          className={({ isActive }) =>
            `nav-btn ${
              isActive
                ? "text-white bg-gradient-to-br from-[#0322d4] via-[#22C3F2] to-[#22C3F2]"
                : "text-[#22C3F2] border border-[#22C3F2] bg-transparent hover:bg-[#22C3F2]/20"
            }`
          }
        >
          <span className="bubble bubble-1"></span>
          <span className="bubble bubble-2"></span>
          <span className="bubble bubble-3"></span>
          <span className="btn-text">Add Course</span>
        </NavLink>
      </li>
      <li
        key="qnx"
        className=" "
      >
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `nav-btn ${
              isActive
                ? "text-white bg-gradient-to-br from-[#0322d4] via-[#22C3F2] to-[#22C3F2]"
                : "text-[#22C3F2] border border-[#22C3F2] bg-transparent hover:bg-[#22C3F2]/20"
            }`
          }
        >
          <span className="bubble bubble-1"></span>
          <span className="bubble bubble-2"></span>
          <span className="bubble bubble-3"></span>
          <span className="btn-text">Contact</span>
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="text-white fixed w-full z-50 bg-opacity-90 backdrop-blur-md shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-3">
        <Link to='/'> <div className="text-xl font-bold flex items-center">
          <img src={logo} alt="" className="w-12 h-12 rounded-full" />
         <Link to='/'>  <p className="text-[#22C3F2] font-medium">Advisors</p> </Link>
        </div>
        </Link>

        <ul className="hidden lg:flex gap-4">{links}</ul>

        <div className="flex gap-2">
          <div>
            {user ? (
              <div className="dropdown dropdown-end z-50">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div
                    title={user?.displayName || "User"}
                    className="w-10 rounded-full tooltip border-2 border-indigo-300"
                    data-tip={user?.displayName}
                  >
                    <img
                      referrerPolicy="no-referrer"
                      alt="User Profile Photo"
                      src={user?.photoURL || userImg}
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-indigo-800 rounded-box md:w-52 w-32 text-xs"
                >
                  <li className="text-center font-extrabold text-indigo-100 underline">
                    {user.displayName}
                  </li>
                  <li className="mt-2">
                    <button
                      onClick={handleSignOut}
                      className="bg-indigo-100 text-indigo-900 block text-center hover:bg-indigo-200"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="rounded-full flex items-center gap-2">
                <img
                  src={userImg}
                  alt="user"
                  className="w-10 h-10 rounded-full bg-indigo-100 p-1"
                />
              <div className="hidden lg:inline-flex">
                  <Link
                  className="hidden nav-btn  pt-2 lg:block btn btn-outline text-white font-extrabold bg-gradient-to-br from-[#22C3F2] via-[#22C3F2] to-[#22C3F2] hover:bg-blue-400 hover:text-white  mr-2"
                  to="/login"
                >
                  <span className="bubble bubble-1"></span>
                  <span className="bubble bubble-2"></span>
                  <span className="bubble bubble-3"></span>
                  <span className="btn-text font-bold">Login</span>

                </Link>
              </div>

                  {/* <Link>
                    <div className="w-40">
                      <button className=" nav-btn text-white bg-gradient-to-br from-[#0322d4] via-[#22C3F2] to-[#22C3F2]">

                            <span className="bubble bubble-1"></span>
                            <span className="bubble bubble-2"></span>
                            <span className="bubble bubble-3"></span>
                            <span className="btn-text">Login</span>

                      </button>
                    </div>
                  </Link> */}


              </div>
            )}
          </div>

          <button
            className="lg:hidden focus:outline-none text-indigo-100"
            onClick={toggleMenu}
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-full md:w-1/4  bg-transparent bg-opacity-95 backdrop-blur-lg text-white shadow-lg z-50 lg:hidden"
          >
            <div className="flex justify-between items-center p-4 border-b border-indigo-700">
              <span className="text-xl font-bold text-black">Menu</span>
              <button
                onClick={toggleMenu}
                className="text-black hover:text-white"
              >
                <FiX size={24} />
              </button>
            </div>
            <ul className="flex flex-col gap-4 p-6">
              {React.Children.toArray(links).map((link) =>
                React.cloneElement(link, {
                  className: `${link.props.className} w-full text-left`,
                })
              )}
              {user ? (
                <li>
                  <button
                    onClick={handleSignOut}
                    className="flex items-center gap-2 w-full text-left text-indigo-100 hover:text-white"
                  >
                    <FiLogOut /> Logout
                  </button>
                </li>
              ) : (
                <li>
                  <NavLink
                    to="/login"
                    className={({ isActive }) =>
                      `flex items-center gap-2 w-full text-left ${
                        isActive
                          ? "text-black font-bold"
                          : "text-[#22C2F2] hover:text-black"
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
