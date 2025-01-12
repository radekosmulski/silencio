// This script will be injected into x.com pages
console.log('Silencio extension is active');

function handleTabs() {
  // Find all presentation divs
  const presentationDivs = document.querySelectorAll('div[role="presentation"]');
  
  presentationDivs.forEach(div => {
    // Check if this div contains the "For you" text
    if (div.textContent.includes('For you')) {
      // Check if "For you" is selected
      const forYouTab = div.querySelector('a[aria-selected="true"]');
      if (forYouTab) {
        // Find the Following tab by looking for its text content
        const allSpans = document.querySelectorAll('span');
        const followingSpan = Array.from(allSpans).find(span => span.textContent === 'Following');
        
        if (followingSpan) {
          console.log('Found Following tab:', followingSpan);
          const followingLink = followingSpan.closest('a[role="tab"]');
          if (followingLink) {
            console.log('Clicking Following tab');
            followingLink.click();
          }
        }
      }
      div.remove();
    }
  });
}

// Run on page load
document.addEventListener('DOMContentLoaded', () => {
  handleTabs();
});

// Also run periodically as Twitter is a SPA and content might be loaded dynamically
setInterval(handleTabs, 1000); 