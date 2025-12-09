# Japanese Course Website - PowerShell Startup Script
# Run: powershell -ExecutionPolicy Bypass -File "START_WEBSITE.ps1"

Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "Japanese N5 Course Website" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""

# Check Node.js
Write-Host "[CHECK] Verifying Node.js installation..." -ForegroundColor Yellow
$nodeVersion = node --version
$npmVersion = npm --version

if ($LASTEXITCODE -ne 0) {
    Write-Host "ERROR: Node.js is not installed!" -ForegroundColor Red
    Write-Host "Download from: https://nodejs.org/" -ForegroundColor Yellow
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host "Node.js: $nodeVersion" -ForegroundColor Green
Write-Host "npm: $npmVersion" -ForegroundColor Green
Write-Host ""

# Setup paths
$serverPath = "c:\Users\H.C\Desktop\japanese\server"
$clientPath = "c:\Users\H.C\Desktop\japanese\client"

# Install backend dependencies
Write-Host "[STEP 1] Installing backend dependencies..." -ForegroundColor Yellow
Set-Location $serverPath
if (-not (Test-Path "node_modules")) {
    npm install --legacy-peer-deps
    if ($LASTEXITCODE -ne 0) {
        Write-Host "ERROR installing backend dependencies" -ForegroundColor Red
        Read-Host "Press Enter to exit"
        exit 1
    }
} else {
    Write-Host "Backend dependencies already installed" -ForegroundColor Green
}
Write-Host ""

# Install frontend dependencies
Write-Host "[STEP 2] Installing frontend dependencies..." -ForegroundColor Yellow
Set-Location $clientPath
if (-not (Test-Path "node_modules")) {
    npm install --legacy-peer-deps
    if ($LASTEXITCODE -ne 0) {
        Write-Host "ERROR installing frontend dependencies" -ForegroundColor Red
        Read-Host "Press Enter to exit"
        exit 1
    }
} else {
    Write-Host "Frontend dependencies already installed" -ForegroundColor Green
}
Write-Host ""

Write-Host "=====================================" -ForegroundColor Green
Write-Host "Setup Complete!" -ForegroundColor Green
Write-Host "=====================================" -ForegroundColor Green
Write-Host ""
Write-Host "To start your website:" -ForegroundColor Cyan
Write-Host ""
Write-Host "Window 1 - Start Backend (Port 5000):" -ForegroundColor Yellow
Write-Host '  cd c:\Users\H.C\Desktop\japanese\server' -ForegroundColor White
Write-Host '  npm start' -ForegroundColor White
Write-Host ""
Write-Host "Window 2 - Start Frontend (Port 3000):" -ForegroundColor Yellow
Write-Host '  cd c:\Users\H.C\Desktop\japanese\client' -ForegroundColor White
Write-Host '  npm start' -ForegroundColor White
Write-Host ""
Write-Host "Website will open at: http://localhost:3000" -ForegroundColor Green
Write-Host ""
Write-Host "IMPORTANT: Make sure MongoDB is running!" -ForegroundColor Cyan
Write-Host "  - Install from: https://www.mongodb.com/try/download/community" -ForegroundColor White
Write-Host "  - Or use MongoDB Atlas: https://www.mongodb.com/cloud/atlas" -ForegroundColor White
Write-Host ""

Read-Host "Press Enter to continue"
