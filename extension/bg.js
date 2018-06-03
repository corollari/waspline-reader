chrome.browserAction.onClicked.addListener(function (tab) { //Fired when User Clicks ICON
      chrome.tabs.executeScript(
          tab.id,
//	  {code: "alert();"});
          {"file": "contentScript.js"});
});
