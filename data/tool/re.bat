@echo off
setlocal enabledelayedexpansion
if "%1" == "" (
 goto menu
) else (
 if "%1" == "1" goto order
 if "%1" == "2" goto replace
)
:menu
echo 1 �ļ����������
echo 2 �ļ��������滻
echo 3 �˳�
set /p option=��ѡ��:
if %option%==1 goto order
if %option%==2 goto replace
if %option%==3 exit

:order

if "%2"=="" ( set /p ext=��׺��: 
) else ( set ext=%2%)
if "%3"=="" (
 set /p digit=���λ��:
) else ( 
 set digit=%3%
)
set /p pfx=ǰ׺��: 
set count=0
set ten=1
rem ����
for /l %%z in (1 1 %digit%) do (
 set /a ten*=10
)
rem �����ļ�����
for /f "tokens=* delims=" %%i in ('dir /b *.%ext%') do (
set /a count+=1
set "temp=!ten!!count!"
ren "%%i" "%pfx%!temp:~-%digit%!.%ext%"
)
echo !count!���ļ��������
goto end

:replace
rem set /p ext=��׺��:
rem set /p oa=ԭ�ı�: 
rem set  /p ra=�滻�ı�: 
if "%2"=="" ( set /p ext=��׺��:
) else ( set ext=%2%)
set /p oa=ԭ�ı�:
set  /p ra=�滻�ı�:
set count=0
for /f "tokens=* delims=" %%i in ('dir /b *.%ext%') do (
 set /a count+=1
 set name=%%~nxi
 ren "%%i" "!name:%oa%=%ra%!"
)
echo !count!���ļ��������
goto end

:end
echo �����������
pause>nul
exit