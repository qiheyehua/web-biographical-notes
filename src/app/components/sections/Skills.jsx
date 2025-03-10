import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 
  SiJavascript, SiReact, SiVuedotjs, SiNextdotjs, 
  SiTailwindcss, SiTypescript, SiNodedotjs, SiSpring,
  SiMysql, SiRedis, SiDocker, SiGit,
  SiNginx, SiLinux, SiElasticsearch, SiKubernetes
} from 'react-icons/si';
import { HiOutlineSwitchHorizontal } from 'react-icons/hi';

// 所有技能数据
const skillsData = [
  { Icon: SiJavascript, name: "JavaScript", description: "网页交互与动态效果", category: "前端" },
  { Icon: SiReact, name: "React", description: "用户界面构建", category: "前端" },
  { Icon: SiVuedotjs, name: "Vue.js", description: "渐进式JavaScript框架", category: "前端" },
  { Icon: SiNextdotjs, name: "Next.js", description: "React应用框架", category: "前端" },
  { Icon: SiTailwindcss, name: "TailwindCSS", description: "原子化CSS框架", category: "前端" },
  { Icon: SiTypescript, name: "TypeScript", description: "类型安全的JavaScript", category: "前端" },
  { Icon: SiNodedotjs, name: "Node.js", description: "服务端JavaScript运行环境", category: "后端" },
  { Icon: SiSpring, name: "Spring", description: "Java后端开发框架", category: "后端" },
  { Icon: SiMysql, name: "MySQL", description: "关系型数据库", category: "数据库" },
  { Icon: SiRedis, name: "Redis", description: "高性能缓存数据库", category: "数据库" },
  { Icon: SiDocker, name: "Docker", description: "容器化部署工具", category: "运维" },
  { Icon: SiGit, name: "Git", description: "代码版本控制", category: "工具" },
  { Icon: SiNginx, name: "Nginx", description: "高性能Web服务器", category: "运维" },
  { Icon: SiLinux, name: "Linux", description: "服务器操作系统", category: "运维" },
  { Icon: SiElasticsearch, name: "Elasticsearch", description: "分布式搜索引擎", category: "数据库" },
  { Icon: SiKubernetes, name: "Kubernetes", description: "容器编排平台", category: "运维" }
];

