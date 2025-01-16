import { motion } from 'framer-motion';
import { personalInfo } from '../../config/content';

const Home = ({ greeting }) => {
  return (
    <div className="py-32 flex flex-col items-center justify-center bg-blue-50 dark:bg-gray-900 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, margin: "-20%" }}
        className="text-center max-w-4xl mx-auto"
      >
        <div className="relative mb-8 inline-block">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-200 to-purple-200 dark:from-blue-400 dark:to-purple-400 rounded-full blur-lg opacity-50"></div>
          <img
            src={personalInfo.avatar}
            alt="头像"
            className="relative w-40 h-40 rounded-full border-4 border-white dark:border-gray-800 shadow-lg object-cover"
          />
        </div>
        {/* 静态显示 greeting */}
        <motion.p 
          className="text-2xl text-gray-600 dark:text-gray-400 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: false, margin: "-20%" }}
        >
          {greeting}
        </motion.p>
        <motion.h1 
          className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: false, margin: "-20%" }}
        >
          {greeting}{personalInfo.name}
        </motion.h1>
        <motion.h2 
          className="text-2xl text-gray-600 dark:text-gray-300 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: false, margin: "-20%" }}
        >
          {personalInfo.title}
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-700 dark:text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: false, margin: "-20%" }}
        >
          {personalInfo.motto}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Home; 