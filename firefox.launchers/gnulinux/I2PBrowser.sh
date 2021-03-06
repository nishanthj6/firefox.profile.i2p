#! /usr/bin/env bash

if [ "$USER" = "root" ]; then
    exit "Browsers should definitely not run as root!"
fi

export DIR="$HOME/.mozilla/firefox/firefox.profile.i2p"

PRENUM=$(/bin/grep '\[Profile' $HOME/.mozilla/firefox/profiles.ini | tail -n 1 | tr -d 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ[]')
NUM=$(($PRENUM + 1))

grep -v "I2PBrowser-Launcher" $HOME/.mozilla/firefox/profiles.ini && echo "
[Profile$NUM]
Name=I2PBrowser-Launcher
IsRelative=1
Path=firefox.profile.i2p
" >> $HOME/.mozilla/firefox/profiles.ini

"$SNAP/usr/lib/firefox.profile.i2p/install.sh" install
"$SNAP/usr/lib/firefox.profile.i2p/install.sh" run
