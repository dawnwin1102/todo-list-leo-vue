<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <div id="app">
    <!-- 导航栏 -->
    <nav class="navbar">
      <div class="nav-container">
        <div class="nav-brand">
          <span class="nav-icon">📋</span>
          <span class="nav-title">Todo Manager</span>
        </div>
        <div class="nav-menu">
          <RouterLink to="/" class="nav-link" active-class="active">
            <span class="link-icon">📊</span>
            仪表板
          </RouterLink>
          <RouterLink to="/todos" class="nav-link" active-class="active">
            <span class="link-icon">✅</span>
            任务管理
          </RouterLink>
        </div>
      </div>
    </nav>

    <!-- 主要内容区域 -->
    <main class="main-content">
      <RouterView />
    </main>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  background: linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #7e8ba3 100%);
  background-attachment: fixed;
  min-height: 100vh;
  color: #2c3e50;
  line-height: 1.6;
  position: relative;
  overflow-x: hidden;
}

body::before {
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 40% 40%, rgba(120, 219, 255, 0.2) 0%, transparent 50%);
  pointer-events: none;
  z-index: -1;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* 导航栏样式 */
.navbar {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.2);
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 0 0 24px 24px;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.5rem;
  font-weight: 700;
  color: #2c3e50;
}

.nav-icon {
  font-size: 1.8rem;
  animation: sparkle 2s ease-in-out infinite;
}

.nav-title {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
}

.nav-title::after {
  content: '✨';
  position: absolute;
  right: -20px;
  top: -5px;
  font-size: 1rem;
  animation: float 3s ease-in-out infinite;
}

.nav-menu {
  display: flex;
  gap: 8px;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  border-radius: 20px;
  text-decoration: none;
  color: #495057;
  font-weight: 500;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
}

.nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  transition: left 0.6s;
}

.nav-link:hover {
  background: rgba(102, 126, 234, 0.15);
  color: #667eea;
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
}

.nav-link:hover::before {
  left: 100%;
}

.nav-link.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  transform: scale(1.05);
}

.link-icon {
  font-size: 1.1rem;
}

/* 主要内容区域 */
.main-content {
  flex: 1;
  padding: 0;
}

/* 通用按钮样式 */
button {
  font-family: inherit;
}

input, select, textarea {
  font-family: inherit;
}

/* 动画定义 */
@keyframes sparkle {
  0%, 100% { 
    opacity: 1;
    transform: scale(1) rotate(0deg);
  }
  50% { 
    opacity: 0.8;
    transform: scale(1.1) rotate(180deg);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* 响应式设计 */
@media (max-width: 768px) {
  .nav-container {
    padding: 0 16px;
    height: 60px;
  }
  
  .nav-brand {
    font-size: 1.3rem;
  }
  
  .nav-icon {
    font-size: 1.5rem;
  }
  
  .nav-menu {
    gap: 4px;
  }
  
  .nav-link {
    padding: 10px 12px;
    font-size: 0.9rem;
  }
  
  .nav-link span:not(.link-icon) {
    display: none;
  }
  
  .link-icon {
    font-size: 1.2rem;
  }
}
</style>