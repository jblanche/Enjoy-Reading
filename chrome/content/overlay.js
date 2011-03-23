var enjoyreading = {
  onLoad: function() {
    // initialization code
    this.initialized = true;
    this.strings = document.getElementById("enjoyreading-strings");
  },

  onMenuItemCommand: function(e) {
    _enjoyreading_script = content.document.createElement('script');
    _enjoyreading_script.type = 'text/javascript';
    _enjoyreading_script.src = "chrome://enjoyreading/content/readability.js"
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
  },

  onToolbarButtonCommand: function(e) {
    // just reuse the function above.  you can change this, obviously!
    enjoyreading.onMenuItemCommand(e);
  }
};

window.addEventListener("load", function () { enjoyreading.onLoad(); }, false);


