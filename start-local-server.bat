@echo off
echo Starting local wedding website server...
echo.
echo Open your browser and go to: http://localhost:8000
echo Press Ctrl+C to stop the server
echo.
python -m http.server 8000
pause