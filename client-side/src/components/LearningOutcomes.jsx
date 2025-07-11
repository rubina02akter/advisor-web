import { motion } from "framer-motion";

const LearningOutcomes = () => {
  const metrics = [
    { value: "97%", label: "Completion Rate" },
    { value: "83%", label: "Career Advancement" },
    { value: "4.9/5", label: "Satisfaction Score" },
    { value: "1500+", label: "Students Trained" }
  ];

  const outcomes = [
    "Industry-relevant project portfolio",
    "Personalized career coaching sessions",
    "Live Q&A with industry experts",
    "Lifetime access to course materials",
    "Job placement assistance",
    "Certificate of completion"
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-[#22C3F2]/10 to-[#0322d4]/10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Metrics Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Proven <span className="text-[#22C3F2]">Learning Outcomes</span>
          </h2>
          
          <div className="grid grid-cols-2 gap-6">
            {metrics.map((metric, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <p className="text-4xl font-bold text-[#0322d4] mb-2">{metric.value}</p>
                <p className="text-gray-600">{metric.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Outcomes List */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-6">What You'll Achieve</h3>
          <ul className="space-y-4">
            {outcomes.map((outcome, index) => (
              <li key={index} className="flex items-start">
                <svg className="w-6 h-6 text-[#22C3F2] mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-lg">{outcome}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 p-6 bg-white rounded-xl shadow-md border-l-4 border-[#22C3F2]">
            <h4 className="font-bold mb-2">Special Bonus:</h4>
            <p>
              Free access to our exclusive <strong>Job Preparedness Workshop</strong> 
              and <strong>LinkedIn Profile Optimization</strong> session with course enrollment.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LearningOutcomes;