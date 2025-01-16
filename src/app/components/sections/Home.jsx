import { motion } from 'framer-motion';
import { personalInfo } from '../../config/content';
import { Typewriter } from 'react-simple-typewriter';
import { SiCsdn } from 'react-icons/si';
import { HiChevronDown } from 'react-icons/hi';
import { HiOutlineDocumentText } from 'react-icons/hi';
import SparklesText from '@/components/ui/sparkles-text';
const Home = ({ greeting }) => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-32 pb-16 flex flex-col items-center justify-center bg-blue-50 dark:bg-gray-900 px-4">
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
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20, x: -10 }}
          animate={{ 
            x: [-60, 0],
            transition: {
              x: {
                repeat: Infinity,
                duration: 2.5,
                ease: "steps(8)",
                repeatType: "reverse",
                repeatDelay: 1,
                type: "spring",
                stiffness: 200,
                damping: 10,
                mass: 0.5,
              }
            }
          }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: false, margin: "-20%" }}
        >
          <motion.h1 
            className="text-6xl font-bold"
          >
            {personalInfo.name}
          </motion.h1>
          
          <motion.p 
            className="text-2xl text-gray-600 dark:text-gray-400"
          >
            I am
          </motion.p>
        </motion.div>
        <motion.h2 
          className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: false, margin: "-20%" }}
        >
          <Typewriter
            words={[personalInfo.title]}
            loop={0}
            cursor={true}
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            style={{ cursor: 'text' }}
          />
        </motion.h2>
        <motion.p 
          className="text-2xl text-gray-700 dark:text-gray-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: false, margin: "-20%" }}
        >
          <SparklesText text={personalInfo.motto} />
        </motion.p>

        {/* 社交媒体图标和向下箭头 */}
        <motion.div
          className="flex flex-col items-center justify-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          viewport={{ once: false, margin: "-20%" }}
        >
          {/* 图标组 */}
          <div className="flex items-center gap-4">
            {/* CSDN 图标 */}
            <a
              href={personalInfo.social.csdn}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border-2 border-gray-300 dark:border-gray-600 hover:border-red-500 dark:hover:border-red-400 text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-all duration-300"
            >
              <SiCsdn className="w-6 h-6" />
            </a>

            {/* 简历按钮 */}
            <a
              href={personalInfo.social.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 flex items-center gap-2"
            >
              <HiOutlineDocumentText className="w-6 h-6" />
              <span className="text-sm font-medium">查看简历</span>
            </a>
          </div>

          {/* 向下箭头 */}
          <motion.button
            onClick={scrollToNext}
            className="p-2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300"
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <HiChevronDown className="w-8 h-8" />
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home; 