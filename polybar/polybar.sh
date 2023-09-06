#!/usr/bin/env bash

# Terminate already running bar instances
killall -q polybar

#if type "xrandr"; then
#  for m in $(xrandr --query | grep " connected" | cut -d" " -f1); do
#    MONITOR=$m polybar --config=~/.config/polybar/config.ini &
#  done
#else
#  polybar --config=~/.config/polybar/config.ini &
#fi

#polybar example  >>/tmp/polybar1.log 2>&1 &
#polybar --config=~/.config/polybar/config.ini top -r >>/tmp/polybar1.log 2>&1 

for m in $(polybar --list-monitors | cut -d":" -f1); do
    MONITOR=$m polybar --config=~/.config/polybar/config.ini top &
done

