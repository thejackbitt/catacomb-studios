@echo off

REM Step A: Run "ng build --configuration=production" in the ./catacombapp.client directory
echo Building Angular project...
cd ./catacombapp.client
ng build --configuration=production & cd .. & xcopy /e /i /y "./catacombapp.client/dist/catacombapp.client/browser" "./CatacombApp.Server/wwwroot" & cd ./CatacombApp.Server & dotnet publish & cd .. & echo All tasks completed successfully. & pause
