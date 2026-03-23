# BUG-02 FCP Performance

## Problem
Landing page images loaded eagerly, delaying initial rendering.

## Impact
Higher First Contentful Paint time on slow/mobile networks.

## Solution
Applied eager loading only to critical hero assets and lazy loading + async decoding to non-critical/offscreen images such as trending cards and testimonials.
