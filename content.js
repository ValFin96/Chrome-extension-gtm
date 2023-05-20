// Function to detect tags, variables, and triggers and add highlighting
function detectAndHighlightGTMElements() {
    // Code to detect tags, variables, and triggers and add highlighting goes here
    // Use DOM manipulation techniques to identify and highlight the desired elements
    // Example code to highlight tags:
    const tags = document.querySelectorAll('.gtm-tag');
    tags.forEach((tag) => {
      tag.classList.add('gtm-highlight');
    });
  }
  
  // Execute the detection and highlighting when the DOM is ready
  document.addEventListener('DOMContentLoaded', detectAndHighlightGTMElements);
  
  
  