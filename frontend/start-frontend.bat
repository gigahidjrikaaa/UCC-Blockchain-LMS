@echo off
echo Checking current directory...

:: Extract the current directory name
for %%I in ("%cd%") do set "dirName=%%~nxI"

:: Check if the current directory is named "frontend"
if /i not "%dirName%"=="frontend" (
    echo Error: You must run this script from the frontend directory.
    pause
    exit /b 1
)

:: Check if the parent directory is named "UCC-Blockchain-LMS"
for %%I in ("%cd%\..") do set "parentName=%%~nxI"
if /i not "%parentName%"=="UCC-Blockchain-LMS" (
    echo Error: The frontend directory must be within the UCC-Blockchain-LMS directory.
    pause
    exit /b 1
)

echo Starting Next.js development server...

:: Check if node_modules exists
if not exist node_modules (
    echo Installing dependencies...
    npm install
    if %errorlevel% neq 0 (
        echo Failed to install dependencies. Please check your npm installation.
        pause
        exit /b %errorlevel%
    )
)

:: Start the development server
echo Starting development server...
npm run dev

:: If server stops, keep the window open
pause