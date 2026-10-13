@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo 本地预览地址：http://localhost:4321
echo 停掉预览请按 Ctrl + C
echo.
call npm run dev
pause
