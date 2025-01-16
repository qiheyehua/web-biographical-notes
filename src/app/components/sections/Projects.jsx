import { motion } from 'framer-motion';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { FiGithub } from 'react-icons/fi';
import { VscCode, VscSourceControl } from 'react-icons/vsc';

const ProjectCard = ({ project, index }) => {
  const CardContent = () => (
    <div className="relative overflow-hidden rounded-2xl bg-white/80 dark:bg-black/20 backdrop-blur-sm p-6 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-indigo-500/10">
      <div className="flex flex-col gap-12">
        {/* 图片和文字一行 */}
        <div className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-6`}>
          {/* 项目图片 */}
          <div className="relative overflow-hidden rounded-xl w-1/2">
            {/* 图片遮罩层 */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
            
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover object-center w-full h-full transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
              />
            </div>
          </div>

          {/* 项目信息 */}
          <div className="flex flex-col w-1/2">
            <div className="flex flex-col gap-2 mb-4">
              <div className="flex items-center justify-between">
                <motion.h3 
                  className="text-xl font-bold text-gray-800 dark:text-gray-200 transition-colors duration-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {project.title}
                </motion.h3>
                {project.link && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative p-1.5 rounded-lg hover:bg-indigo-500/10 dark:hover:bg-indigo-400/10 transition-colors duration-300 group/link"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <HiOutlineExternalLink className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                    
                    {/* 工具提示 */}
                    <motion.span 
                      className="absolute top-1/2 right-full -translate-y-1/2 mr-2 px-2 py-1 bg-gray-800/90 dark:bg-gray-700/90 text-white text-xs rounded opacity-0 group-hover/link:opacity-100 transition-opacity duration-300 whitespace-nowrap backdrop-blur-sm"
                      initial={{ x: 5 }}
                      whileHover={{ x: 0 }}
                    >
                      访问项目
                      <span className="absolute top-1/2 -translate-y-1/2 -right-1 w-2 h-2 bg-gray-800/90 dark:bg-gray-700/90 rotate-45" />
                    </motion.span>
                  </motion.a>
                )}
              </div>
              {project.github && (
                <motion.div 
                  className="flex items-center gap-2 relative group/code"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.2 }}
                >
                  {/* 背景装饰 */}
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-sky-500/5 to-transparent rounded-lg -z-10 opacity-0 group-hover/code:opacity-100 transition-opacity duration-300" />
                  
                  {/* 装饰性代码图标 */}
                  <motion.div
                    className="absolute -left-6 -top-1 text-indigo-400/30 dark:text-indigo-500/20"
                    animate={{ 
                      rotate: [0, 5, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <VscCode className="w-5 h-5" />
                  </motion.div>
                  
                  {/* Code 文字 */}
                  <motion.div className="flex items-center gap-1">
                    <motion.span 
                      className="text-sm font-medium bg-gradient-to-r from-indigo-500 to-sky-500 dark:from-indigo-400 dark:to-sky-400 bg-clip-text text-transparent transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      Code
                    </motion.span>
                    <motion.div
                      className="w-1 h-1 rounded-full bg-indigo-500 dark:bg-indigo-400"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [1, 0.5, 1]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                  
                  {/* GitHub 图标 */}
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative p-1.5 rounded-lg hover:bg-indigo-500/10 dark:hover:bg-indigo-400/10 transition-colors duration-300 group/github"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <FiGithub className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                    
                    {/* 工具提示 */}
                    <motion.span 
                      className="absolute top-1/2 right-full -translate-y-1/2 mr-2 px-2 py-1 bg-gray-800/90 dark:bg-gray-700/90 text-white text-xs rounded opacity-0 group-hover/github:opacity-100 transition-opacity duration-300 whitespace-nowrap backdrop-blur-sm"
                      initial={{ x: 5 }}
                      whileHover={{ x: 0 }}
                    >
                      查看源代码
                      <span className="absolute top-1/2 -translate-y-1/2 -right-1 w-2 h-2 bg-gray-800/90 dark:bg-gray-700/90 rotate-45" />
                    </motion.span>
                  </motion.a>

                  {/* 装饰性源代码图标 */}
                  <motion.div
                    className="absolute -right-6 -top-1 text-sky-400/30 dark:text-sky-500/20"
                    animate={{ 
                      rotate: [0, -5, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  >
                    <VscSourceControl className="w-5 h-5" />
                  </motion.div>
                </motion.div>
              )}
            </div>
            <motion.p 
              className="text-gray-600 dark:text-gray-400 transition-colors duration-300 group-hover:text-gray-800 dark:group-hover:text-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {project.description}
            </motion.p>
          </div>
        </div>

        {/* 标签独立一行，但跟随文字位置 */}
        <div className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
          <div className="w-1/2" /> {/* 占位div */}
          <motion.div 
            className="flex flex-wrap gap-2 w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            {project.tags.map((tag, tagIndex) => (
              <motion.span
                key={tag}
                className="px-3 py-1 text-xs font-medium text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 rounded-full transition-all duration-300 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 hover:text-indigo-600 dark:hover:text-indigo-400 cursor-default"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.3,
                  delay: index * 0.1 + tagIndex * 0.05,
                  type: "spring",
                  stiffness: 300
                }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* 悬停时显示的装饰效果 */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-500/0 via-indigo-500/5 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: false, margin: "-20%" }}
      className="group relative"
    >
      <motion.div
        initial={{ 
          opacity: 0,
          x: index % 2 === 0 ? -200 : 200,
          scale: 0.8,
          rotate: index % 2 === 0 ? -5 : 5
        }}
        whileInView={{ 
          opacity: 1,
          x: 0,
          scale: 1,
          rotate: 0
        }}
        viewport={{ once: false, margin: "-10%" }}
        transition={{ 
          type: "spring",
          stiffness: 70,
          damping: 8,
          mass: 0.8,
          duration: 1,
          delay: index * 0.2
        }}
      >
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <CardContent />
          </a>
        ) : (
          <div className="cursor-default">
            <CardContent />
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

const Projects = ({ title, projects }) => {
  return (
    <div className="pt-16 pb-16 flex items-center justify-center bg-blue-50 dark:bg-gray-900 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, margin: "-20%" }}
        className="max-w-4xl mx-auto w-full"
      >
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-sky-500 dark:from-indigo-400 dark:to-sky-400">
          {title}
        </h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects; 