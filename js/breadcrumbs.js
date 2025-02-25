/**
 * Simple Breadcrumb Navigation
 * This script automatically generates breadcrumb navigation based on the current URL
 */
document.addEventListener('DOMContentLoaded', function() {
    // Only add breadcrumbs if we're not on the homepage
    if (window.location.pathname !== '/' && window.location.pathname !== '/index.html') {
        createBreadcrumbs();
    }
});

function createBreadcrumbs() {
    // Get the current path and split it into segments
    let path = window.location.pathname;
    
    // Remove any trailing slash
    if (path.endsWith('/')) {
        path = path.slice(0, -1);
    }
    
    // Split the path into segments
    const segments = path.split('/').filter(segment => segment !== '');
    
    // Create the breadcrumb container
    const breadcrumbNav = document.createElement('nav');
    breadcrumbNav.className = 'flex mb-8';
    breadcrumbNav.setAttribute('aria-label', 'Breadcrumb');
    
    const ol = document.createElement('ol');
    ol.className = 'inline-flex items-center space-x-1 md:space-x-3';
    
    // Add home link
    const homeLi = document.createElement('li');
    homeLi.className = 'inline-flex items-center';
    
    const homeLink = document.createElement('a');
    homeLink.href = getRelativePath('index.html');
    homeLink.className = 'inline-flex items-center text-sm font-medium text-gray-400 hover:text-white';
    homeLink.innerHTML = `
        <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
        </svg>
        Home
    `;
    
    homeLi.appendChild(homeLink);
    ol.appendChild(homeLi);
    
    // Build the breadcrumb trail
    let currentPath = '';
    for (let i = 0; i < segments.length; i++) {
        const segment = segments[i];
        currentPath += '/' + segment;
        
        const li = document.createElement('li');
        
        const divWrapper = document.createElement('div');
        divWrapper.className = 'flex items-center';
        
        // Add separator
        divWrapper.innerHTML = `
            <svg class="w-6 h-6 text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
            </svg>
        `;
        
        // Format the segment name for display
        let displayName = segment;
        
        // Handle file extensions
        if (displayName.includes('.html')) {
            displayName = displayName.replace('.html', '');
        }
        
        // Format the display name
        displayName = displayName
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        
        // Special case for blog
        if (displayName.toLowerCase() === 'blog') {
            displayName = 'Blog';
        }
        
        // If this is the last segment, it's the current page
        if (i === segments.length - 1) {
            li.setAttribute('aria-current', 'page');
            
            const span = document.createElement('span');
            span.className = 'ml-1 text-sm font-medium text-gray-300 md:ml-2';
            span.textContent = displayName;
            
            divWrapper.appendChild(span);
        } else {
            // Create a link for intermediate segments
            const a = document.createElement('a');
            
            // Calculate the relative path
            let relativePath = '';
            for (let j = i; j < segments.length - 1; j++) {
                relativePath += '../';
            }
            relativePath += segment;
            
            // If it's a directory, add index.html
            if (!segment.includes('.')) {
                relativePath += '/index.html';
            }
            
            a.href = relativePath;
            a.className = 'ml-1 text-sm font-medium text-gray-400 hover:text-white md:ml-2';
            a.textContent = displayName;
            
            divWrapper.appendChild(a);
        }
        
        li.appendChild(divWrapper);
        ol.appendChild(li);
    }
    
    breadcrumbNav.appendChild(ol);
    
    // Insert the breadcrumbs at the beginning of the main content
    const mainContent = document.querySelector('main');
    if (mainContent) {
        // For blog posts, insert after the article tag
        const article = mainContent.querySelector('article');
        if (article) {
            article.insertBefore(breadcrumbNav, article.firstChild);
        } else {
            // For other pages, insert at the beginning of main content
            const container = mainContent.querySelector('.container');
            if (container) {
                container.insertBefore(breadcrumbNav, container.firstChild);
            } else {
                mainContent.insertBefore(breadcrumbNav, mainContent.firstChild);
            }
        }
    }
}

// Helper function to calculate relative path to home
function getRelativePath(target) {
    const path = window.location.pathname;
    const segments = path.split('/').filter(segment => segment !== '');
    
    // If we're at root, just return the target
    if (segments.length === 0) {
        return target;
    }
    
    // Calculate how many levels deep we are
    let depth = segments.length;
    
    // If the last segment is a file, reduce depth by 1
    if (segments[segments.length - 1].includes('.')) {
        depth--;
    }
    
    // Build the relative path
    let relativePath = '';
    for (let i = 0; i < depth; i++) {
        relativePath += '../';
    }
    
    return relativePath + target;
}
