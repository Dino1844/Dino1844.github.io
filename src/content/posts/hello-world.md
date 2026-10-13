---
author: Alfred
pubDatetime: 2026-10-13T10:00:00+08:00
title: 开始写第一篇
featured: true
draft: false
tags:
  - 使用指南
description: 这个博客怎么用：在本地写、实时预览、一键上传到 GitHub Pages。
---

## 目录

这是本站的第一篇文章，也是一份使用说明。看完这篇，你就知道以后怎么写、怎么发。

## 本地写作与预览

博客的源码就是一堆 Markdown 文件，直接用编辑器（VS Code、Typora 都行）打开这个目录即可。写作时想边写边看效果，在项目目录里执行：

```bash
npm run dev
```

浏览器打开终端提示的 <http://localhost:4321>，改动会实时刷新。写完按 `Ctrl + C` 停掉。

## 新建一篇文章

两种方式，效果一样：

1. 双击项目里的 **新建文章.cmd**，按提示输入标题；
2. 或者在终端执行 `npm run new "文章标题"`。

命令会在 `src/content/posts/` 下生成一个 `.md` 文件，里面已经带好开头的配置块。文件名的英文/中文都会直接变成文章网址，所以建议文件名用简短英文，例如 `cuda-memory-model.md`，网址就是 `/posts/cuda-memory-model/`。

## 文章开头的配置块

每篇文章开头那段 `---` 包起来的内容叫 frontmatter，字段含义如下：

| 字段          | 必填 | 说明                                                   |
| ------------- | ---- | ------------------------------------------------------ |
| `title`       | 是   | 文章标题                                               |
| `description` | 是   | 一句话摘要，用于搜索引擎和分享卡片                     |
| `pubDatetime` | 是   | 发布时间，格式 `2026-10-13T10:00:00+08:00`             |
| `tags`        | 否   | 标签数组，会自动生成标签页                             |
| `featured`    | 否   | 设为 `true` 会出现在首页「精选」区                     |
| `draft`       | 否   | 设为 `true` 表示草稿，不会构建上线                     |
| `modDatetime` | 否   | 最近修改时间，填了才会在文章里显示「更新于」           |
| `ogImage`     | 否   | 这篇文章的分享封面图                                   |

## 发布上线

双击 **发布博客.cmd**。脚本会自动提交改动并推送到 GitHub，GitHub 那边会自动构建，一两分钟后刷新 <https://dino1844.github.io/> 就能看到新文章。

> [!TIP]
> 发布前不需要手动执行构建命令，GitHub 上的服务会自动完成打包和部署。

## 图片放哪里

把图片丢进 `src/assets/images/`，然后在文章里用相对路径引用：

```md
![图片说明](../../assets/images/example.png)
```

想调图片大小，就直接写 HTML：

```html
<img src="../../assets/images/example.png" alt="图片说明" width="480" />
```

## 想改站点信息

博客名字、简介、社交链接都在根目录的 `astro-paper.config.ts` 里，文件里有中文注释。改完同样双击 **发布博客.cmd** 即可。
