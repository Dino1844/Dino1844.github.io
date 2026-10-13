@echo off
chcp 65001 >nul
cd /d "%~dp0"
rem 让 Node 走系统代理，构建时才能下载主题字体（拉丁字体 Google Sans Code）
set NODE_USE_ENV_PROXY=1
echo 本地预览地址：http://localhost:4321
echo 停掉预览请按 Ctrl + C
echo.
call npm run dev
pause
