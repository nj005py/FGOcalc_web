@echo off
setlocal enabledelayedexpansion
if "%1" == "" (
 goto menu
) else (
 if "%1" == "1" goto order
 if "%1" == "2" goto replace
)
:menu
echo 1 文件名批量编号
echo 2 文件名批量替换
echo 3 退出
set /p option=请选择:
if %option%==1 goto order
if %option%==2 goto replace
if %option%==3 exit

:order

if "%2"=="" ( set /p ext=后缀名: 
) else ( set ext=%2%)
if "%3"=="" (
 set /p digit=编号位数:
) else ( 
 set digit=%3%
)
set /p pfx=前缀名: 
set count=0
set ten=1
rem 补零
for /l %%z in (1 1 %digit%) do (
 set /a ten*=10
)
rem 遍历文件改名
for /f "tokens=* delims=" %%i in ('dir /b *.%ext%') do (
set /a count+=1
set "temp=!ten!!count!"
ren "%%i" "%pfx%!temp:~-%digit%!.%ext%"
)
echo !count!个文件改名完成
goto end

:replace
rem set /p ext=后缀名:
rem set /p oa=原文本: 
rem set  /p ra=替换文本: 
if "%2"=="" ( set /p ext=后缀名:
) else ( set ext=%2%)
set /p oa=原文本:
set  /p ra=替换文本:
set count=0
for /f "tokens=* delims=" %%i in ('dir /b *.%ext%') do (
 set /a count+=1
 set name=%%~nxi
 ren "%%i" "!name:%oa%=%ra%!"
)
echo !count!个文件改名完成
goto end

:end
echo 按任意键结束
pause>nul
exit