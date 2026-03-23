# BUG-09 XSS in Description Field

## Problem
Listing descriptions could include executable/unsafe HTML.

## Impact
Critical security risk: script injection/XSS.

## Solution
Sanitized description values on listing creation API and avoided unsafe HTML rendering in quick-view display by rendering plain sanitized text.
