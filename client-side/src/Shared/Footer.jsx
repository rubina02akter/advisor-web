import { FiHome, FiMail, FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";
import bg from "../../src/assets/images/still-life-books-versus-technology.jpg"; // Update with your background image
import footerImg from "../../src/assets/logo/logo-bg.png"; // Update with your logo path
import SocialButtons from "../components/SocialButtons";

const Footer = () => {
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
              alt="Advisors Institute Logo"
              className="w-32 md:w-48 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            />
            {/* <div className="text-lg font-bold">Advisor & SquadXTech</div> */}
            <p className="text-sm max-w-md mx-auto lg:mx-0">
              অনলাইন লাইভ স্কিল ডেভেলপমেন্ট প্ল্যাটফর্ম।
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            <nav>
              {/* Contact Information */}
              <div className="space-y-4 text-lg">
                <h3 className="text-lg font-semibold">Contact</h3>

                <div className="flex items-start gap-2">
                  <FiHome className=" text-white" />
                  <div>
                    <p>23/16, BIJLI MAHALLA, BLOCK-F</p>
                    {/* <p>Jannatbagh Panir Pump</p> */}
                    <p>MOHAMMADPUR, DHAKA-1207</p>
                    {/* <p>Bangladesh, 1216</p> */}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <FiPhone className="text-white" />
                  <p>+8801973430706</p>
                </div>

                <div className="flex items-center gap-2">
                  <FiMail className="text-white" />
                  <a
                    href="mailto:care@learningbangladesh.con"
                    className="hover:text-primary transition-colors"
                  >
                    advisorsinstitute@gmail.com
                  </a>
                </div>
              </div>
            </nav>

            <nav>
              <h6 className="text-lg font-semibold mb-4">Quick Links</h6>
              <Link
                to="/"
                className="link link-hover block mb-2 hover:text-blue-500"
              >
                Home
              </Link>
              <Link
                to="/courses"
                className="link link-hover block mb-2 hover:text-blue-500"
              >
                All Courses
              </Link>
              <Link
                to="/about"
                className="link link-hover block mb-2 hover:text-blue-500"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="link link-hover block mb-2 hover:text-blue-500"
              >
                Contact
              </Link>
            </nav>

            <nav>
              <h6 className="text-lg font-semibold mb-4">Support</h6>
              <Link
                to="/privacy"
                className="link link-hover block mb-2 hover:text-blue-500"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="link link-hover block mb-2 hover:text-blue-500"
              >
                Terms of Service
              </Link>
              <Link
                to="/returns"
                className="link link-hover block mb-2 hover:text-blue-500"
              >
                Returns & Refunds
              </Link>
            </nav>
          </div>

          {/* Contact and Social Media Section */}

          <SocialButtons />
        </div>

        {/* Footer Bottom Section */}
        <div className="relative mt-12">
          <div className="w-10/12 mx-auto border-b border-white opacity-30"></div>
          <div className="text-center p-4 mt-4">
            <p className="text-xs md:text-sm font-light opacity-80">
              Copyright © {new Date().getFullYear()} - All rights reserved by
              Advisors Institute | Developed by SquadXTech
            </p>
          </div>
          <div className="w-10/12 mx-auto border-b border-white opacity-30"></div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