// 标签模式的技能展示组件
const SkillTags = () => {
  const categories = [...new Set(skillsData.map(skill => skill.category))];
  
  return (
    <div className="space-y-8">
      {categories.map(category => (
        <div key={category} className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
            {category}
          </h3>
          <div className="flex flex-wrap gap-3">
            {skillsData
              .filter(skill => skill.category === category)
              .map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative flex items-center gap-2 px-4 py-2 bg-white/80 
                           dark:bg-gray-800/80 rounded-lg shadow-sm hover:shadow-md
                           transition-all duration-300 cursor-pointer
                           hover:bg-gradient-to-r hover:from-indigo-500/10 hover:to-purple-500/10
                           dark:hover:from-indigo-400/10 dark:hover:to-purple-400/10"
                >
                  <skill.Icon className="w-5 h-5 text-gray-600 dark:text-gray-400 
                                     group-hover:text-indigo-600 dark:group-hover:text-indigo-400
                                     transition-colors duration-300" />
                  <span className="text-sm text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 
                                dark:group-hover:text-indigo-400 transition-colors duration-300">
                    {skill.name}
                  </span>
                  <div className="absolute inset-0 rounded-lg bg-indigo-500/20 dark:bg-indigo-400/20 
                               opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10" />
                  
                  {/* 悬浮提示 */}
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-3 py-2 
                               bg-white dark:bg-gray-800 rounded-lg shadow-lg whitespace-nowrap
                               opacity-0 group-hover:opacity-100 transition-opacity duration-200
                               text-sm text-gray-600 dark:text-gray-300 pointer-events-none">
                    {skill.description}
                    <div className="absolute left-1/2 -translate-x-1/2 top-full -mt-1 
                                border-4 border-transparent border-t-white dark:border-t-gray-800" />
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

// 轨道模式组件保持不变...
const SkillIcon = ({ icon: Icon, delay = 0, x = 0, y = 0, description }) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  return (
    <motion.div
      className="absolute"
      style={{ x, y }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: [0.8, 1, 0.8],
        opacity: [0.5, 1, 0.5],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
    >
      <motion.div
        className="relative p-2.5 bg-white/80 dark:bg-gray-800/80 rounded-xl backdrop-blur-sm
                   hover:bg-gradient-to-r hover:from-indigo-500/10 hover:to-purple-500/10
                   dark:hover:from-indigo-400/10 dark:hover:to-purple-400/10
                   transition-colors duration-300 cursor-pointer group"
        whileHover={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        onMouseEnter={() => setIsTooltipVisible(true)}
        onMouseLeave={() => setIsTooltipVisible(false)}
      >
        <Icon className="w-5 h-5 text-gray-600 dark:text-gray-400 
                        group-hover:text-indigo-600 dark:group-hover:text-indigo-400
                        transition-colors duration-300" />
        
        <div className="absolute inset-0 rounded-xl bg-indigo-500/20 dark:bg-indigo-400/20 
                      opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10" />
        
        <AnimatePresence>
          {isTooltipVisible && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.8 }}
              transition={{ duration: 0.15 }}
              className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-3 py-2 
                         bg-white dark:bg-gray-800 rounded-lg shadow-lg whitespace-nowrap
                         text-sm text-gray-600 dark:text-gray-300 z-50"
            >
              {description}
              <div className="absolute left-1/2 -translate-x-1/2 top-full -mt-1 
                            border-4 border-transparent border-t-white dark:border-t-gray-800" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

const SkillOrbit = () => {
  const radius = 100;
  const centerX = 0;
  const centerY = 0;

  const getPosition = (index, total) => {
    const angle = (index / total) * Math.PI * 2;
    return {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle)
    };
  };

  const innerSkills = skillsData.slice(0, 8).map((skill, index) => ({
    Icon: skill.Icon,
    delay: index * 0.2,
    description: `${skill.name} - ${skill.description}`
  }));

  const outerSkills = skillsData.slice(8).map((skill, index) => ({
    Icon: skill.Icon,
    delay: index * 0.2 + 0.1,
    description: `${skill.name} - ${skill.description}`
  }));

  return (
    <div className="relative w-[300px] h-[300px] mx-auto">
      {/* 中心装饰 */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16
                   bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-indigo-400 dark:to-purple-400
                   rounded-full blur-xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* 内圈轨道 */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full
                   border border-indigo-500/20 dark:border-indigo-400/20"
        animate={{ rotate: 360 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {innerSkills.map((skill, index) => {
          const pos = getPosition(index, innerSkills.length);
          return (
            <SkillIcon
              key={index}
              icon={skill.Icon}
              delay={skill.delay}
              x={pos.x}
              y={pos.y}
              description={skill.description}
            />
          );
        })}
      </motion.div>

      {/* 外圈轨道 */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] rounded-full
                   border border-purple-500/20 dark:border-purple-400/20"
        animate={{ rotate: -360 }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {outerSkills.map((skill, index) => {
          const pos = getPosition(index, outerSkills.length);
          return (
            <SkillIcon
              key={index}
              icon={skill.Icon}
              delay={skill.delay}
              x={pos.x * 1.4}
              y={pos.y * 1.4}
              description={skill.description}
            />
          );
        })}
      </motion.div>
    </div>
  );
};

const Skills = ({ title }) => {
  const [isOrbitMode, setIsOrbitMode] = useState(false);

  return (
    <div className="min-h-[140vh] py-48 flex items-center justify-center bg-blue-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto w-full px-4">
        <div className="relative mb-20">
          <h2 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
            {title}
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOrbitMode(!isOrbitMode)}
            className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center gap-2 px-4 py-2 rounded-lg bg-white/80 dark:bg-gray-800/80
                     hover:bg-gradient-to-r hover:from-indigo-500/10 hover:to-purple-500/10
                     dark:hover:from-indigo-400/10 dark:hover:to-purple-400/10
                     shadow-sm hover:shadow-md transition-all duration-300"
          >
            <HiOutlineSwitchHorizontal className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              切换{isOrbitMode ? "标签" : "轨道"}模式
            </span>
          </motion.button>
        </div>
        
        <AnimatePresence mode="wait">
          {isOrbitMode ? (
            <motion.div
              key="orbit"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <SkillOrbit />
            </motion.div>
          ) : (
            <motion.div
              key="tags"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <SkillTags />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Skills;