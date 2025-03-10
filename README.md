# 个人简历网站

这是一个使用Next.js和Tailwind CSS构建的现代化个人简历网站，支持响应式设计和暗黑模式切换。

## 特性

- ✨ 现代化UI设计与动画效果
- 🌓 支持亮色/暗色模式切换
- 📱 完全响应式设计
- 🚀 基于Next.js构建，性能优异
- 🎨 使用Tailwind CSS实现样式
- 🔄 平滑的页面过渡效果
- 🧩 模块化组件设计

## 快速开始

### 前置要求

- Node.js 18.0.0或更高版本
- npm或yarn包管理器

### 安装步骤

1.克隆仓库

```bash
git clone https://github.com/yourusername/web-biographical-notes.git
cd web-biographical-notes
```

2.安装依赖

```
npm install
# 或
yarn install
```

3.启动开发服务器

```
npm run dev
# 或
yarn dev
```

4.在浏览器中打开 http://localhost:3000 查看网站

## 项目结构

```
web-biographical-notes/
├── public/             # 静态资源文件
│   ├── avatar.jpg      # 头像图片
│   ├── projects/       # 项目图片
│   └── sounds/         # 音效文件
├── src/
│   ├── app/            # Next.js应用目录
│   │   ├── components/ # 页面组件
│   │   ├── config/     # 配置文件
│   │   └── layout.js   # 布局组件
│   ├── components/     # 通用UI组件
│   │   ├── magicui/    # 特效UI组件
│   │   └── ui/         # 基础UI组件
│   └── lib/            # 工具函数
└── ...配置文件
```

## 自定义内容

您可以通过编辑 src/app/config/content.js 文件来自定义网站内容，包括：

- 个人信息（姓名、头像、社交媒体链接等）
- 技能列表
- 项目展示
- 工作经历
- 网站各部分的文本内容

## 部署

### 部署到Vercel

1. 在GitHub上创建仓库并推送代码
2. 在Vercel上导入GitHub仓库
3. 按照Vercel的指引完成部署

### 静态导出

您也可以生成静态HTML文件：

```
npm run build
npm run export
```

生成的静态文件将位于 out 目录中，可以部署到任何静态网站托管服务