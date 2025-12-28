import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";

const Education = ({ education, certifications }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="education"
      ref={ref}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                <FaGraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  variants={itemVariants}
                  className="relative pl-8 border-l-2 border-white/20"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-2 border-gray-900"></div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <h4 className="text-xl font-semibold text-white">
                        {edu.degree}
                      </h4>
                      <span className="text-sm text-gray-400 whitespace-nowrap">
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-blue-400 font-medium mb-2">
                      {edu.institution}
                    </p>
                    {edu.location && (
                      <p className="text-gray-400 text-sm mb-3">
                        {edu.location}
                      </p>
                    )}
                    {edu.description && (
                      <p className="text-gray-300 leading-relaxed">
                        {edu.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg">
                <FaCertificate className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white">
                Certifications
              </h3>
            </div>

            <div className="space-y-6">
              {certifications.map((cert) => (
                <motion.div
                  key={cert.id}
                  variants={itemVariants}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 group"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                        {cert.name}
                      </h4>
                      <p className="text-purple-400 font-medium mt-1">
                        {cert.issuer}
                      </p>
                    </div>
                    <span className="text-sm text-gray-400 whitespace-nowrap">
                      {cert.date}
                    </span>
                  </div>
                  {cert.credentialId && (
                    <p className="text-gray-400 text-sm mb-3">
                      Credential ID: {cert.credentialId}
                    </p>
                  )}
                  {cert.link && cert.link !== "#" && (
                    <motion.a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors"
                    >
                      View Credential
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </motion.a>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
