'use client';

import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';
import { SiCsdn } from 'react-icons/si';
import { TbWorldWww } from 'react-icons/tb';
import { personalInfo, socialLinks as socialLinksConfig } from '../config/content';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // 图标映射
  const iconComponents = {
    SiCsdn,
    FiGithub,
    TbWorldWww
  };

  const socialLinks = socialLinksConfig.map(link => ({
    ...link,
    icon: iconComponents[link.icon]
  }));

  return (
    <footer className="relative pt-4 pb-8 bg-blue-50 dark:bg-gray-900">
      {/* 装饰背景 */}
      <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-900/50 [mask-image:linear-gradient(0deg,white,transparent)] dark:[mask-image:linear-gradient(0deg,black,transparent)]" />
      
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          {/* 社交链接 */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-500 dark:text-gray-400 hover:scale-110 transition-all duration-300 ${link.color}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>

          {/* 版权信息 */}
          <div className="text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
              Made with <span className="text-red-500">❤️</span> using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 