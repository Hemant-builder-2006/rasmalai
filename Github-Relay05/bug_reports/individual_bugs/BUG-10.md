# BUG-10 Terms Footer Overlap

## Problem
On short-content screens, Terms footer alignment was visually incorrect.

## Impact
Layout looked broken and less professional.

## Solution
Refactored Terms page wrapper to `min-h-screen` with flex-column structure and footer at the bottom using `mt-auto` behavior.
