(function() {
  var app;
  app = {};
  app.init = function() {
    return $('.animated-rainbow').addClass('animated');
  };
  window.app = app;
  $(app.init);
}).call(this);
