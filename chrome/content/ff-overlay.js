enjoyreading.onFirefoxLoad = function(event) {
  document.getElementById("contentAreaContextMenu")
          .addEventListener("popupshowing", function (e){ enjoyreading.showFirefoxContextMenu(e); }, false);
};

enjoyreading.showFirefoxContextMenu = function(event) {
  // show or hide the menuitem based on what the context menu is on
  document.getElementById("context-enjoyreading").hidden = gContextMenu.onImage;
};

window.addEventListener("load", function () { enjoyreading.onFirefoxLoad(); }, false);
