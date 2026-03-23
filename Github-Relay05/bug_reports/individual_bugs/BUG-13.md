# BUG-13 Terms Broken Links

## Problem
Terms page contained links to invalid routes/placeholders.

## Impact
404/no-op navigation and trust degradation.

## Solution
Replaced broken anchors with valid internal `Link` targets that resolve to existing routes.
