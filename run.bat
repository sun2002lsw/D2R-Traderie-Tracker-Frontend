@echo off

REM UTF-8 코드페이지로 변경. 한글 깨짐 방지
chcp 65001 >nul

echo =================================================
echo 필요한 패키지 설치 중...
call npm install
if errorlevel 1 (
  echo 설치 중 오류가 발생했습니다.
  pause
  exit /b 1
)
echo.

echo =================================================
echo React 개발 서버 시작 중...
echo http://localhost:5173 에서 실행됩니다.
call npm run dev
