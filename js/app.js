(function() {
  var app;
  app = {};
  app.init = function() {
    var firedMouseMove, firedScroll;
    document.body.className += ' trigger-pageload-animations';
    firedMouseMove = false;
    window.addEventListener('mousemove', function() {
      if (firedMouseMove) {
        return;
      }
      firedMouseMove = true;
      return document.body.className += ' mouse-has-moved';
    });
    firedScroll = false;
    return document.querySelector('.page-scroll').addEventListener('scroll', function() {
      if (firedScroll) {
        return;
      }
      firedScroll = true;
      return document.body.className += ' window-has-been-scrolled';
    });
  };
  window.app = app;
  setTimeout(app.init);
}).call(this);
