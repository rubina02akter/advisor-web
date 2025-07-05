import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import Tilt from 'react-parallax-tilt';
import { FaRocket, FaGraduationCap, FaUserTie, FaAward, FaChalkboardTeacher } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const HeroSection = () => {
  // Enhanced marquee items with icons
  const marqueeItems = [
    { text: "10,000+ Active Learners", icon: <FaRocket className="mr-2" /> },
    { text: "50+ Industry-Relevant Courses", icon: <FaGraduationCap className="mr-2" /> },
    { text: "Career Guidance Sessions", icon: <FaUserTie className="mr-2" /> },
    { text: "Certification Programs", icon: <FaAward className="mr-2" /> },
    { text: "Expert Instructors", icon: <FaChalkboardTeacher className="mr-2" /> },
    { text: "24/7 Learning Support", icon: <FaRocket className="mr-2" /> },
    { text: "Hands-on Projects", icon: <FaGraduationCap className="mr-2" /> },
    { text: "Community Forums", icon: <FaUserTie className="mr-2" /> }
  ];
  const scrollToFreeCourses = () => {
    const element = document.getElementById('free-courses');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="relative w-full overflow-hidden h-[85vh] min-h-[650px] flex flex-col lg:pl-9" style={{
      backgroundImage: "url('/your-bg.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed"
    }}>
      {/* Vibrant teal gradient overlay */}
      <div className="absolute inset-0 bg-blue-300 backdrop-blur-[2px]"></div>
      
      {/* Main content */}
      <div className="relative z-10 h-full container mx-auto px-6 flex flex-col justify-center pb-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Text content */}
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl text-cyan-50 md:text-5xl lg:text-6xl font-bold leading-tight">
              Master <span className="text-transparent bg-clip-text bg-blue-800 h-[1.2em] inline-block">
              <Typewriter
                  options={{
                    strings: ['Web Development', 'UI/UX Design', 'Data Science', 'Apps Development','Game Development'],
                    autoStart: true,
                    loop: true,
                    delay: 70,
                    deleteSpeed: 40,
                  }}
                />
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto lg:mx-0">
              Join to master thousands in-demand skills with our project-based courses and expert mentorship.
            </p>

            {/* Vibrant teal buttons with enhanced effects */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Tilt tiltReverse={true} glareEnable={true} glareMaxOpacity={0.3} glareColor="#5eead4">
                <Link to='/all-Courses'><motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-6 py-3 bg-blue-800 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-400/40 transition-all relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2 ">
                    <span>Explore Courses</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </motion.button></Link>
              </Tilt>
              
              <Tilt tiltReverse={true} glareEnable={true} glareMaxOpacity={0.2} glareColor="#152C54">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={scrollToFreeCourses}
                  className="px-6 py-3  border-2 bg-blue-800 hover:border-teal-300/80 rounded-lg font-medium transition-all relative overflow-hidden group"
                >
                  <span className="relative z-10 text-cyan-50">Free Trial</span>
                  <span className="absolute inset-0 bg-teal-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                </motion.button>
              </Tilt>
            </div>
          </div>

          {/* Image placeholder */}
          <div className="lg:w-1/2 flex justify-center relative">
            <div className="w-full max-w-md relative">
              <div 
                className="aspect-square bg-contain bg-no-repeat bg-center"
                style={{ 
                  backgroundImage: "url('https://i.ibb.co.com/WpPgbpxG/smiling-student-girl-with-coffee-folders-removebg-preview.png')",
                  filter: "drop-shadow(0 0 25px #152C54)"
                }}
              ></div>
              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-cyan-400/20 blur-xl z-[-1] animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-28 h-28 rounded-full bg-teal-400/20 blur-xl z-[-1] animate-pulse delay-300"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Vibrant marquee */}
      <div className="absolute bottom-0 left-0 z-10 right-0 py-4 bg-gradient-to-r from-cyan-800/60 to-teal-800/60 backdrop-blur-md -rotate-3 origin-left border-t border-teal-300/20">
        <Marquee speed={50} gradient={false} className="overflow-visible py-1">
          {marqueeItems.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center mx-6 px-5 py-2 bg-blue-800 rounded-full border border-teal-300/30 hover:border-teal-200/60 transition-all hover:bg-teal-800/50 group"
            >
              <span className="text-teal-200 group-hover:text-white transition-colors">{item.icon}</span>
              <span className="text-lg font-medium text-white ml-2 group-hover:text-blue-800 transition-colors">{item.text}</span>
              <div className="w-2 h-2 mx-4 rounded-full bg-blue-800 group-hover:bg-teal-200 transition-colors"></div>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-teal-300/40 pointer-events-none"
          initial={{
            scale: Math.random() * 0.5 + 0.5,
            opacity: 0,
            x: Math.random() * 100,
            y: Math.random() * 100
          }}
          animate={{
            x: Math.random() * 100,
            y: Math.random() * 100,
            opacity: [0, 0.3, 0],
            transition: {
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse"
            }
          }}
          style={{
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
        />
      ))}
    </div>
  );
};

export default HeroSection;