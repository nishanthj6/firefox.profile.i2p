@echo off
if exist "C:\Program Files\Mozilla Firefox\firefox.exe" (
    start "" "C:\Program Files\Mozilla Firefox\firefox.exe" -no-remote -profile ".\firefox.profile.i2p" -private-window about:blank
) else (
    if exist "C:\Program Files (x86)\Mozilla Firefox\firefox.exe" (
        start "" "C:\Program Files (x86)\Mozilla Firefox\firefox.exe" -no-remote -profile ".\firefox.profile.i2p" -private-window about:blank
    )
)
exit
