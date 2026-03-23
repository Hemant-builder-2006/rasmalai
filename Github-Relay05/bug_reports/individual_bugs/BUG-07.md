# BUG-07 Global Toast Notifications

## Problem
Quick-view actions relied on blocking browser `alert()` dialogs.

## Impact
Poor UX and interrupted interaction flow.

## Solution
Added global toast provider and replaced quick-view alerts with non-blocking `toast.success` / `toast.error` notifications.
