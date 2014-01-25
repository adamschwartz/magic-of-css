(function() {
  var app;
  app = {};
  app.init = function() {
    return $('body').addClass('trigger-pageload-animations');
  };
  window.app = app;
  $(app.init);
}).call(this);
