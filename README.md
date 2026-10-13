# Alfred 的博客

基于 [AstroPaper](https://github.com/satnaing/astro-paper) v6.1.0（Astro 6 + Tailwind CSS）搭建的个人博客，托管在 GitHub Pages。

- 线上地址：<https://dino1844.github.io/>
- 仓库地址：<https://github.com/Dino1844/Dino1844.github.io>

## 日常写作流程

1. **新建文章**：双击 `新建文章.cmd`，输入标题；生成的 `.md` 文件在 `src/content/posts/`。
2. **本地预览**：双击 `本地预览.cmd`（或在项目目录执行 `npm run dev`），浏览器打开 <http://localhost:4321>，改动实时刷新。
3. **发布上线**：双击 `发布博客.cmd`（或 `npm run publish`）。脚本自动 commit + push，GitHub 端自动构建，约 1 分钟后线上生效。

构建进度可在 <https://github.com/Dino1844/Dino1844.github.io/actions> 查看。

## 常用命令

| 命令              | 作用                                     |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | 本地预览，热更新                         |
| `npm run new -- "标题"` | 新建文章                          |
| `npm run publish` | 提交并推送到 GitHub，触发自动部署        |
| `npm run build`   | 本地完整构建（含搜索索引），产物在 `dist/` |
| `npm run preview` | 预览 `dist/` 构建产物                    |
| `npm run format`  | 按 Prettier 格式化全部文件               |

## 目录结构

```
astro-paper.config.ts      站点总配置：站名、简介、作者、社交链接、功能开关
astro.config.ts            Astro 配置：语言、Markdown/数学公式插件、代码高亮
src/content/posts/         所有文章（Markdown）
src/content/pages/         单页，如"关于"
src/assets/images/         文章配图，构建时自动优化
src/i18n/lang/zh-CN.ts     界面文案（导航、按钮等）
src/styles/theme.css       配色与字体变量
public/                    原样拷贝到网站根目录的静态文件（favicon、默认分享图）
scripts/                   新建文章、发布、搜索索引等辅助脚本
.github/workflows/deploy.yml   推送到 main 后自动构建并部署到 GitHub Pages
```

## 已启用的特性

- 明暗双主题、响应式布局、文章目录（`## 目录` 自动生成并可折叠）
- 站内搜索（Pagefind，纯静态，无需后端）
- KaTeX 数学公式：行内 `$...$`，独立成行 `$$...$$`
- 代码块语法高亮、行高亮、diff 标记、文件名标注
- 提示块 `> [!NOTE]` / `[!TIP]` / `[!WARNING]` 等
- RSS、Sitemap、标签页、归档页、SEO 元信息

## 部署方式

仓库推到 `main` 分支后，`.github/workflows/deploy.yml` 会自动：

1. 用 Node 24 安装依赖（`npm ci`）
2. 执行 `npm run build`（含 `astro check` 类型检查、Pagefind 建索引）
3. 把 `dist/` 发布到 GitHub Pages

首次使用需在仓库 **Settings → Pages → Source** 选择 **GitHub Actions**（已配置好，一般无需再改）。

## 技术说明

- 依赖用 npm 管理，锁文件为 `package-lock.json`；`package.json` 里用 `overrides` 把 `vite` 钉在 7.3.7，避免 npm 自动提升 peer 依赖时出现两份 vite 导致类型冲突。
- 模板原脚本里的 `cp -r` 已替换为 `scripts/copy-pagefind.mjs`，Windows 下也能正常构建。
- 站点未启用自动生成分享图（`dynamicOgImage: false`），因为该功能依赖拉丁字体，中文标题会缺字；改用 `public/default-og.jpg` 作为默认分享封面。

## 常见问题

**推送失败 / 安装依赖超时**：本机走代理 `127.0.0.1:10888`，Git 与 npm 已能正常联网；若代理端口变化，需要同步更新 `git config --global http.proxy` 和 npm 的 `proxy` 配置。

**构建报错**：先在本地跑一次 `npm run build`，错误信息会直接指出是哪个文件、哪一行；改完再发布。

**想换配色 / 字体**：改 `src/styles/theme.css` 里的 `--background`、`--foreground`、`--accent` 等变量即可，明暗两套分别定义。

**想恢复自动分享图**：在 `astro-paper.config.ts` 里把 `dynamicOgImage` 改为 `true`，并删除 `public/default-og.jpg`；中文标题需要额外为中文字体配置 satori，见 AstroPaper 文档。
