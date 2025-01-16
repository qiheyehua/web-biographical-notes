import { motion } from 'framer-motion';
import { FiBook, FiCode, FiCoffee, FiDatabase, FiServer, FiTerminal } from 'react-icons/fi';
import { VscBracketDot, VscSymbolNamespace, VscSymbolClass, VscCircuitBoard } from 'react-icons/vsc';
import { skillItems } from '@/app/config/content';

// 代码装饰元素
const CodeElement = ({ className, text, delay = 0 }) => (
  <motion.div
    className={`font-mono text-xs opacity-20 ${className}`}
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.2 }}
    transition={{ duration: 1, delay }}
  >
    {text}
  </motion.div>
);

// 电路板装饰元素
const CircuitElement = ({ className, delay = 0 }) => (
  <motion.div
    className={`absolute ${className}`}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="relative">
      <VscCircuitBoard className="w-6 h-6 text-indigo-500/20 dark:text-indigo-400/20" />
      <motion.div
        className="absolute inset-0 bg-indigo-500/10 dark:bg-indigo-400/10 rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  </motion.div>
);

const IconBox = ({ icon: Icon, text, direction }) => {
  // 根据方向设置初始位置和动画
  const getAnimationProps = () => {
    switch (direction) {
      case 'left':
        return { x: -100, y: 0 };
      case 'right':
        return { x: 100, y: 0 };
      case 'top':
        return { x: 0, y: -100 };
      case 'bottom':
        return { x: 0, y: 100 };
      default:
        return { x: 0, y: 0 };
    }
  };

  return (
    <motion.div
      className="flex items-center gap-3 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-3 rounded-xl"
      initial={{ 
        opacity: 0,
        ...getAnimationProps()
      }}
      whileInView={{ 
        opacity: 1,
        x: 0,
        y: 0
      }}
      whileHover={{ scale: 1.05 }}
      transition={{ 
        type: "spring",
        stiffness: 200,
        damping: 20,
        duration: 0.6
      }}
    >
      <div className="p-2 bg-indigo-500/10 dark:bg-indigo-400/10 rounded-lg">
        <Icon className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />
      </div>
      <span className="text-sm text-gray-600 dark:text-gray-300">{text}</span>
    </motion.div>
  );
};

const About = ({ title, description }) => {
  const paragraphs = description.split('\n\n');
  
  return (
    <div className="pt-16 pb-16 flex items-center justify-center bg-blue-50 dark:bg-gray-900 px-4 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        {/* 代码片段装饰 */}
        <CodeElement 
          className="absolute top-12 left-8 transform -rotate-12"
          text="@Service"
          delay={0.1}
        />
        <CodeElement 
          className="absolute top-16 left-8 transform -rotate-12"
          text="public class DeveloperService implements LifeLongLearner {"
          delay={0.2}
        />
        <CodeElement 
          className="absolute top-24 right-8 transform rotate-12"
          text="@Override"
          delay={0.3}
        />
        <CodeElement 
          className="absolute top-28 right-8 transform rotate-12"
          text="public void optimizeCode(Project project) {"
          delay={0.4}
        />
        <CodeElement 
          className="absolute bottom-12 left-12 transform rotate-6"
          text="private final List<String> skills = Arrays.asList("
          delay={0.5}
        />
        <CodeElement 
          className="absolute bottom-8 left-12 transform rotate-6"
          text='    "Passion", "Creativity", "Dedication"'
          delay={0.6}
        />
        <CodeElement 
          className="absolute bottom-24 right-12 transform -rotate-6"
          text="while (isAlive()) {"
          delay={0.7}
        />
        <CodeElement 
          className="absolute bottom-20 right-12 transform -rotate-6"
          text="    keepLearning();"
          delay={0.8}
        />
        <CodeElement 
          className="absolute bottom-16 right-12 transform -rotate-6"
          text="}"
          delay={0.9}
        />

        {/* 电路板装饰 */}
        <CircuitElement className="top-8 left-1/4" delay={0.3} />
        <CircuitElement className="top-1/3 right-1/4" delay={0.6} />
        <CircuitElement className="bottom-1/3 left-1/3" delay={0.9} />
        <CircuitElement className="bottom-8 right-1/3" delay={1.2} />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, margin: "-20%" }}
        className="max-w-4xl mx-auto w-full relative"
      >
        {/* 标题装饰 */}
        <div className="flex items-center justify-center gap-2 mb-2">
          <VscBracketDot className="w-6 h-6 text-purple-500/50" />
          <VscSymbolNamespace className="w-5 h-5 text-pink-500/50" />
          <VscSymbolClass className="w-6 h-6 text-indigo-500/50" />
        </div>
        
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
          {title}
        </h2>

        <div className="relative">
          <motion.div 
            className="bg-white/80 dark:bg-black/20 backdrop-blur-sm rounded-2xl p-8 shadow-xl shadow-indigo-500/5 relative border border-indigo-500/10 group/card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ 
              scale: 1.01,
              boxShadow: "0 20px 40px rgba(124, 58, 237, 0.05)",
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            transition={{ duration: 0.5 }}
          >
            {/* 悬浮时的光效装饰 */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl opacity-0 group-hover/card:opacity-30 duration-500 blur-xl -z-10" />
            <div className="absolute -inset-[1px] bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover/card:opacity-10 duration-500 -z-10" />
            
            {/* 技能图标区域 */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 relative">
              {/* 技能区域装饰 */}
              <div className="absolute -inset-4 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.02),transparent_60%)] rounded-xl -z-10 opacity-0 group-hover/card:opacity-100 duration-500" />
              
              {skillItems.map((item, index) => (
                <IconBox 
                  key={item.text}
                  icon={item.icon}
                  text={item.text}
                  direction={item.direction}
                />
              ))}
            </div>

            {/* 文字内容 */}
            <div className="space-y-6">
              {paragraphs.map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="text-gray-600 dark:text-gray-300 leading-relaxed group-hover/card:text-gray-700 dark:group-hover/card:text-gray-200 duration-500"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About; 