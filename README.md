# FunRide Toys - 儿童乘骑玩具网站

一个使用 Next.js 14 和 Decap CMS 构建的现代化电商网站，专为儿童乘骑玩具品牌设计。

## 功能特点

- ✅ 现代化响应式设计（移动端友好）
- ✅ SEO 优化（sitemap.xml、robots.txt）
- ✅ Decap CMS 集成（后台管理博客）
- ✅ Formspree 表单集成
- ✅ TypeScript 支持
- ✅ Tailwind CSS 样式
- ✅ 组件化架构
- ✅ 元数据优化（每页独立的 title 和 description）

## 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **CMS**: Decap CMS (原 Netlify CMS)
- **表单**: Formspree
- **字体**: Nunito (标题)、Open Sans (正文)

## 快速开始

### 安装依赖

\`\`\`bash
npm install
# 或
yarn install
# 或
pnpm install
\`\`\`

### 环境配置

复制 `.env.local` 文件并配置环境变量：

\`\`\`env
NEXT_PUBLIC_FORMSPREE_FORM_ID=your-form-id
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
\`\`\`

### 运行开发服务器

\`\`\`bash
npm run dev
\`\`\`

打开 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本

\`\`\`bash
npm run build
npm start
\`\`\`

## 项目结构

\`\`\`
ride-on-toys/
├── public/
│   ├── cms/
│   │   └── config.yml          # Decap CMS 配置
│   ├── images/
│   │   └── blog/               # 博客图片存储
│   └── og-image.jpg            # Open Graph 图片
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx         # 关于页面
│   │   ├── blog/
│   │   │   ├── [slug]/
│   │   │   │   └── page.tsx     # 博客详情页
│   │   │   └── page.tsx         # 博客列表页
│   │   ├── contact/
│   │   │   └── page.tsx         # 联系页面
│   │   ├── privacy/
│   │   │   └── page.tsx         # 隐私政策
│   │   ├── products/
│   │   │   └── page.tsx         # 产品页面
│   │   ├── safety/
│   │   │   └── page.tsx         # 安全认证页面
│   │   ├── terms/
│   │   │   └── page.tsx         # 服务条款
│   │   ├── admin/
│   │   │   ├── config.yml       # CMS 管理配置
│   │   │   └── [[...admin]]/
│   │   │       └── page.tsx     # 后台管理页面
│   │   ├── sitemap.xml/
│   │   │   └── route.ts         # 动态 sitemap
│   │   ├── robots.txt/
│   │   │   └── route.ts         # 动态 robots.txt
│   │   ├── layout.tsx           # 根布局（包含 SEO）
│   │   ├── page.tsx             # 首页
│   │   └── globals.css          # 全局样式
│   ├── components/
│   │   ├── Navbar.tsx           # 导航栏组件
│   │   ├── Footer.tsx           # 页脚组件
│   │   ├── ProductCard.tsx      # 产品卡片组件
│   │   └── BlogCard.tsx         # 博客卡片组件
│   └── lib/
│       └── utils.ts             # 工具函数（如有）
├── content/
│   └── blog/                    # 博客文章 Markdown 文件
│       ├── choosing-safe-ride-toys.md
│       ├── benefits-of-ride-toys.md
│       └── eco-friendly-materials.md
├── .env.local                   # 环境变量
├── next.config.js               # Next.js 配置
├── tailwind.config.js           # Tailwind CSS 配置
├── tsconfig.json                # TypeScript 配置
├── package.json                 # 项目依赖
└── README.md                    # 项目说明
\`\`\`

## 页面说明

### 主要页面

1. **首页** (`/`) - 产品展示、特色功能、博客预览
2. **关于** (`/about`) - 公司故事、使命价值观、安全认证
3. **产品** (`/products`) - 产品列表、分类筛选
4. **博客** (`/blog`) - 文章列表、分类搜索
5. **联系** (`/contact`) - 联系表单、常见问题

### 法律页面

- **隐私政策** (`/privacy`) - 数据处理和隐私保护
- **服务条款** (`/terms`) - 使用条款和条件
- **安全认证** (`/safety`) - 产品认证和安全特性

## CMS 管理

访问 `/admin` 进入 Decap CMS 后台管理界面。

### 配置 Identity（Git Gateway）

1. 在 Netlify 上启用 Identity
2. 启用 Git Gateway
3. 邀请团队成员

### 添加博客文章

1. 进入 CMS 后台
2. 点击"博客文章"
3. 点击"新建文章"
4. 填写文章信息
5. 保存并发布

## SEO 优化

- 每个页面都有独立的 `title` 和 `meta description`
- 自动生成 `sitemap.xml`（访问 `/sitemap.xml`）
- 自动生成 `robots.txt`（访问 `/robots.txt`）
- Open Graph 和 Twitter Card 支持
- 结构化数据准备（可扩展）

## 表单配置

联系表单使用 Formspree：

1. 访问 [Formspree](https://formspree.io/)
2. 创建新表单
3. 复制表单 ID
4. 更新 `.env.local` 中的 `NEXT_PUBLIC_FORMSPREE_FORM_ID`

## 自定义样式

项目使用 Tailwind CSS，自定义配置在 `tailwind.config.js`：

- 自定义颜色：primary-orange、primary-blue、primary-yellow 等
- 自定义字体：Nunito（标题）、Open Sans（正文）

## 部署

### Vercel（推荐）

\`\`\`bash
npm install -g vercel
vercel
\`\`\`

### Netlify

\`\`\`bash
npm run build
# 将 .next 目录部署到 Netlify
\`\`\`

### 其他静态托管

\`\`\`bash
npm run build
npm run export  # 如需静态导出
\`\`\`

## 维护建议

1. **定期更新依赖**：`npm update`
2. **备份博客内容**：`content/blog` 目录
3. **监控表单**：在 Formspree 后台查看提交
4. **SEO 检查**：使用 Google Search Console
5. **性能优化**：使用 Lighthouse 定期检查

## 许可证

MIT License

## 联系方式

- 网站：https://funridetoys.com
- 邮箱：info@funridetoys.com
- 电话：400-123-4567
