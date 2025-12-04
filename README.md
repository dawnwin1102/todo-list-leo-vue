# 🏰 迪士尼风格 Todo 应用

一个充满魔法色彩的 Todo 应用，采用上海迪士尼度假区的视觉设计风格。

## ✨ 特色功能

- 🎨 **迪士尼风格 UI** - 梦幻渐变背景、玻璃态效果、流畅动画
- 📊 **数据可视化** - 纯 CSS 实现的图表和统计面板
- 📱 **响应式设计** - 完美适配桌面和移动设备
- 🚀 **Vue 3 + Vite** - 现代化前端架构
- 🎯 **完整功能** - 任务管理、优先级设置、截止时间提醒

## 🚀 快速开始

### 环境要求
- Node.js ^20.19.0 || >=22.12.0
- npm 或 yarn

### 安装依赖
```bash
npm install
```

### 开发模式
```bash
npm run dev
```

访问 http://localhost:5174 查看应用

### 生产构建
```bash
npm run build
npm run preview
```

## 📸 应用预览

### Dashboard 仪表板
- 任务统计卡片
- 优先级分布图表
- 完成进度可视化
- 本周任务趋势

### 任务管理
- 创建、编辑、删除任务
- 优先级和截止时间设置
- 状态筛选和搜索
- 逾期任务提醒

## 🎨 设计特色

- **梦幻渐变背景** - 蓝色系魔法氛围
- **玻璃态效果** - 毛玻璃质感卡片
- **流畅动画** - 悬浮、闪烁、光效过渡
- **圆润设计** - 友好的界面元素
- **响应式布局** - 移动端优化

## 📁 项目结构

```
src/
├── App.vue              # 主应用组件
├── main.js              # 应用入口
├── router/              # 路由配置
├── components/          # Vue 组件
│   ├── Dashboard.vue    # 仪表板页面
│   ├── TodoApp.vue      # 任务管理页面
│   └── icons/           # 图标组件
├── services/            # API 服务
└── assets/              # 静态资源
```

## 🔧 技术栈

- **Vue 3** - 渐进式 JavaScript 框架
- **Vue Router 4** - 官方路由管理器
- **Vite** - 现代化构建工具
- **CSS3** - 动画和视觉效果
- **OpenAPI** - API 文档和集成

## 📖 文档

- [演示文档](./DEMO.md) - 详细的功能演示和截图
- [API 使用指南](./OPENAPI-USAGE.md) - OpenAPI 集成说明
- [待办事项文档](./README-TODO.md) - 功能开发计划

## 🎯 开发指南

### 推荐开发环境
- [VS Code](https://code.visualstudio.com/)
- [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) 扩展
- [Vue.js devtools](https://devtools.vuejs.org/) 浏览器扩展

### 自定义样式
所有样式使用纯 CSS 实现，支持轻松自定义：
- 修改 `src/assets/base.css` 调整全局样式
- 在组件文件中修改特定页面样式
- 使用 CSS 变量统一管理颜色和动画

## 🌟 致谢

设计灵感来源于 [上海迪士尼度假区](https://www.shanghaidisneyresort.com/en/) 的官方网站，致力于为用户带来充满魔法色彩的使用体验。

---

🏰 **享受您的魔法 Todo 应用！** ✨