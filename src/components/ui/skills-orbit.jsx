"use client";
import { motion } from 'framer-motion';

const SkillsOrbit = ({ skills }) => {
  return (
    <div className="relative w-[500px] h-[500px] mx-auto">
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-bold">Skills</span>
      </div>
      {skills.map((skill, index) => {
        const angle = (index * 360) / skills.length;
        const radius = 200; // 轨道半径
        
        return (
          <motion.div
            key={skill.text}
            className="absolute"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              rotate: [angle, angle + 360],
            }}
            transition={{
              rotate: {
                repeat: Infinity,
                duration: 20,
                ease: "linear"
              }
            }}
            style={{
              left: '50%',
              top: '50%',
              transform: `rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg)`,
            }}
          >
            <div className="flex flex-col items-center bg-white/10 backdrop-blur-sm p-3 rounded-lg">
              <skill.icon className="w-6 h-6 text-blue-500" />
              <span className="text-sm mt-1">{skill.text}</span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default SkillsOrbit; 