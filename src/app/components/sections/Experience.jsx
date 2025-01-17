"use client";
import { motion } from 'framer-motion';
import Timeline from '@/components/ui/timeline';
import { experienceData } from '@/app/config/content';

const Experience = ({ title }) => {
  if (!experienceData || experienceData.length === 0) {
    return null;
  }

  return (
    <section className="py-32 pb-20 bg-blue-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center mb-24 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-20%" }}
        >
          {title}
        </motion.h2>

        <Timeline items={experienceData} />
      </div>
    </section>
  );
};

export default Experience; 