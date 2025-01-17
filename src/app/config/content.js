import { FiCode, FiServer, FiDatabase, FiTerminal, FiCoffee, FiBook } from 'react-icons/fi';

export const personalInfo = {
  name: '七禾页话',
  title: 'Backend development job seekers',
  motto: '我享受搭建项目的乐趣！',
  avatar: '/avatar.jpg',
  social: {
    csdn: 'https://blog.csdn.net/2302_77276867',
    resume: 'https://preeminent-semifreddo-f6ec81.netlify.app/'  // 添加简历文件链接
  }
};

export const skillItems = [
  { 
    icon: FiCode, 
    text: "全栈开发", 
    direction: "left" 
  },
  { 
    icon: FiServer, 
    text: "后端架构", 
    direction: "top" 
  },
  { 
    icon: FiDatabase, 
    text: "数据库优化", 
    direction: "right" 
  },
  { 
    icon: FiTerminal, 
    text: "DevOps", 
    direction: "left" 
  },
  { 
    icon: FiCoffee, 
    text: "编程热情", 
    direction: "bottom" 
  },
  { 
    icon: FiBook, 
    text: "持续学习", 
    direction: "right" 
  }
];

export const sections = [
  {
    id: 'home',
    title: '首页',
    content: {
      greeting: '你好，我是',
    }
  },
  {
    id: 'about',
    title: '关于我',
    content: {
      description: `作为一名以 Java 为主要编程语言的后端开发者，我在本科阶段学习了计算机基础、数据库原理与实践等课程，并在大二时深入接触了后端开发。在编程的挑战中，我乐在其中，与团队合作开发项目、解决复杂问题的过程带来了巨大的满足感。

我精通使用 Spring 生态系统（如 Spring Boot、Spring MVC、Spring Cloud 等）进行企业级应用开发，熟悉 RESTful API 和 GraphQL 的设计与实现。此外，我还具备一定的前端开发能力，能够使用 Vue3、Vite 和 Next.js 等框架进行简单的前端开发，确保前后端的良好协作。

我对数据库技术有深入的理解，熟练使用 MySQL 和 Redis 进行数据存储和缓存。在消息队列方面，我熟悉 RabbitMQ 和 Kafka 的使用，能够设计和实现高效的异步处理流程。在搜索和数据分析方面，我使用 Elasticsearch（ES）进行全文搜索和数据索引，提升系统的查询性能。

我对 Docker 和容器化技术有较深的理解，能够熟练配置和部署 Docker 容器，优化应用的部署流程。我还掌握了 Linux 服务器管理和维护的基本技能，能够独立完成服务器的配置、监控和故障排查。

平时，我喜欢学习新技能并做一些有趣的项目 🛠️。如果不在电脑前，我喜欢做饭、看电影 🍳🎥💪，规律的睡眠和饮食是我精力充沛的秘诀 🌟。`
    }
  },
  {
    id: 'projects',
    title: '我的项目',
    content: {
      projects: [
        {
          title: 'Anki 记忆卡',
          description: '通过记忆算法和个性化复习系统，可以根据每个人对不同知识点的难易程度，难的知识点多学习，简单的知识点少学习。',
          image: '/projects/anki.png',
          tags: ['VUE 3', 'TYPESCRIPT', 'TAILWIND CSS', 'NAIVE UI', 'PINIA'],
          link: 'https://github.com/qihehuyu/anki',
          github: 'https://github.com/qihehuyu/anki'
        },
        {
          title: '后台管理系统',
          description: '一个后台管理系统，该应用UI简洁现代，支持Dark Mode切换。',
          image: '/projects/admin.png',
          tags: ['VUE 3', 'TYPESCRIPT', 'TAILWIND CSS', 'ELEMENT PLUS', 'PINIA'],
          link: 'aaa',
          github: 'https://github.com/qihehuyu/admin-system'
        }
      ]
    }
  },
  {
    id: 'skills',
    title: '我的技能',
    content: {}
  },
  {
    id: 'experience',
    title: '我的经历',
    content: {}
  }
];

export const themeConfig = {
  sounds: {
    lightOn: '/sounds/light-on.mp3',
    lightOff: '/sounds/light-off.mp3'
  }
};

export const experienceData = [
  {
    title: "全栈开发",
    organization: "个人项目开发",
    date: "2023年9月 - 至今",
    description: "开始尝试全栈开发，使用 Next.js、Vue3 等前端技术，结合 Spring Boot 后端开发个人项目。注重代码质量和用户体验，实践前后端分离架构，培养了全栈开发能力。"
  },
  {
    title: "Spring 全家桶学习",
    organization: "系统学习阶段",
    date: "2023年3月 - 2023年8月",
    description: "深入学习 Spring 生态系统，包括 Spring Boot、Spring Cloud、Spring Security 等。系统地学习了微服务架构、安全认证、分布式系统等企业级开发技术，为实际项目开发打下坚实基础。"
  },
  {
    title: "Java 基础学习",
    organization: "大学课程学习",
    date: "2022年9月 - 2023年2月",
    description: "开始接触 Java 编程，学习面向对象编程思想、Java 核心语法、集合框架、多线程等基础知识。通过课程项目和实践，培养了良好的编程习惯和问题解决能力。"
  }
];

export const socialLinks = [
  {
    icon: 'SiCsdn',
    href: personalInfo.social.csdn,
    label: 'CSDN',
    color: 'hover:text-red-500'
  },
  {
    icon: 'FiGithub',
    href: 'https://github.com/qiheyehua',
    label: 'GitHub',
    color: 'hover:text-gray-600'
  },
  {
    icon: 'TbWorldWww',
    href: 'http://8.154.22.57/#/',
    label: 'Blog',
    color: 'hover:text-blue-500'
  }
]; 