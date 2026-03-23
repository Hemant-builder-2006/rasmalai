# BUG-01 Dynamic Open Graph Metadata

## Problem
Shared product/listing links did not provide rich preview metadata for social platforms.

## Impact
Lower CTR and poor social preview quality.

## Solution
Added dynamic metadata generation for `app/shared-listing/[id]` using `generateMetadata`, including Open Graph and Twitter card fields with listing title, description, image, and canonical URL.
