// Context menu click event listener
chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === 'addToGTM') {
      const tagData = {
        type: info.selectionText.startsWith('gtm.') ? 'Tag' : (info.selectionText.startsWith('{{') ? 'Variable' : 'Trigger'),
        name: info.selectionText,
        url: tab.url
      };
      chrome.storage.local.get('gtmItems', (result) => {
        const gtmItems = result.gtmItems || [];
        gtmItems.push(tagData);
        chrome.storage.local.set({ gtmItems }, () => {
          console.log('GTM item added:', tagData);
        });
      });
    }
  });
  
  // Create context menu
  chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: 'addToGTM',
      title: 'Add to GTM Copy Paste Extension',
      contexts: ['selection']
    });
  });
  
  
  