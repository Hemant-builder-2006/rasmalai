# BUG-08 Hydration Mismatch

## Problem
Root layout rendered dynamic timestamp output that differed between server and client.

## Impact
Hydration warnings in console and noisy debugging.

## Solution
Removed unstable timestamp rendering from layout and kept deterministic server/client markup.
