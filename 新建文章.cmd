@echo off
chcp 65001 >nul
cd /d "%~dp0"
set /p TITLE=请输入文章标题：
if "%TITLE%"=="" (
  echo 没有输入标题，已取消。
  pause
  exit /b 1
)
call npm run new -- "%TITLE%"
echo.
pause
