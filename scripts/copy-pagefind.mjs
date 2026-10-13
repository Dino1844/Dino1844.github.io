/**
 * 构建后把 Pagefind 搜索索引复制到 public/pagefind，
 * 这样 npm run dev / npm run preview 时站内搜索也能用。
 * （模板原本用 Unix 的 cp -r，这里换成跨平台实现，Windows 上也能跑。）
 */
import { cpSync, existsSync, rmSync } from "node:fs";

const from = "dist/pagefind";
const to = "public/pagefind";

if (!existsSync(from)) {
  console.warn(`跳过：找不到 ${from}`);
  process.exit(0);
}

rmSync(to, { recursive: true, force: true });
cpSync(from, to, { recursive: true });
console.log(`已复制搜索索引：${from} -> ${to}`);
