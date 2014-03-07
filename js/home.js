(function() {
  var home;
  home = {};
  home.init = function() {
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
    window.addEventListener('scroll', function() {
      if (firedScroll) {
        return;
      }
      firedScroll = true;
      return document.body.className += ' window-has-been-scrolled';
    });
    if (localStorage.hasBeenHereBefore) {
      return document.body.className += ' has-been-here-before';
    } else {
      return localStorage.hasBeenHereBefore = true;
    }
  };
  window.home = home;
  setTimeout(home.init);
}).call(this);
