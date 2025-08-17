@echo off

call npm install
if errorlevel 1 (
  pause
)
