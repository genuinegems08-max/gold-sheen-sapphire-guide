@echo off
title Gold Sheen Sapphire Guide - local server
cd /d "%~dp0"

echo ============================================================
echo   Gold Sheen Sapphire Guide
echo ============================================================
echo.
echo   Starting the local web server...
echo   A browser tab will open at  http://localhost:4321/
echo.
echo   IMPORTANT: keep THIS window open while you view the site.
echo   Close this window to stop the site.
echo.
echo   (Do NOT open the HTML files directly - always use the
echo    http://localhost:4321/ address, or this launcher.)
echo ============================================================
echo.

REM Install dependencies the first time only.
if not exist "node_modules" (
  echo First run: installing dependencies, please wait...
  call npm install
)

REM Open the browser a few seconds after the server starts.
start "" /min cmd /c "timeout /t 4 >nul & start "" http://localhost:4321/"

REM Start the dev server (this keeps running until you close the window).
call npm run dev
