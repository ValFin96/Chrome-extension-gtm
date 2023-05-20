// Retrieve the stored GTM items from storage
chrome.storage.local.get('gtmItems', (result) => {
    const gtmItems = result.gtmItems || [];
    const itemsList = document.getElementById('itemsList');
    gtmItems.forEach((item) => {
      const listItem = document.createElement('li');
      listItem.textContent = `Type: ${item.type}, Name: ${item.name}, URL: ${item.url}`;
      itemsList.appendChild(listItem);
    });
  });
  
  
  