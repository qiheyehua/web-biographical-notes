import { motion } from 'framer-motion';

const Experience = ({ title }) => {
  return (
    <div className="py-32 pb-[50vh] flex items-center justify-center bg-blue-50 dark:bg-gray-900 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, margin: "-20%" }}
        className="max-w-6xl mx-auto w-full"
      >
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-pink-500 dark:from-rose-400 dark:to-pink-400">
          {title}
        </h2>
        {/* 经历内容将在后续实现 */}
      </motion.div>
    </div>
  );
};

export default Experience; 