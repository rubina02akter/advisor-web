import { motion } from "framer-motion";
import { FaCheck, FaArrowRight } from "react-icons/fa";
import image from '../../src/assets/images/course-ban-bg.png'
import img1 from '../../src/assets/images/corporate-workers-brainstorming-together.jpg';
import img2 from '../../src/assets/images/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working.jpg';


const ChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "Free for physically handcraft",
      description: "We offer free resources for hands-on learning experiences",
    },
    {
      id: 2,
      title: "Easy to enroll courses",
      description: "Simple registration process to start learning immediately",
    },
    {
      id: 3,
      title: "Course certificate for particular course",
      description: "Get recognized certificates upon course completion",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 w-11/12 mx-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
              Why Students Choose Us for Gain Their Knowledge
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Helping employees gain skills and providing career development
              often take a back seat to business priorities but workplace better
              right now. Seventy percent of workers think that.
            </p>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-6 mb-8"
            >
              {features.map((feature) => (
                <motion.div
                  key={feature.id}
                  variants={item}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600">
                      <FaCheck className="h-3 w-3" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-br from-[#0322d4] via-[#22C3F2] to-[#22C3F2] transition-colors">
              More about us
              <FaArrowRight className="ml-2 h-4 w-4" />
            </button>
          </motion.div>

          {/* Right Column - Image Placeholder */}
         
         {/* <div>
          <img src={image} alt="" className="rounded-bl-3xl rounded-tr-3xl" />
         </div> */}
          <div className="flex-1 ml-42">
       <motion.img
          src={img1}
          // animate={{y:[50, 100, 50]}} 
          transition={{duration: 10 ,repeat:Infinity}}
          className="relative w-96 border-l-8 border-b-8 border-[#98c5e8] rounded-t-[40px] rounded-br-[40px] shadow-2xl"
        />
       <motion.img
          src={img2}
          // animate={{x:[100, 150, 100]}}
          transition={{duration: 5 ,repeat:Infinity}}
          className="-mt-12 -ml-24 w-96 border-l-8 border-b-8 border-[#98c5e8] rounded-t-[40px] rounded-br-[40px] shadow-2xl"
        />
       </div>

        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
