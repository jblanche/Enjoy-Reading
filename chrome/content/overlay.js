var enjoyreading = {
  onLoad: function() {
    // initialization code
    this.initialized = true;
    this.strings = document.getElementById("enjoyreading-strings");
    
    
    
  },

  onMenuItemCommand: function(e) {
    var button = document.getElementById('enjoyreading-toolbar-button');
    var readabilityBody = content.document.getElementById('readabilityBody') ;
    if (!readabilityBody) {// desactivated

      document.getElementById('enjoyreading-toolbar-button').classList.add('active');
      document.getElementById('enjoyreading-toolbar-button').classList.remove('infactive');
      
      _enjoyreading_script = content.document.createElement('script');
      _enjoyreading_script.type = 'text/javascript';
      _enjoyreading_script.src = "chrome://enjoyreading/content/readability.js";
      content.document.documentElement.appendChild(_enjoyreading_script);
      _enjoyreading_css = content.document.createElement('link');
      _enjoyreading_css.rel = 'stylesheet';
      _enjoyreading_css.href = 'chrome://enjoyreading/content/readability.css';
      _enjoyreading_css.type = 'text/css';
      _enjoyreading_css.media = 'all';
      content.document.documentElement.appendChild(_enjoyreading_css);
      _enjoyreading_print_css = content.document.createElement('link');
      _enjoyreading_print_css.rel = 'stylesheet';
      _enjoyreading_print_css.href = 'chrome://enjoyreading/content/readability-print.css';
      _enjoyreading_print_css.media = 'print';
      _enjoyreading_print_css.type = 'text/css';
      content.document.getElementsByTagName('head')[0].appendChild(_enjoyreading_print_css);
      return true;
    } 
    else {
      document.getElementById('enjoyreading-toolbar-button').classList.remove('active');
      document.getElementById('enjoyreading-toolbar-button').classList.add('inactive');
      return content.location.reload();
    }
  },

  onToolbarButtonCommand: function(e) {
    // just reuse the function above.  you can change this, obviously!
    enjoyreading.onMenuItemCommand(e);
  }
};

window.addEventListener("load", function () { enjoyreading.onLoad(); }, false);


Application.getExtensions(function (extensions) {
    var extension = extensions.get('enjoyreading@jblanche.fr');
    if (extension.firstRun) {
      var myId    = "enjoyreading-toolbar-button"; // ID of button to add
      var afterId = "urlbar-container";    // ID of element to insert after
      var navBar  = document.getElementById("nav-bar");
      var curSet  = navBar.currentSet.split(",");
      console.log(curSet.indexOf(myId));
      if (curSet.indexOf(myId) == -1) {
        var pos = curSet.indexOf(afterId) + 1 || curSet.length;
        var set = curSet.slice(0, pos).concat(myId).concat(curSet.slice(pos));

        navBar.setAttribute("currentset", set.join(","));
        navBar.currentSet = set.join(",");
        document.persist(navBar.id, "currentset");
        try {
          BrowserToolboxCustomizeDone(true);
        }
       catch (e) {}
      }
    }
});