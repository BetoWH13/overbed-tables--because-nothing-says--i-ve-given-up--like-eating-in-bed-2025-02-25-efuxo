# Landing Page Maintenance Guide

This guide will help you maintain and customize the OverBed™ landing page. Whether you're new to web development or need a quick reference, follow these detailed instructions for common maintenance tasks.

## Table of Contents
- [Updating Text and Styling](#updating-text-and-styling)
- [Managing Links](#managing-links)
- [Adding Privacy and Terms Pages](#adding-privacy-and-terms-pages)
- [Troubleshooting](#troubleshooting)

## Updating Text and Styling

### Header Section
The header contains the logo and navigation menu. To update:

1. **Logo Text**: Find this line in the header:
```html
<a href="#" class="text-xl font-bold text-white hover:text-blue-400">OverBed™</a>
```
Simply replace "OverBed™" with your desired text.

2. **Navigation Links**: Located in:
```html
<div class="hidden md:flex space-x-8">
    <a href="#features" class="text-gray-300 hover:text-white">Features</a>
    <a href="#benefits" class="text-gray-300 hover:text-white">Benefits</a>
    <!-- Additional links -->
</div>
```
Replace the text between `<a>` tags to update menu items.

### Hero Section
Find the main headline and subheading:
```html
<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
    Overbed Tables: Because Nothing Says 'I've Given Up' Like Eating in Bed
</h1>
<p class="text-xl md:text-2xl text-gray-300 mb-12">
    Ditch the Overbed Table – Reclaim Your Dignity & Desk Space
</p>
```
- Update text between the tags
- The classes `text-4xl`, `md:text-5xl`, etc. control text size at different screen sizes
- Don't remove responsive classes (`md:`, `lg:` prefixes)

### Tailwind CSS Tips for Beginners
Common classes used in this page:
- Text sizes: `text-xl`, `text-2xl`, etc.
- Colors: `text-gray-300`, `bg-gray-900`
- Spacing: `px-6` (padding), `mb-8` (margin)
- Hover effects: `hover:text-white`, `hover:bg-blue-700`

To modify styles:
1. Find the element you want to change
2. Locate its class attribute
3. Reference Tailwind's documentation for available classes
4. Add or replace classes while keeping responsive prefixes

## Managing Links

### Internal Navigation Links
Current internal links use anchor tags (#):
```html
<a href="#features">Features</a>
<a href="#benefits">Benefits</a>
<a href="#faq">FAQ</a>
<a href="#contact">Contact</a>
```
To update:
1. Identify the section ID you're linking to
2. Add # before the ID in the href
3. Ensure the target section has matching ID attribute

### External Links
The main call-to-action button links to:
```html
<a href="https://shrsl.com/4s78c" class="inline-block bg-blue-600">
    Reclaim Your Dignity
</a>
```
To update:
1. Replace the URL in href=""
2. Test the link works
3. Consider adding `target="_blank"` for external links

### Email Links
Current email link:
```html
<a href="mailto:info@overbed-tables.com">info@overbed-tables.com</a>
```
Update both the href and displayed text with your email address.

## Adding Privacy and Terms Pages

### Current Footer Links
```html
<div>
    <h3 class="text-lg font-semibold mb-4">Legal</h3>
    <ul class="space-y-2">
        <li><a href="#" class="text-gray-400 hover:text-white">Privacy Policy</a></li>
        <li><a href="#" class="text-gray-400 hover:text-white">Terms of Service</a></li>
    </ul>
</div>
```

### Steps to Add Policy Pages
1. Create new files:
   - `privacy.html`
   - `terms.html`

2. Update the href attributes:
```html
<li><a href="privacy.html" class="text-gray-400 hover:text-white">Privacy Policy</a></li>
<li><a href="terms.html" class="text-gray-400 hover:text-white">Terms of Service</a></li>
```

3. Ensure consistent styling by copying these classes to new page links:
   - `text-gray-400`
   - `hover:text-white`
   - `transition-colors`
   - `duration-300`

## Troubleshooting

Common Issues:
1. **Broken Internal Links**
   - Check that href="#section-name" matches the section's id="section-name"
   - IDs are case-sensitive
   - Remove spaces in IDs

2. **Responsive Design Problems**
   - Keep all responsive classes (`md:`, `lg:` prefixes)
   - Test on different screen sizes
   - Don't remove the viewport meta tag

3. **Styling Issues**
   - Verify Tailwind CSS CDN link is working
   - Check for typos in class names
   - Maintain the class order for proper specificity

Need help? Contact support or refer to:
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [HTML Reference](https://developer.mozilla.org/en-US/docs/Web/HTML)