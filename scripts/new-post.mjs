/**
 * 新建一篇文章：在 src/content/posts/ 下生成带好 frontmatter 的 Markdown 文件。
 * 用法：npm run new -- "文章标题"
 */
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POSTS_DIR = "src/content/posts";

const title = process.argv.slice(2).join(" ").trim();

if (!title) {
  console.error("用法：npm run new -- \"文章标题\"");
  process.exit(1);
}

/** 本地时间格式化成 AstroPaper 需要的 2026-10-13T10:00:00+08:00 */
function localISOString(date = new Date()) {
  const pad = n => String(n).padStart(2, "0");
  const offsetMinutes = -date.getTimezoneOffset();
  const sign = offsetMinutes >= 0 ? "+" : "-";
  const abs = Math.abs(offsetMinutes);
  const ymd = [
    date.getFullYear(),
    pad(date.getMonth() + 1),
    pad(date.getDate()),
  ].join("-");
  const time = `${pad(date.getHours())}:${pad(date.getMinutes())}:00`;
  const offset = `${sign}${pad(Math.floor(abs / 60))}:${pad(abs % 60)}`;
  return `${ymd}T${time}${offset}`;
}

/** 中文标题保留汉字（和主题的 URL 规则一致），只清掉文件名非法字符 */
function toFilename(input) {
  const cleaned = input
    .replace(/[\\/:*?"<>|]/g, " ")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^[-.]+|[-.]+$/g, "");
  return cleaned || `post-${Date.now()}`;
}

const base = toFilename(title);
let filename = `${base}.md`;
let target = join(POSTS_DIR, filename);
let index = 2;
while (existsSync(target)) {
  filename = `${base}-${index}.md`;
  target = join(POSTS_DIR, filename);
  index += 1;
}

const frontmatter = `---
author: Alfred
pubDatetime: ${localISOString()}
title: ${title}
featured: false
draft: true
tags:
  - 随笔
description: ${title}
---

## 目录

正文从这里开始写。

> [!NOTE]
> 上面 \`draft: true\` 表示草稿，不会发布上线。写完后把它改成 \`false\`。

## 小标题

正文内容。
`;

mkdirSync(POSTS_DIR, { recursive: true });
writeFileSync(target, frontmatter, "utf8");

console.log(`\n已创建：${target}`);
console.log(`预览：npm run dev   然后打开 http://localhost:4321\n`);
