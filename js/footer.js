(function() {
  var setupCarbonAds;

  setupCarbonAds = function() {
    var el, page, script;
    page = document.querySelector('.page');
    if (!page) {
      return;
    }
    el = document.createElement('carbonads');
    el.innerHTML = '<style>\n    /* Carbon Ads styles */\n\n    .carbonads-wrapper {\n        position: absolute;\n        top: 0;\n        left: 0;\n        background: #eee;\n    }\n\n    #carbonads {\n        display: block;\n        overflow: hidden;\n        line-height: 1.33;\n        width: 162px;\n        padding: 11px 16px 0;\n        max-width: 100%;\n        font-size: 12px;\n        background: #eee;\n        margin: 0 auto;\n    }\n\n    #carbonads span {\n        position: relative;\n        display: block;\n        overflow: hidden;\n    }\n\n    .carbon-img img {\n        display: block;\n        margin-bottom: 7px;\n    }\n\n    .carbon-text {\n        color: inherit;\n        display: block;\n        float: left;\n        text-align: left;\n        text-decoration: none;\n    }\n\n    .carbon-poweredby {\n        color: #b9b9b9;\n        text-decoration: none;\n        display: block;\n        text-align: left;\n        font-size: 10px;\n        margin-top: 2px;\n        margin-bottom: 11px;\n    }\n\n    @media (max-width: 700px) {\n        .page {\n            padding-top: 22em\n        }\n\n        .carbonads-wrapper {\n            width: 100%;\n        }\n    }\n\n    /* Modifications to support Carbon Ads */\n\n    html.home-page .carbonads-wrapper {\n      transition: opacity 800ms 1300ms ease-in-out;\n      opacity: 0;\n    }\n\n    html.home-page .trigger-pageload-animations .carbonads-wrapper {\n        opacity: 1;\n    }\n\n    html.home-page .window-has-been-scrolled .carbonads-wrapper, html.home-page .has-been-here-before .carbonads-wrapper {\n        transition: none;\n    }\n\n    html header.social a.twitter:before {\n        opacity: 1;\n    }\n\n    html header.social a.github {\n        top: 3.5em;\n        right: 0;\n        left: auto;\n        padding: .25em 2em 1em;\n    }\n\n    html nav.chapter-navigation-fullpage .previous-chapter {\n        display: none !important\n    }\n\n    @media (max-width: 700px) {\n        .page {\n            padding-top: 16em\n        }\n    }\n</style>\n<div class="carbonads-wrapper"></div>';
    document.body.appendChild(el);
    script = document.createElement('script');
    script.async = true;
    script.id = '_carbonads_js';
    script.src = '//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=adamschwartzco';
    return document.querySelector('.carbonads-wrapper').appendChild(script);
  };

  setupCarbonAds();

}).call(this);
