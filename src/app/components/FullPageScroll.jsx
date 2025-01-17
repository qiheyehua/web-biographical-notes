'use client';

import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navigation from './Navigation';
import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Footer from './Footer';
import { personalInfo, sections as sectionConfig, themeConfig } from '../config/content';

const FullPageScroll = () => {
  const containerRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);
  const [theme, setTheme] = useState('light');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // 初始化主题
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  }, []);

/**
 * 切换主题函数
 * 此函数不仅切换主题，还通过音效和动画来增强用户体验
 */
const toggleTheme = () => {
  // 在切换主题前设置正在过渡状态为true
  setIsTransitioning(true);
  
  // 根据切换方向播放不同的音效
  const audio = new Audio(theme === 'light' ? themeConfig.sounds.lightOn : themeConfig.sounds.lightOff);
  audio.play();
  
  // 等待动画完全结束后再切换主题
  setTimeout(() => {
    // 根据当前主题，切换到另一个主题
    if (theme === 'light') {
      setTheme('dark');
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
    // 切换主题后，设置正在过渡状态为false
    setIsTransitioning(false);
  }, 500);
};

  const sections = [
    {
      id: 'home',
      title: sectionConfig[0].title,
      component: (
        <Home greeting={sectionConfig[0].content.greeting} />
      ),
    },
    {
      id: 'about',
      title: sectionConfig[1].title,
      component: (
        <About 
          title={sectionConfig[1].title}
          description={sectionConfig[1].content.description}
        />
      ),
    },
    {
      id: 'projects',
      title: sectionConfig[2].title,
      component: (
        <Projects 
          title={sectionConfig[2].title}
          projects={sectionConfig[2].content.projects}
        />
      ),
    },
    {
      id: 'skills',
      title: sectionConfig[3].title,
      component: (
        <Skills title={sectionConfig[3].title} />
      ),
    },
    {
      id: 'experience',
      title: sectionConfig[4].title,
      component: (
        <Experience title={sectionConfig[4].title} />
      ),
    },
  ];

  useEffect(() => {
/**
 * 处理滚动事件的函数
 * 该函数的目标是确定当前视窗中心的部分，并将其标记为活动部分
 */
const handleScroll = () => {
  // 计算当前视窗中心的滚动位置
  const scrollPosition = window.scrollY + window.innerHeight / 2;
  
  // 找到当前在视窗中心的部分
  for (let i = 0; i < sections.length; i++) {
    const element = document.getElementById(sections[i].id);
    if (element) {
      const elementTop = element.offsetTop;
      const elementBottom = elementTop + element.offsetHeight;
      
      // 检查当前视窗中心是否在该元素范围内
      if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
        setActiveSection(i);
        break;
      }
    }
  }
};

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初始化检测
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

/**
 * 滚动到指定章节的位置
 * @param {number} index - 章节的索引，用于确定要滚动到哪个章节
 */
const scrollToSection = (index) => {
  // 获取目标章节的元素
  const element = document.getElementById(sections[index].id);
  
  // 如果目标章节存在，则计算滚动目标位置
  if (element) {
    // 获取目标章节元素的顶部位置
    const elementTop = element.offsetTop;
    
    // 计算目标位置，使章节的中间位置对齐到视口的中间
    const targetPosition = elementTop - (window.innerHeight / 2) + (element.offsetHeight / 2);
    
    // 平滑滚动到目标位置
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
    
    // 设置当前章节为激活状态
    setActiveSection(index);
  }
};

  return (
    <div className="relative w-full">
      {/* 内容层 */}
      <div className="relative">
        <Navigation activeSection={activeSection} onNavigate={scrollToSection} />
        
        <main className="w-full transition-colors duration-300 dark:bg-gray-900">
          {sections.map((section, index) => (
            <section
              key={section.id}
              id={section.id}
              className="relative w-full"
            >
              {section.component}
            </section>
          ))}
        </main>

        <Footer />
      </div>

      {/* 右侧滑动指示栏和主题切换按钮 */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-[60]">
        <div className="flex flex-col gap-4">
          {sections.map((section, index) => (
            <div key={section.id} className="group relative flex items-center justify-end">
              <button
                onClick={() => scrollToSection(index)}
                className="relative flex items-center gap-2 hover:gap-3 transition-all duration-300 pr-1"
              >
                {/* 文字标签 */}
                <span className={`text-xs transition-all duration-300 whitespace-nowrap ${
                  activeSection === index
                    ? 'opacity-70 translate-x-0 text-gray-800 dark:text-gray-200'
                    : 'opacity-0 translate-x-2 text-gray-500 dark:text-gray-400 group-hover:opacity-50 group-hover:translate-x-0'
                }`}>
                  {section.title}
                </span>

                {/* 指示条 */}
                <div className={`h-[1px] transition-all duration-300 ${
                  activeSection === index
                    ? 'w-6 bg-gradient-to-r from-blue-500/70 to-purple-500/70'
                    : 'w-3 bg-gray-300/50 group-hover:w-4 group-hover:bg-gray-400/50'
                }`} />
              </button>
            </div>
          ))}
        </div>
      </div>

      <motion.button
        onClick={toggleTheme}
        className="fixed right-8 bottom-8 z-[60] p-3 rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-sm shadow-lg hover:scale-110 transition-transform duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {theme === 'light' ? (
          <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        )}
      </motion.button>

      {/* 主题切换动画遮罩层 */}
      <div className="fixed inset-0 z-[70] pointer-events-none overflow-hidden">
        <AnimatePresence>
          {isTransitioning && (
            <motion.div
              initial={{ clipPath: 'circle(0% at 0 0)' }}
              animate={{ clipPath: 'circle(150% at 0 0)' }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className={`absolute inset-0 ${
                theme === 'dark'
                  ? 'bg-white'
                  : 'bg-gray-900'
              }`}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FullPageScroll; 