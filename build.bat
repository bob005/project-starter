@echo off
WHERE gulp
IF %ERRORLEVEL% NEQ 0 npm install gulp-cli -g
npm install
gulp build
@echo on
