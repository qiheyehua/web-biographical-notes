import { motion } from 'framer-motion';
import { FiBook, FiCode, FiCoffee, FiDatabase, FiServer, FiTerminal } from 'react-icons/fi';

const IconBox = ({ icon: Icon, text }) => (
  <motion.div
    className="flex items-center gap-3 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-3 rounded-xl"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <div className="p-2 bg-indigo-500/10 dark:bg-indigo-400/10 rounded-lg">
      <Icon className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
    </div>
    <span className="text-sm text-gray-600 dark:text-gray-300">{text}</span>
  </motion.div>
);

const About = ({ title, description }) => {
  const paragraphs = description.split('\n\n');
  
  return (
    <div className="pt-16 pb-16 flex items-center justify-center bg-blue-50 dark:bg-gray-900 px-4">
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

        <div className="relative">
          {/* 装饰背景 */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 rounded-2xl -z-10" />
          
          <motion.div 
            className="bg-white/80 dark:bg-black/20 backdrop-blur-sm rounded-2xl p-8 shadow-xl shadow-indigo-500/5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* 技能图标区域 */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              <IconBox icon={FiCode} text="全栈开发" />
              <IconBox icon={FiServer} text="后端架构" />
              <IconBox icon={FiDatabase} text="数据库优化" />
              <IconBox icon={FiTerminal} text="DevOps" />
              <IconBox icon={FiCoffee} text="编程热情" />
              <IconBox icon={FiBook} text="持续学习" />
            </div>

            {/* 文字内容 */}
            <div className="space-y-6">
              {paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="text-gray-600 dark:text-gray-300 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* 装饰元素 */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-xl opacity-20" />
          <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full blur-xl opacity-20" />
        </div>
      </motion.div>
    </div>
  );
};

export default About; 