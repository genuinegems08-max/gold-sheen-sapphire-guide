@echo off
title Build Gold Sheen Sapphire Guide (for deploy)
cd /d "%~dp0"

echo ============================================================
echo   Building the production site...
echo   The finished files go into the "dist" folder.
echo ============================================================
echo.

if not exist "node_modules" (
  echo First run: installing dependencies, please wait...
  call npm install
)

call npm run build
if errorlevel 1 (
  echo.
  echo BUILD FAILED - see the messages above.
  pause
  exit /b 1
)

echo.
echo ============================================================
echo   Build complete.  Your live-ready site is in:  dist\
echo.
echo   To publish: drag the "dist" folder (opening now) onto
echo   https://app.netlify.com/drop
echo ============================================================
start "" "%~dp0dist"
pause
