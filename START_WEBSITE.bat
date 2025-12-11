@echo off
REM Japanese Course Website - Startup Script
REM This script will start both backend and frontend

echo.
echo ====================================
echo Japanese N5 Course Website
echo ====================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo Error: Node.js is not installed!
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo [1/4] Node.js version:
node --version
npm --version
echo.

REM Install backend dependencies
echo [2/4] Installing backend dependencies...
cd /d %~dp0server
if not exist node_modules (
    call npm install --legacy-peer-deps
) else (
    echo Backend dependencies already installed
)
echo.

REM Install frontend dependencies
echo [3/4] Installing frontend dependencies...
cd /d %~dp0client
if not exist node_modules (
    call npm install --legacy-peer-deps
) else (
    echo Frontend dependencies already installed
)
echo.

echo [4/4] Ready to start!
echo.
echo To start the website, open 2 new PowerShell windows and run:
echo.
echo Window 1 - Backend (Port 5000):
echo   cd c:\Users\H.C\Desktop\japanese\server
echo   npm start
echo.
echo Window 2 - Frontend (Port 3000):
echo   cd c:\Users\H.C\Desktop\japanese\client
echo   npm start
echo.
echo Website will open at: http://localhost:3000
echo.
pause
