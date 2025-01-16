import { motion } from 'framer-motion';

const About = ({ title, description }) => {
  return (
    <div className="py-32 flex items-center justify-center bg-blue-50 dark:bg-gray-900 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, margin: "-20%" }}
        className="max-w-4xl mx-auto w-full"
      >
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
          {title}
        </h2>
        <div className="bg-white/80 dark:bg-black/20 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-200">
            {description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About; 