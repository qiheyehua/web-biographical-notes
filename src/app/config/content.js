export const personalInfo = {
  name: '七禾页话',
  title: 'Backend development job seekers',
  motto: '我享受搭建项目的乐趣！',
  avatar: '/avatar.jpg',
  social: {
    csdn: 'https://blog.csdn.net/2302_77276867',
    resume: '/resume.pdf'  // 添加简历文件链接
  }
};

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
    content: {}
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