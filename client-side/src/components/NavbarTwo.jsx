import { useState } from "react";
import {
  FiChevronDown,
  FiChevronUp,
  FiMenu,
  FiSearch,
  FiX
} from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const NavbarTwo = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      path: "/",
      dropdown: false,
    },
    {
      name: "Course",
      path: "/courses",
      dropdown: true,
      items: [
        { name: "All Courses", path: "/courses" },
        { name: "Development", path: "/courses/development" },
        { name: "Business", path: "/courses/business" },
        { name: "Design", path: "/courses/design" },
      ],
    },
    {
      name: "Shop",
      path: "/shop",
      dropdown: true,
      items: [
        { name: "All Products", path: "/shop" },
        { name: "Books", path: "/shop/books" },
        { name: "Materials", path: "/shop/materials" },
      ],
    },
    {
      name: "Pages",
      path: "/pages",
      dropdown: true,
      items: [
        { name: "About Us", path: "/about" },
        { name: "Contact", path: "/contact" },
        { name: "FAQ", path: "/faq" },
        { name: "Blog", path: "/blog" },
      ],
    },
  ];

  const toggleDropdown = (itemName) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const searchTerm = e.target.search.value;
    if (searchTerm) {
      navigate(`/search?q=${searchTerm}`);
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Bar */}
        <div className="flex justify-between items-center py-3 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Client: In hit now.</span>
          </div>

          <div className="flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative hidden md:block">
              <input
                type="text"
                name="search"
                placeholder="Search courses..."
                className="pl-4 pr-10 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                type="submit"
                className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
              >
                <FiSearch className="h-4 w-4" />
              </button>
            </form>

            <div className="flex space-x-2">
              <Link
                to="/login"
                className="px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="px-3 py-1.5 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-gray-900">
            GainTheir
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                <div
                  className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 cursor-pointer transition-colors"
                  onClick={() =>
                    item.dropdown
                      ? toggleDropdown(item.name)
                      : navigate(item.path)
                  }
                >
                  <span className="font-medium">{item.name}</span>
                  {item.dropdown &&
                    (activeDropdown === item.name ? (
                      <FiChevronUp className="h-4 w-4" />
                    ) : (
                      <FiChevronDown className="h-4 w-4" />
                    ))}
                </div>

                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-500 hover:text-gray-900 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <FiX className="h-6 w-6" />
            ) : (
              <FiMenu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4">
            <form onSubmit={handleSearch} className="mb-4 relative">
              <input
                type="text"
                name="search"
                placeholder="Search courses..."
                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                type="submit"
                className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
              >
                <FiSearch className="h-4 w-4" />
              </button>
            </form>

            <div className="space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  <div
                    className="flex justify-between items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer"
                    onClick={() =>
                      item.dropdown
                        ? toggleDropdown(item.name)
                        : (navigate(item.path), setIsMobileMenuOpen(false))
                    }
                  >
                    <span className="font-medium">{item.name}</span>
                    {item.dropdown &&
                      (activeDropdown === item.name ? (
                        <FiChevronUp className="h-4 w-4" />
                      ) : (
                        <FiChevronDown className="h-4 w-4" />
                      ))}
                  </div>

                  {item.dropdown && activeDropdown === item.name && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default NavbarTwo;



















// const Navbar = () => {
//   const { logOut, user, loading } = useContext(AuthContext);
//   const [isOpen, setIsOpen] = useState(false);
//   const navigate = useNavigate();

//   const toggleMenu = () => setIsOpen(!isOpen);

//   const handleSignOut = () => {
//     logOut()
//       .then(() => {
//         Swal.fire({
//           position: "top-end",
//           icon: "success",
//           title: "Logged out successfully.",
//           showConfirmButton: false,
//           timer: 1500,
//         });
//         navigate("/");
//       })
//       .catch((error) => console.error("Logout Error:", error.message));
//   };

//   if (loading) {
//     return (
//       <div className="h-screen flex justify-center items-center">
//         <span className="loading loading-ring loading-lg"></span>
//       </div>
//     );
//   }

//   const navLinks = (
//     <>
//       <li>
//         <NavLink
//           to="/"
//           className={({ isActive }) =>
//             `flex items-center gap-2 transition ${
//               isActive ? "text-[#22C2F2]" : "hover:text-[#22C2F2] text-white"
//             }`
//           }
//         >
//           <FiHome /> Home
//         </NavLink>
//       </li>
    
//       <li>
//         <NavLink
//           to="/courses"
//           className={({ isActive }) =>
//             `flex items-center gap-2 transition ${
//               isActive ? "text-[#22C2F2]" : "hover:text-[#22C2F2] text-white"
//             }`
//           }
//         >
//           <FiBook /> Advisor Courses
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           to="/about"
//           className={({ isActive }) =>
//             `flex items-center gap-2 transition ${
//               isActive ? "text-[#22C2F2]" : "hover:text-[#22C2F2] text-white"
//             }`
//           }
//         >
//           <FaUserTie /> About Us
//         </NavLink>
//       </li>
//       <li>
//         <NavLink
//           to="/contact"
//           className={({ isActive }) =>
//             `flex items-center gap-2 transition ${
//               isActive ? "text-[#22C2F2]" : "hover:text-[#22C2F2] text-white"
//             }`
//           }
//         >
//           Contact
//         </NavLink>
//       </li>
//     </>
//   );

//   return (
//   <div>
//       <nav className="text-white fixed w-full z-50 bg-opacity-40 bg-[#152c54] backdrop-blur-md shadow-md">
//       <div className="container mx-auto flex justify-between items-center p-4">
//         {/* Logo */}
//         <Link to="/" className="text-xl font-bold flex items-center gap-1">
//           <div className="flex items-center">
//            <img src={logo} alt="" className="w-8 rounded-full"/>
//           </div>
//           <span>
//             Advisor & <span className="text-[#22C2F2]">SquadXTech</span>
//           </span>
//         </Link>

//         {/* Desktop Links */}
//         <ul className="hidden lg:flex gap-8">{navLinks}</ul>

//         {/* User Avatar & Mobile Menu Toggle */}
//         <div className="flex items-center gap-4">
//           {user ? (
//             <div className="flex items-center gap-4">
//               <Link to="/cart" className="relative">
//                 <FiShoppingCart className="text-2xl" />
//                 <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
//                   0
//                 </span>
//               </Link>
              
//               <div className="dropdown dropdown-end z-50">
//                 <div
//                   tabIndex={0}
//                   role="button"
//                   className="btn btn-ghost btn-circle avatar"
//                 >
//                   <div
//                     title={user?.displayName || "User"}
//                     className="w-10 rounded-full tooltip"
//                     data-tip={user?.displayName}
//                   >
//                     <img
//                       referrerPolicy="no-referrer"
//                       src={user?.photoURL || userImg}
//                       alt="User Profile"
//                     />
//                   </div>
//                 </div>
//                 <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-blue-500 rounded-box md:w-52 w-40 text-sm">
//                   <li className="text-center font-semibold underline mb-2">
//                     {user?.displayName || "Anonymous"}
//                   </li>
//                   <li>
//                     <Link
//                       to="/dashboard"
//                       className="bg-white text-blue-900 py-1 rounded text-center flex items-center gap-2"
//                     >
//                       <BsGrid3X3Gap /> Dashboard
//                     </Link>
//                   </li>
//                   <li>
//                     <button
//                       onClick={handleSignOut}
//                       className="bg-white text-blue-900 py-1 mt-1 rounded flex items-center gap-2"
//                     >
//                       <FiLogOut /> Logout
//                     </button>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           ) : (
//             <div className="flex items-center gap-2">
//               <img
//                 src={userImg}
//                 alt="user"
//                 className="w-10 h-10 rounded-full"
//               />
//               <Link to="/login" className="btn btn-outline">
//                 Login
//               </Link>
//             </div>
//           )}

//           {/* Hamburger menu button for small screens */}
//           <button
//             className="lg:hidden focus:outline-none"
//             onClick={toggleMenu}
//           >
//             {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Sidebar Menu */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ duration: 0.3 }}
//             className="fixed top-0 right-0 h-full w-2/3 md:w-1/2  bg-opacity-60 backdrop-blur-md shadow-lg text-white z-50 lg:hidden"
//           >
//             <div className="flex justify-between items-center p-4 border-b border-gray-600">
//               <span className="text-lg font-bold">Advisor & SquadXTech</span>
//               <button onClick={toggleMenu}>
//                 <FiX size={24} />
//               </button>
//             </div>

//             <ul className="flex flex-col bg-black bg-opacity-60 backdrop-blur-md shadow-lg gap-4 p-6">
//               {navLinks}
//               {user ? (
//                 <>
                 
//                   <li>
//                     <Link
//                       to="/cart"
//                       onClick={toggleMenu}
//                       className="flex items-center gap-2"
//                     >
//                       <FiShoppingCart /> My Cart
//                     </Link>
//                   </li>
//                   <li>
//                     <button
//                       onClick={() => {
//                         toggleMenu();
//                         handleSignOut();
//                       }}
//                       className="flex items-center gap-2"
//                     >
//                       <FiLogOut /> Logout
//                     </button>
//                   </li>
//                 </>
//               ) : (
//                 <li>
//                   <NavLink
//                     to="/login"
//                     onClick={toggleMenu}
//                     className={({ isActive }) =>
//                       `flex items-center gap-2 ${
//                         isActive ? "text-blue-400" : "text-white"
//                       }`
//                     }
//                   >
//                     <FiLogOut /> Login
//                   </NavLink>
//                 </li>
//               )}
//             </ul>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   </div>
//   );
// };

// export default Navbar;
