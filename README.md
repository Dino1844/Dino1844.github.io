# Alfred 的博客

AstroPaper 主题（Astro 6）搭建，托管在 GitHub Pages：<https://dino1844.github.io/>

- 文章：`src/content/posts/`
- 站点信息（站名、简介、社交链接）：`astro-paper.config.ts`
- 界面文案：`src/i18n/lang/zh-CN.ts`
- 配色与字体：`src/styles/theme.css`

双击 `新建文章.cmd` / `本地预览.cmd` / `发布博客.cmd` 即可完成写作、预览、发布。

需要 Node ≥ 22。命令行等价于 `npm run new` / `npm run dev` / `npm run publish`，构建为 `npm run build`（带 `--force`，避免删掉文章后本地构建残留旧页面；GitHub 上的构建每次都是干净环境，不受影响）。

已启用：明暗主题、站内搜索（Pagefind）、KaTeX 公式、代码高亮、提示块、RSS、Sitemap、标签与归档页。

说明：站点字体 Google Sans Code 只含拉丁字母，构建时会联网下载并打包进产物；本地若没开代理会回落到系统字体（`本地预览.cmd` 已内置 `NODE_USE_ENV_PROXY=1` 走系统代理）。自动分享图（`dynamicOgImage`）已关闭，改用静态封面 `public/default-og.jpg`，其版式模板在 `scripts/og-card.html`。
