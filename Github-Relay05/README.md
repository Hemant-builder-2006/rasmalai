# 🐛 Bug Bounty - Batch 5
Welcome to **Batch 5** of the CampusMart Bug Bounty Program! This batch focuses on **Reliability, Polish & SEO**, helping you master performance optimization, accessibility standards, security hardening, and final user experience touches.

## 📋 Table of Contents
1. [About Batch 5](#-about-batch-5)
2. [Prerequisites](#-prerequisites)
3. [Getting Started](#-getting-started)
4. [Bug Overview](#-bug-overview)
5. [Bug Fixing Workflow](#-bug-fixing-workflow)
6. [Testing & Verification](#-testing--verification)
7. [Submission Guidelines](#-submission-guidelines)
8. [Resources](#-resources)

## 🎯 About Batch 5
**Focus Area:** Reliability, Polish, SEO & Security  
**Total Bugs:** 15 issues  
**Difficulty:** Intermediate to Advanced

This batch contains bugs related to:
*   **Performance** - Core Web Vitals (FCP), lazy loading, and rendering optimization
*   **SEO & Meta Tags** - Social previews, Open Graph tags, and indexing
*   **Accessibility (a11y)** - Screen reader support, semantic HTML, and keyboard navigation
*   **Security** - XSS prevention and input sanitization
*   **User Experience** - Micro-interactions (toasts, menus), layout stability, and visual hierarchy

## ✅ Prerequisites
Before starting Batch 5, ensure you have:
*   ✅ Completed previous batches (or are comfortable with the codebase)
*   ✅ Node.js (v18+) and npm installed
*   ✅ MongoDB running (local or Atlas)
*   ✅ Basic understanding of:
    *   Next.js App Router & Metadata API
    *   Web Performance (Lighthouse/Core Web Vitals)
    *   Web Accessibility Guidelines (WCAG)
    *   React Hooks (`useEffect`, `useState`)

## 🚀 Getting Started

### 1. Ensure Your Environment is Ready
```bash
# Navigate to project directory
cd Bug-Bounty

# Install dependencies
npm install

# Run the development server
npm run dev
```

### 2. Review the Documentation
*   **`BUGS.md`** - Complete list of all 15 bugs with detailed reproduction steps.
*   **`BUG_FIX_GUIDE.md`** - Technical hints and solution guides (use if stuck).

### 3. Choose Your Starting Point
*   **Recommended:** Start with **Medium Priority** UI bugs to get familiar with the code.
*   **Advanced:** Tackle the **High Priority** Security and Performance bugs first if you have experience.

## 🐞 Bug Overview

### High Priority (5 bugs)
*   **Bug #9:** [Security] Sanitize user input in "Description" field (Critical XSS Vulnerability)
*   **Bug #1:** [SEO] Add dynamic Open Graph meta tags for Product pages
*   **Bug #2:** [Performance] Reduce First Contentful Paint (FCP) - Fix eager loading
*   **Bug #3:** [A11y] Fix Accessibility: Missing `alt` tags on images
*   **Bug #13:** [Link Rot] Fix broken links in "Terms of Service" page

### Medium Priority (5 bugs)
*   **Bug #8:** [Hydration] Fix "Hydration Mismatch" errors in console
*   **Bug #5:** [UX] Mobile Menu toggle does not close when clicking outside
*   **Bug #7:** [UX] Implement "Toast" notifications globally (replace `alert()`)
*   **Bug #10:** [UI] Footer overlaps content on short pages
*   **Bug #4:** [UX] Add "Skeleton Loaders" on Dashboard (Fix layout shift)

### Low Priority (5 bugs)
*   **Bug #6:** [Refactor] Replace hardcoded strings with i18n keys
*   **Bug #14:** [PWA] Add favicon and app manifest
*   **Bug #11:** [UX] Add a "Back to Top" button on long pages
*   **Bug #12:** [Design] Improve typography hierarchy on Landing page
*   **Bug #15:** [Chore] Run linter (ESLint) and fix style issues

## 🔧 Bug Fixing Workflow

### Step 1: Read the Bug Report
Open `BUGS.md`. Each bug includes:
*   Category & Severity
*   Description & Expected Behavior
*   Files involved
*   Impact Analysis

### Step 2: Reproduce the Bug
1.  Follow the "Steps to Reproduce" exactly.
2.  Observe the issue in your local environment.
3.  Use Chrome DevTools (Console, Network, Elements) to inspect.

### Step 3: Implement the Fix
Create a new branch for your fix:
```bash
git checkout -b fix/batch5-bug-<number>-<description>
# Example: git checkout -b fix/batch5-bug-9-xss-fix
```
Make your changes, save, and verify.

### Step 4: Verify the Fix
*   ✅ Bug no longer occurs.
*   ✅ No console errors (especially for Bug #8).
*   ✅ Performance score improved (for Bug #2).
*   ✅ Security exploit fails (for Bug #9).

### Step 5: Commit changes
```bash
git add .
git commit -m "Fix Batch 5 Bug #<number>: <Description>"
```

## 🧪 Testing & Verification
### Manual Testing
*   **Device Testing:** Check on Mobile (Responsive mode) for Menu (#5) and PWA (#14) bugs.
*   **Browser Testing:** Verify Layout (#10) and Hydration (#8) across Chrome/Firefox.
*   **Audit Tools:** 
    *   Run **Lighthouse** for Performance (#2) and SEO (#1).
    *   Use **Wave** or **Axe DevTools** for Accessibility (#3).

### Specific Scenarios
*   **XSS (#9):** Try injecting `<script>alert('xss')</script>` in the description and ensure it renders as text or is stripped.
*   **SEO (#1):** Use a tool like `metatags.io` or inspect `<head>` to see `og:image`.
*   **Links (#13):** Click every single link in the Footer and Terms page.

## 📤 Submission Guidelines

### Submission Format
Create a Pull Request with:
*   **Title:** Batch 5 - Fix Bug #<number>: <Short Description>
*   **Description:**
    *   **Bug Fixed:** (e.g., Bug #9 XSS Validity)
    *   **Solution:** Brief technical explanation (e.g., "Used `dompurify` to sanitize input").
    *   **Evidence:** Screenshots of the fix or Lighthouse scores.

## 📚 Resources
*   **Documentation:**
    *   [Next.js Metadata API](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
    *   [Web Vitals & FCP](https://web.dev/articles/fcp)
    *   [WCAG Alert vs Toast](https://www.w3.org/WAI/ARIA/apg/patterns/alert/)
    *   [DOMPurify](https://github.com/cure53/DOMPurify)
*   **Tools:**
    *   [React Hot Toast](https://react-hot-toast.com/) / [Sonner](https://sonner.emilkowal.ski/)
    *   [ESLint](https://eslint.org/)

## 💡 Tips for Success
*   **Security First:** Always sanitize user input. Never trust data from the client.
*   **Performance:** Images are the biggest drag on FCP. Load them lazily unless they are above the fold.
*   **Clean Code:** Use constants for strings (#6) and keep components small.
*   **Mobile First:** Always test the mobile menu and layout on small screens.

## 🏆 Completion Criteria
You've successfully completed Batch 5 when:
*   ✅ All **15 bugs** are resolved.
*   ✅ Lighthouse Performance score is green (>90).
*   ✅ No "hydration mismatch" warnings in the console.
*   ✅ The app is installable (PWA).

Good luck with **Batch 5**! Let's make this app production-ready! 🚀✨

**Last Updated:** January 2026  
**Version:** 1.0.0  
**Batch:** 5 (Reliability & Polish)
