/**
 * 一键发布：提交本地改动并推送到 GitHub，由 GitHub Actions 自动构建上线。
 * 用法：npm run publish  或双击 发布博客.cmd
 */
import { spawnSync } from "node:child_process";

const SITE_URL = "https://dino1844.github.io/";

function git(args, { allowFail = false } = {}) {
  const result = spawnSync("git", args, {
    stdio: allowFail ? "pipe" : "inherit",
    encoding: "utf8",
  });
  if (result.error) throw result.error;
  if (result.status !== 0 && !allowFail) {
    process.exit(result.status ?? 1);
  }
  return result;
}

const insideRepo =
  git(["rev-parse", "--is-inside-work-tree"], { allowFail: true }).status === 0;
if (!insideRepo) {
  console.error("当前目录不是 Git 仓库，无法发布。");
  process.exit(1);
}

git(["add", "-A"]);

const staged = git(["diff", "--cached", "--name-only"], { allowFail: true });
const changed = (staged.stdout ?? "").trim();

if (!changed) {
  console.log("没有检测到任何改动，无需发布。");
  process.exit(0);
}

const files = changed.split("\n");
console.log(`\n本次改动 ${files.length} 个文件：`);
for (const file of files.slice(0, 10)) console.log(`  ${file}`);
if (files.length > 10) console.log(`  …… 还有 ${files.length - 10} 个`);

const message =
  process.argv.slice(2).join(" ").trim() ||
  `更新博客 ${new Date().toLocaleString("zh-CN", { hour12: false })}`;

git(["commit", "-m", message]);

const push = git(["push"], { allowFail: true });
if (push.status !== 0) {
  console.error("\n推送失败，请检查网络或代理设置后重试。");
  console.error(push.stderr?.trim() ?? "");
  process.exit(push.status ?? 1);
}

console.log(`\n已推送。GitHub 正在自动构建，约 1 分钟后访问：${SITE_URL}`);
console.log("构建进度：https://github.com/Dino1844/Dino1844.github.io/actions\n");
