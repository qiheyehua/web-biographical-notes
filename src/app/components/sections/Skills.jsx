import { motion } from 'framer-motion';

const Skills = ({ title }) => {
  return (
    <div className="py-32 flex items-center justify-center bg-blue-50 dark:bg-gray-900 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, margin: "-20%" }}
        className="max-w-6xl mx-auto w-full"
      >
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500 dark:from-violet-400 dark:to-fuchsia-400">
          {title}
        </h2>
        {/* 技能内容将在后续实现 */}
      </motion.div>
    </div>
  );
};

export default Skills; 