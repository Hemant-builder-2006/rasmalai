# Issue List - Batch 5

## Bug 1: [SEO] Add dynamic Open Graph meta tags for Product pages
### Category
SEO
### Severity
Medium
### Description
When product pages are shared on social media (Twitter/X, LinkedIn, WhatsApp), they do not show a preview card (image, title, description). This reduces click-through rates.
### Location
- File: `app/layout.js` (Root Layout) or `app/product/[id]/page.js` (if exists)
- Function: `metadata` export
### Expected Behavior
Sharing a link should display the product image and title in a rich card format.
### Actual Behavior
Only the raw URL is displayed.
### Steps to Reproduce
1. Copy a product link.
2. Paste it into a social media validator (e.g., meta tags.io).
3. Observe missing OG tags.
### Impact
Marketing/User Growth.
### Hint
Look into Next.js `generateMetadata` or the `metadata` object in `layout.js`.

## Bug 2: [Performance] Reduce First Contentful Paint (FCP)
### Category
Performance
### Severity
High
### Description
The application loads slowly, particularly on 3G networks. Large images and non-critical components are blocking the main thread or loading eagerly.
### Location
- File: `app/page.js`
- Element: Hero images, Product grids
### Expected Behavior
Initial paint should be under 1.8s. Non-critical components and off-screen images should load lazily.
### Actual Behavior
All images load immediately, delaying the First Contentful Paint.
### Steps to Reproduce
1. Open Chrome DevTools > Lighthouse.
2. Run a Performance audit on Mobile.
3. Observe FCP score.
### Impact
User retention and SEO ranking.
### Hint
Use `priority` for Hero images and `loading="lazy"` for everything else.

## Bug 3: [Bug] Fix Accessibility (a11y): Missing `alt` tags
### Category
Accessibility (UI)
### Severity
Medium
### Description
Images across the landing page are missing `alt` attributes, making the site unusable for screen reader users.
### Location
- File: `app/page.js`
- Elements: Logo, Hero Slides, Testimonials
### Expected Behavior
All `<img>` tags must have a descriptive `alt` attribute.
### Actual Behavior
Screen readers announce "Image" or filename instead of description.
### Steps to Reproduce
1. Use a screen reader (or inspect elements).
2. Navigate to the Logo or Hero section.
3. Observe missing `alt` attributes.
### Impact
Legal compliance and usability for disabled users.
### Hint
Add `alt="Description"` to all `img` tags.

## Bug 4: [Feature] Add "Skeleton Loaders" on Dashboard
### Category
UI/UX
### Severity
Low
### Description
The dashboard text content shifts layout upon loading. It currently looks empty or shows a spinner, causing a jarring transition.
### Location
- File: `app/buyer-dashboard/page.js`
### Expected Behavior
A skeleton (gray placeholder) should mimic the content layout while data fetches.
### Actual Behavior
Content jumps or blank space is shown before data appears.
### Steps to Reproduce
1. Log in to Buyer Dashboard.
2. Refresh the page.
3. Observe the loading state.
### Impact
Perceived performance and visual stability.
### Hint
Replace `Loader2` spinner or null checks with a Skeleton component.

## Bug 5: [Bug] Mobile Menu toggle does not close when clicking outside
### Category
UI (Mobile)
### Severity
Low
### Description
Clicking the backdrop (outside the menu) does not close the mobile navigation drawer.
### Location
- File: `app/page.js`
- Component: Mobile Menu
### Expected Behavior
Clicking anywhere outside the menu should close it.
### Actual Behavior
Menu stays open until the "X" button is clicked.
### Steps to Reproduce
1. Resize window to mobile width.
2. Open the Hamburger menu.
3. Click on the blurred background.
4. Menu remains open.
### Impact
Mobile user frustration.
### Hint
Check for `document.addEventListener('click', ...)` logic.

## Bug 6: [Refactor] Replace hardcoded strings with i18n keys
### Category
Refactor
### Severity
Low
### Description
Text strings like "Buy now", "Sell now", "CampusMart" are hardcoded, making localization impossible.
### Location
- File: `app/page.js`
- Elements: Hero buttons, Headings
### Expected Behavior
Strings should be pulled from a translation file (e.g., `t('buy_now')`).
### Actual Behavior
Strings are hardcoded in English.
### Steps to Reproduce
1. Search code for "Buy now".
2. Observe raw string usage.
### Impact
Scalability for multi-language support.
### Hint
Create a dictionary/JSON file and import strings.

## Bug 7: [Feature] Implement "Toast" notifications globally
### Category
UI
### Severity
Medium
### Description
The app uses browser native `alert()` for success/error messages, which looks unprofessional and blocks interaction.
### Location
- File: `app/buyer-dashboard/quick-view/page.js`
- Action: "Share Link", "Copy UPI"
### Expected Behavior
Non-blocking "Toast" notifications should appear (e.g., "Copied to clipboard").
### Actual Behavior
`alert("...")` pops up, freezing the browser window.
### Steps to Reproduce
1. Go to Buyer Dashboard > Quick View Product.
2. Click "Share".
3. Observe browser alert.
### Impact
UX Polish.
### Hint
Install `sonner` or `react-hot-toast` and replace alerts.

