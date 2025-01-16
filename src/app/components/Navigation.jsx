'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { sections } from '../config/content';

const Navigation = ({ activeSection, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = sections.map(section => ({
    id: section.id,
    title: section.title
  }));

  return (
    <div className="fixed top-0 left-0 right-0 flex justify-center z-50">
      {/* 桌面端导航 */}
      <motion.nav 
        className="mt-6 hidden md:block"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 sm:px-6 md:px-8 py-4 shadow-lg">
          <ul className="flex items-center gap-4 sm:gap-8 md:gap-12">
            {navItems.map((item, index) => (
              <li key={item.id}>
                <button
                  onClick={() => onNavigate(index)}
                  className="relative px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium transition-all duration-300 group"
                >
                  <span className={`relative z-10 transition-colors duration-300
                    ${activeSection === index 
                      ? 'text-white' 
                      : 'text-gray-600 group-hover:text-gray-900'
                    }`}
                  >
                    {item.title}
                  </span>
                  {activeSection === index && (
                    <motion.div
                      layoutId="activeBackground"
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full -mx-2"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </motion.nav>

      {/* 移动端导航按钮 */}
      <div className="md:hidden fixed top-4 right-4">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="bg-white/10 backdrop-blur-sm p-2 rounded-full shadow-lg"
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* 移动端导航菜单 */}
      <motion.div
        className={`md:hidden fixed top-0 left-0 right-0 bg-white/10 backdrop-blur-md shadow-lg ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -50 }}
        transition={{ duration: 0.3 }}
      >
        <ul className="py-4 px-4">
          {navItems.map((item, index) => (
            <li key={item.id} className="mb-2">
              <button
                onClick={() => {
                  onNavigate(index);
                  setIsMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300
                  ${activeSection === index
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                    : 'text-gray-600 hover:bg-gray-100/50'
                  }`}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default Navigation; 