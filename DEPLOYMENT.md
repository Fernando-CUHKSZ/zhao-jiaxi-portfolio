# 部署指南 - Zhao Jiaxi Portfolio

本文档提供了多种部署方式，适用于不同的环境和需求。

## 📋 目录

- [快速开始](#快速开始)
- [Docker 部署](#docker-部署)
- [传统部署](#传统部署)
- [云平台部署](#云平台部署)
- [环境变量](#环境变量)
- [故障排除](#故障排除)

## 🚀 快速开始

### 前置要求

- Node.js 18+ 
- pnpm (推荐) 或 npm
- Docker (可选，用于容器化部署)

### 本地开发

```bash
# 克隆项目
git clone <repository-url>
cd zhao-jiaxi-portfolio

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 访问 http://localhost:3000
```

## 🐳 Docker 部署

### 方式一：使用 docker-compose（推荐）

```bash
# 生产环境部署
docker-compose up -d

# 开发环境部署
docker-compose --profile dev up -d
```

### 方式二：使用部署脚本

**Linux/macOS:**
```bash
chmod +x deploy.sh
./deploy.sh
```

**Windows:**
```cmd
deploy.bat
```

### 方式三：手动 Docker 命令

```bash
# 构建镜像
docker build -t zhao-jiaxi-portfolio .

# 运行容器
docker run -d -p 3000:3000 --name portfolio zhao-jiaxi-portfolio
```

## 🖥️ 传统部署

### 生产构建

```bash
# 安装依赖
pnpm install

# 构建项目
pnpm build

# 启动生产服务器
pnpm start
```

### PM2 部署（推荐用于生产环境）

```bash
# 安装 PM2
npm install -g pm2

# 启动应用
pm2 start npm --name "portfolio" -- start

# 查看状态
pm2 status

# 查看日志
pm2 logs portfolio
```

## ☁️ 云平台部署

### Vercel 部署

1. 连接 GitHub 仓库到 Vercel
2. 设置构建命令：`pnpm build`
3. 设置输出目录：`.next`
4. 部署完成

### Netlify 部署

1. 连接 GitHub 仓库到 Netlify
2. 设置构建命令：`pnpm build && pnpm export`
3. 设置发布目录：`out`
4. 部署完成

### AWS/阿里云/腾讯云

使用 Docker 镜像部署到云服务器：

```bash
# 构建并推送镜像到镜像仓库
docker build -t your-registry/zhao-jiaxi-portfolio .
docker push your-registry/zhao-jiaxi-portfolio

# 在服务器上拉取并运行
docker pull your-registry/zhao-jiaxi-portfolio
docker run -d -p 80:3000 your-registry/zhao-jiaxi-portfolio
```

## 🔧 环境变量

创建 `.env.local` 文件（如需要）：

```env
# 示例环境变量
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## 🔍 故障排除

### 常见问题

**1. 构建失败**
```bash
# 清理缓存
rm -rf .next node_modules
pnpm install
pnpm build
```

**2. Docker 构建慢**
```bash
# 使用国内镜像源
docker build --build-arg REGISTRY=registry.npmmirror.com .
```

**3. 端口冲突**
```bash
# 修改端口
docker run -d -p 8080:3000 zhao-jiaxi-portfolio
```

### 性能优化

- 启用 gzip 压缩
- 配置 CDN
- 使用 Redis 缓存
- 启用图片优化

### 监控和日志

```bash
# Docker 日志
docker logs -f portfolio

# docker-compose 日志
docker-compose logs -f

# PM2 日志
pm2 logs portfolio
```

## 📞 支持

如果遇到部署问题，请：

1. 检查日志文件
2. 确认环境要求
3. 查看 GitHub Issues
4. 联系开发者

---

**部署成功后访问地址：**
- 本地：http://localhost:3000
- 生产：https://your-domain.com

**有用的命令：**
```bash
# 查看运行状态
docker-compose ps

# 重启服务
docker-compose restart

# 停止服务
docker-compose down

# 查看资源使用
docker stats
```