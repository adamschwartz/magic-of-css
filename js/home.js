(function() {
  var base, firedScroll, ref, referrerHostname;

  if (typeof (base = document.documentElement).setAttribute === "function") {
    base.setAttribute('data-user-agent', navigator.userAgent);
  }

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

  if (location.search.match(/animate/) == null) {
    if (document.location.hostname === referrerHostname || localStorage.hasBeenHereBefore === true || (location.search.match(/fast/) != null)) {
      document.body.className += ' has-been-here-before';
    }
  }

  document.body.className += ' trigger-pageload-animations';

  setTimeout((function() {
    return document.body.className += ' trigger-pageload-animations-3s';
  }), 3000);

}).call(this);
