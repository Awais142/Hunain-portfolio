import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import profileImage from "../assets/hunainimage.png";

const About = ({ data }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 lg:py-0"
    >
      <div className="max-w-7xl w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left Side - Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div
              variants={itemVariants}
              className="inline-block px-4 py-1.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full border border-blue-500/30 text-sm text-blue-300 mb-4"
            >
              Welcome
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent leading-tight"
            >
              {data.name}
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl sm:text-2xl text-gray-300 font-light"
            >
              {data.tagline}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 leading-relaxed text-lg max-w-xl"
            >
              {data.intro}
            </motion.p>

            <motion.div variants={itemVariants} className="flex gap-4 pt-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border border-white/20 rounded-lg text-white font-medium hover:bg-white/10 transition-all duration-300"
              >
                View Projects
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image with Animations */}
          <motion.div
            variants={itemVariants}
            className="relative flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
            >
              {/* Rotating Gradient Border */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-full p-1 bg-gradient-to-r from-blue-500 via-purple-500 via-pink-500 to-blue-500 bg-[length:200%_200%]"
                style={{
                  backgroundPosition: "0% 50%",
                }}
              >
                <div className="w-full h-full rounded-full bg-gray-900"></div>
              </motion.div>

              {/* Pulsing Glow Effect */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-2xl -z-10"
              />

              {/* Additional Outer Glow */}
              <motion.div
                animate={{
                  scale: [1.1, 1.3, 1.1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 blur-3xl -z-20"
              />

              {/* Profile Image */}
              <motion.img
                src={profileImage}
                alt={data.name}
                className="absolute inset-0 w-full h-full rounded-full object-cover z-10"
                whileHover={{ scale: 1.05 }}
              />

              {/* Floating Animated Particles/Orbs */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full"
                  style={{
                    width: `${8 + i * 2}px`,
                    height: `${8 + i * 2}px`,
                    background: `linear-gradient(135deg, ${
                      i % 2 === 0 ? "#3b82f6" : "#8b5cf6"
                    }, ${i % 2 === 0 ? "#8b5cf6" : "#ec4899"})`,
                    boxShadow: `0 0 ${10 + i * 5}px ${
                      i % 2 === 0 ? "#3b82f6" : "#8b5cf6"
                    }`,
                  }}
                  animate={{
                    x: [
                      Math.cos((i * Math.PI) / 3) * 120,
                      Math.cos((i * Math.PI) / 3) * 140,
                      Math.cos((i * Math.PI) / 3) * 120,
                    ],
                    y: [
                      Math.sin((i * Math.PI) / 3) * 120,
                      Math.sin((i * Math.PI) / 3) * 140,
                      Math.sin((i * Math.PI) / 3) * 120,
                    ],
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3,
                  }}
                />
              ))}

              {/* Rotating Ring Elements */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-blue-500/30"
                animate={{
                  rotate: [0, -360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: {
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  },
                  scale: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                style={{
                  width: "110%",
                  height: "110%",
                  top: "-5%",
                  left: "-5%",
                }}
              />

              <motion.div
                className="absolute inset-0 rounded-full border border-purple-500/20"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  rotate: {
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  },
                  scale: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  },
                }}
                style={{
                  width: "120%",
                  height: "120%",
                  top: "-10%",
                  left: "-10%",
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
