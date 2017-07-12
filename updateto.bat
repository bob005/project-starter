setlocal 
@echo off
for /f "skip=8 tokens=2,3,4,5,6,7,8 delims=: " %%D in ('robocopy /l * \ \ /ns /nc /ndl /nfl /np /njh /XF * /XD *') do (
 set "dow=%%D"
 set "month=%%E"
 set "year=%%F"
 set "HH=%%G"
 set "MM=%%H"
 set "SS=%%I"
)
@echo on
git add *
git commit -m "update %dow%/%month%/%year% %HH%-%MM%"
git push -f origin master
endlocal
