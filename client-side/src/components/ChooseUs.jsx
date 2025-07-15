import { motion as Motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";
import img1 from "../../src/assets/images/corporate-workers-brainstorming-together.jpg";
import img2 from "../../src/assets/images/guy-shows-document-girl-group-young-freelancers-office-have-conversation-working.jpg";

const ChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "দক্ষ প্রশিক্ষক ও ইন্ডাস্ট্রি এক্সপার্টদের গাইডলাইন",
      description: "আমাদের শিক্ষকেরা শুধুমাত্র একাডেমিক নয়, বাস্তব অভিজ্ঞতাসম্পন্ন — যারা শিক্ষার্থীদের হাতে-কলমে শেখান।",
    },
    {
      id: 2,
      title: "সহজে কোর্সে ভর্তি হওয়ার সুবিধা",
      description: "জটিল প্রক্রিয়া নেই—শুধু প্রয়োজনীয় তথ্য দিন, এবং শেখা শুরু করুন নিজের সুবিধামতো সময়েই।",
    },
    {
      id: 3,
      title: "প্রতিটি কোর্সের জন্য সনদপত্র",
      description: "কোর্স সম্পন্ন করার পর স্বীকৃত সনদপত্র প্রদান করা হয়।",
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
          <Motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-6">
              Why Students Choose Us to Gain Their Knowledge
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              শিক্ষার্থীদের দক্ষতা বৃদ্ধির সুযোগ অনেক সময় একাডেমিক অগ্রাধিকার বা অন্যান্য বিষয়ে চাপের কারণে উপেক্ষিত হয়। গবেষণায় দেখা গেছে, ৭০% শিক্ষার্থী মনে করেন শেখার ও দক্ষতা উন্নয়নের সুযোগ তাদের কোনো শিক্ষা প্রতিষ্ঠান বেছে নেওয়া এবং সেখানে দীর্ঘ সময় যুক্ত থাকার অন্যতম প্রধান কারণ।


            </p>

            <Motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-6 mb-8"
            >
              {features.map((feature) => (
                <Motion.div
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
                    <h3 className="text-lg font-bold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </Motion.div>
              ))}
            </Motion.div>

            <Link>
              <div className="w-40">
                <button className=" nav-btn text-white bg-gradient-to-br from-[#22C3F2] via-[#22C3F2] to-[#22C3F2]">
                  <span className="bubble bubble-1"></span>
                  <span className="bubble bubble-2"></span>
                  <span className="bubble bubble-3"></span>
                  <span className="btn-text">More about us</span>
                </button>
              </div>
            </Link>
          </Motion.div>

          {/* Right Column - Image Placeholder */}

          {/* <div>
          <img src={image} alt="" className="rounded-bl-3xl rounded-tr-3xl" />
         </div> */}
          <div className="flex-1 md:ml-24 ml-20">
            <Motion.img
              src={img1}
              // animate={{y:[50, 100, 50]}}
              transition={{ duration: 10, repeat: Infinity }}
              className="relative w-96 border-l-8 border-b-8 border-[#98c5e8] rounded-t-[40px] rounded-br-[40px] shadow-2xl"
            />
            <Motion.img
              src={img2}
              // animate={{x:[100, 150, 100]}}
              transition={{ duration: 5, repeat: Infinity }}
              className="-mt-12 -ml-24 w-96 border-l-8 border-b-8 border-[#98c5e8] rounded-t-[40px] rounded-br-[40px] shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
