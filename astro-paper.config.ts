import { defineAstroPaperConfig } from "./src/types/config";

/**
 * 这个文件是博客的"总开关"，改这里就能改全站信息。
 * 改完保存，本地预览会自动刷新；然后双击"发布博客.cmd"就能上传。
 */
export default defineAstroPaperConfig({
  site: {
    // 你的博客网址（GitHub Pages 地址，结尾必须有斜杠）
    url: "https://dino1844.github.io/",
    // 博客名，显示在浏览器标签页和左上角
    title: "Alfred 的博客",
    // 一句话简介，用于搜索引擎和分享卡片
    description: "记录编译器、系统与机器学习工程中的折腾。",
    // 作者名，显示在每篇文章标题下方
    author: "Alfred",
    // 点击作者名跳转的地址
    profile: "https://github.com/Dino1844",
    // 分享到微信/微博等平台时的默认封面图，放在 public/ 目录下
    ogImage: "default-og.jpg",
    // 站点语言
    lang: "zh-CN",
    // 时区：文章时间按这个时区显示
    timezone: "Asia/Shanghai",
    dir: "ltr",
  },
  posts: {
    // 每页显示几篇文章
    perPage: 6,
    // 首页显示几篇
    perIndex: 6,
    // 定时发布的容差：往前 15 分钟内的文章也当作已发布
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    // 明暗主题切换按钮
    lightAndDarkMode: true,
    // 自动为整站生成分享图。中文标题需要额外中文字体，这里用静态封面图代替
    dynamicOgImage: false,
    // 归档页
    showArchives: true,
    // 文章页底部"返回上一页"
    showBackButton: true,
    // 文章页底部"编辑此页"按钮，指向 GitHub 网页版编辑器
    editPost: {
      enabled: true,
      url: "https://github.com/Dino1844/Dino1844.github.io/edit/main/",
    },
    // 站内搜索（Pagefind，纯静态，无需服务器）
    search: "pagefind",
  },
  // 页脚和首页展示的社交链接，图标在 src/assets/icons/socials/ 下
  socials: [
    { name: "github", url: "https://github.com/Dino1844" },
  ],
  // 文章末尾的分享按钮
  shareLinks: [
    { name: "x", url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "mail", url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
