/* global chrome */
chrome.pageAction.onClicked.addListener(function (tab) {
  copyURLTest(tab.url);
});

chrome.tabs.onUpdated.addListener(function (tabId) {
  chrome.tabs.get(tabId, function (tab) {
    if (tab.url.substring(0,5).lastIndexOf('opera') === -1) {
      chrome.pageAction.show(tabId);
    }
  });  
});

function copyURLTest(url) {
  var textArea = document.createElement("textarea");
  textArea.value = url;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  textArea.remove();
}