## Bug 8: [Bug] Fix "Hydration Mismatch" errors in console
### Category
Backend/React
### Severity
Low
### Description
A hydration error appears in the console because the server-rendered HTML matches the client-rendered HTML. (Likely caused by Date/Time differences).
### Location
- File: `app/layout.js`
- Element: Timestamp in hidden footer.
### Expected Behavior
No console errors during hydration.
### Actual Behavior
"Warning: Text content did not match..."
### Steps to Reproduce
1. Open browser console.
2. Refresh any page.
3. Look for red/yellow hydration warning.
### Impact
React performance and debugging noise.
### Hint
Use `suppressHydrationWarning` or `useEffect` for client-only rendering.

## Bug 9: [Security] Sanitize user input in "Description" field
### Category
Security
### Severity
Critical
### Description
The product description field allows raw HTML execution (XSS). An attacker can inject scripts.
### Location
- File: `app/buyer-dashboard/quick-view/page.js` (Display)
- File: `app/seller-dashboard/create-listing/page.js` (Input)
### Expected Behavior
HTML tags should be escaped or stripped.
### Actual Behavior
`<script>` tags are executed when viewing the product.
### Steps to Reproduce
1. Create a listing with description `<img src=x onerror=alert(1)>`.
2. View the listing in Quick View.
3. Observe alert popup.
### Impact
Account takeover, data theft.
### Hint
Avoid `dangerouslySetInnerHTML`.

## Bug 10: [Bug] Footer overlaps content on short pages
### Category
UI
### Severity
Low
### Description
On pages with little content (like Terms of Service or empty states), the footer rides up and covers content or sits in the middle of the screen.
### Location
- File: `app/terms/page.js`
### Expected Behavior
Footer should stay at the bottom of the viewport even on empty pages.
### Actual Behavior
Footer is positioned immediately after content.
### Steps to Reproduce
1. Navigate to `/terms`.
2. Observe footer position.
### Impact
Visual polish.
### Hint
Use `min-h-screen` and `flex-col` on the page wrapper.

## Bug 11: [Feature] Add a "Back to Top" button on long listing pages
### Category
UI
### Severity
Low
### Description
Long scrolling pages (Landing page) lack a quick way to return to the top.
### Location
- File: `app/page.js`
### Expected Behavior
A floating arrow button appears after scrolling down 300px.
### Actual Behavior
No button is present.
### Steps to Reproduce
1. Scroll to the bottom of the homepage.
2. Observe no back-to-top button.
### Impact
Navigation ease.
### Hint
Track window scroll Y position in `useEffect`.

## Bug 12: [Design] Improve typography hierarchy on Landing page
### Category
Design
### Severity
Low
### Description
Headings (H1, Brand Name) lack weight contrast, making them look similar to body text.
### Location
- File: `app/global.css`
- Class: `.brand-name`
### Expected Behavior
Headings should be bold (700/800) to stand out.
### Actual Behavior
Heading font weight is 400 (Regular).
### Steps to Reproduce
1. Inspect "CampusMart" and "Student Marketplace" text.
2. Observe both look visually similar in weight.
### Impact
Visual hierarchy and readability.
### Hint
Update CSS font-weights.

## Bug 13: [Bug] Fix broken links in "Terms of Service" page
### Category
Link Rot
### Severity
Low
### Description
Links in the Terms of Service page lead to nonexistent routes or `#`.
### Location
- File: `app/terms/page.js`
### Expected Behavior
Links should direct to valid Policy or Home pages.
### Actual Behavior
Links go to `/privacy-policy-broken` (404) or `#` (do nothing).
### Steps to Reproduce
1. Go to `/terms`.
2. Click "View Privacy Policy".
3. Observe 404 or no action.
### Impact
User trust.
### Hint
Update `href` attributes to real routes.

## Bug 14: [Feature] Add favicon and app manifest for PWA
### Category
PWA
### Severity
Low
### Description
The app is not installable and lacks a custom tab icon.
### Location
- File: `public/manifest.json` (Missing)
- File: `app/layout.js` (Missing links)
### Expected Behavior
Site should have a favicon and be installable on mobile.
### Actual Behavior
Browser default icon is shown; no install prompt.
### Steps to Reproduce
1. Look at browser tab icon.
2. Check network tab for `manifest.json`.
### Impact
Mobile retention.
### Hint
Generate icons and manifest, link in `metadata`.

## Bug 15: [Chore] Run linter (ESLint) and fix style issues
### Category
Code Quality
### Severity
Low
### Description
The codebase contains linting errors, mainly unused variables and missing accessibility attributes (related to Bug 3).
### Location
- Global
### Expected Behavior
`npm run lint` should pass with 0 errors.
### Actual Behavior
Lint command returns warnings/errors.
### Steps to Reproduce
1. Run `npm run lint`.
### Impact
Maintainability.
### Hint
Fix unused vars and prop-types.
