@echo off
npm install gulp-cli -g
npm install
echo "Starting cleaning process"
gulp clean
echo "It's all cleaned up!"
@echo on