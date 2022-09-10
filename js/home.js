(function() {
  var home;

  home = {};

  home.init = function() {
    var base, firedMouseMove, firedScroll, ref, referrerHostname;
    if (typeof (base = document.documentElement).setAttribute === "function") {
      base.setAttribute('data-user-agent', navigator.userAgent);
    }
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
    if (localStorage.hasBeenHereBefore === true) {
      document.body.className += ' has-been-here-before';
    } else {
      localStorage.hasBeenHereBefore = true;
    }
    referrerHostname = (ref = document.referrer.match(/:\/\/(.[^\/]+)/)) != null ? ref[1].split(':')[0] : void 0;
    if (document.location.hostname === referrerHostname || localStorage.hasBeenHereBefore === true || (location.search.match(/fast/) != null)) {
      document.body.className += ' has-been-here-before';
    }
    document.body.className += ' trigger-pageload-animations';
    return setTimeout((function() {
      return document.body.className += ' trigger-pageload-animations-3s';
    }), 3000);
  };

  window.home = home;

}).call(this);
