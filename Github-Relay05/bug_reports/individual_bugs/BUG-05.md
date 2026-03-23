# BUG-05 Mobile Menu Outside Click

## Problem
Mobile navigation remained open unless explicitly closed via the close icon.

## Impact
Friction on touch devices.

## Solution
Implemented outside-click and backdrop-close handling for the mobile drawer/menu and ensured body scroll lock is released correctly.
