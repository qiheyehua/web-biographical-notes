"use client";
import { motion } from 'framer-motion';

const Timeline = ({ items }) => {
  return (
    <div className="relative">
      {/* 中间的时间线 */}
      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-pink-200 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900" />

      <div className="space-y-16">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-20%" }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative"
          >
            {/* 时间点圆圈 */}
            <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white dark:bg-gray-800 border-2 border-blue-500 dark:border-blue-400" />

            <div className={`flex items-start gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
              {/* 左侧/右侧内容 */}
              <div className={`w-1/2 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                      {item.title}
                    </h3>
                    <div className="w-2 h-2 rounded-full bg-blue-500 dark:bg-blue-400" />
                  </div>
                  <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                    {item.organization}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* 日期显示 */}
              <div className={`w-1/2 ${index % 2 === 0 ? 'text-left pl-8' : 'text-right pr-8'}`}>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-2">
                  {item.date}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline; 