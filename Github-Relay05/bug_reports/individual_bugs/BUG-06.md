# BUG-06 Hardcoded Strings / i18n

## Problem
Primary landing-page copy was embedded as hardcoded literals.

## Impact
Localization and copy maintenance were difficult.

## Solution
Moved major user-facing strings to a dictionary object (`messages`) and consumed them via key lookups in UI sections.
