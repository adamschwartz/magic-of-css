(function() {
  var applyToParents, chapters, specialTermTitle;

  chapters = {};

  applyToParents = function(node, apply, count) {
    if (count == null) {
      count = 0;
    }
    if (count === 10) {
      return;
    }
    if (node.parentNode && node.parentNode.tagName !== 'BODY') {
      applyToParents(node.parentNode, apply, count + 1);
    }
    return apply(node);
  };

  specialTermTitle = function(specialTerm) {
    var title;
    title = specialTerm.replace(/\-/g, ' ');
    return title[0].toUpperCase() + title.slice(1);
  };

  chapters.specialTerms = {
    'em': {
      description: '<p>A unit of measurement which represents a multiple of the current font-size in pixels</p>',
      exampleCSS: 'font-size: 2em',
      exampleCSSSelector: '.text',
      exampleHTML: '<div class="text">Some text</div>'
    },
    '%': {
      description: '<p>A relative unit of measurement</p>',
      exampleCSS: 'width: 80%',
      exampleCSSSelector: '.box',
      exampleHTML: '<div class="box"></div>'
    },
    'box-sizing': {
      description: '<p>Controls how element boxes are sized</p>',
      exampleCSS: 'width: 75%;\npadding-left: 25%',
      exampleCSSSelector: '.text-box',
      exampleHTML: '<style>\n    .contextual-example .text-box {\n        padding-right: 0;\n        margin-bottom: 1em\n    }\n    .contextual-example p {\n        text-align: left\n    }\n</style>\n<div class="text-box" style="box-sizing: content-box"><code>content-box</code></div>\n<p>The content is sized to <code>75%</code> so the padding is added.</p>\n<div class="text-box" style="box-sizing: border-box"><code>border-box</code></div>\n<p>The border is sized to <code>75%</code> so the padding is absorbed.</p>'
    },
    'border-box': 'box-sizing',
    'content-box': 'box-sizing',
    'padding-box': 'box-sizing',
    'outline': {
      description: '<p>A line outside the box</p>',
      exampleCSS: 'outline:\n    1.5em double lightgreen',
      exampleCSSSelector: '.box',
      exampleHTML: '<div class="box" style="margin: 1.5em auto"></div>'
    },
    'border-radius': {
      description: '<p>Rounded corners</p>',
      exampleCSS: 'border-radius: 0 1em',
      exampleCSSSelector: '.box',
      exampleHTML: '<div class="box"></div>'
    },
    'box-shadow': {
      description: '<p>A shadow-like styling of an element box</p>',
      exampleCSS: 'box-shadow:\n    0 1em 4em pink,\n    0 .1em red,\n    inset 0 .5em #000',
      exampleCSSSelector: '.box',
      exampleHTML: '<div class="box"></div>'
    },
    'inline-block': {
      description: '<p>A value for the <code>display</code> property.</p>\n<p>The inside of me is formatted as <code>block</code>, but the element myself is laid into the page as an <code>inline</code> element.</p>',
      exampleCSS: 'display: inline-block',
      exampleCSSSelector: '.text-box',
      exampleHTML: 'Text <div class="text-box">Inline block</div> more text...'
    },
    'block': {
      description: '<p>A value for the <code>display</code> property.</p>\n<p>My width is sized by my parent and I can have widths and heights set on me. My height is determined by my content.</p>',
      exampleCSS: 'display: block',
      exampleCSSSelector: '.text-box',
      exampleHTML: 'Text <div class="text-box">Block</div> more text...'
    },
    'inline': {
      description: '<p>A value for the <code>display</code> property.</p>\n<p>My width and height are determined by <em>my contents</em> and widths and heights don’t do anything to me. Think of me like a word flowing in a paragraph.</p>',
      exampleCSS: 'display: inline',
      exampleCSSSelector: '.text-box',
      exampleHTML: 'Text <div class="text-box">Inline</div> more text...'
    },
    'top, left, right, bottom': {
      description: '<p>Positioning properties</p>',
      exampleCSS: 'position: absolute;\ntop: 1em;\nleft: 3em',
      exampleCSSSelector: '.box .box',
      exampleHTML: '<div class="box" style="position: relative">\n    <div class="box" style="background: lightgreen"></div>\n</div>'
    },
    'position': 'top, left, right, bottom',
    'position: absolute': 'top, left, right, bottom',
    'top': 'top, left, right, bottom',
    'left': 'top, left, right, bottom',
    'right': 'top, left, right, bottom',
    'bottom': 'top, left, right, bottom',
    'font-smoothing': {
      description: '<p>Determines the type of antialiasing used in rendering text</p>',
      exampleHTML: '<div class="text-box" style="-webkit-font-smoothing: subpixel-antialiased">subpixel-antialiased</div>\n<div class="text-box" style="-webkit-font-smoothing: antialiased">antialiased</div>\n<div class="text-box" style="-webkit-font-smoothing: none">none</div>'
    },
    '-webkit-font-smoothing': 'font-smoothing',
    '-webkit-font-smoothing: antialiased': 'font-smoothing',
    'antialiased': 'font-smoothing',
    '-webkit-font-smoothing: subpixel-antialiased': 'font-smoothing',
    'subpixel-antialiased': 'font-smoothing',
    'font-family': {
      description: '<p>Family of fonts to be used for the element text</p>',
      exampleHTML: '<span style="font-family: inherit">inherit</span>, <span style="font-family: serif">serif</span>, <span style="font-family: monospace">monospace</span>'
    },
    'font-size': {
      description: '<p>Size of element text. (Also sets the base for <code>em</code> values for child elements.)</p>',
      exampleHTML: '<span style="font-size: inherit">inherit</span>, <span style="font-size: 18px; line-height: 1em">18px</span>, <span style="font-size: 10px">10px</span>'
    },
    'font-weight': {
      description: '<p>The weight (or thickness) of element text</p>',
      exampleHTML: '<span style="font-weight: inherit">inherit</span>, <span style="font-weight: bold">bold</span>, <span style="font-weight: 100">100</span>'
    },
    'font-style': {
      description: '<p>Used for italic</p>',
      exampleHTML: '<span style="font-style: inherit">inherit</span>, <span style="font-style: italic">italic</span>'
    },
    'font-variant': {
      description: '<p>Used for small capitals</p>',
      exampleHTML: '<span style="font-variant: inherit">inherit</span>, <span style="font-variant: small-caps">small-caps</span>'
    },
    'text-align': {
      description: '<p>Horizontal alignement of element text</p>',
      exampleHTML: '<div class="text-box" style="text-align: left">left</div>\n<div class="text-box" style="text-align: center">center</div>\n<div class="text-box" style="text-align: right">right</div>'
    },
    'text-decoration': {
      description: '<p>Decorate element text with a horizontal line above, below, or through the text</p>',
      exampleHTML: '<span style="text-decoration: inherit">inherit</span>, <span style="text-decoration: underline">underline</span>, <span style="text-decoration: overline">overline</span>, <span style="text-decoration: line-through">line-through</span>'
    },
    'text-indent': {
      description: '<p>Indentation of the first line of element text</p>',
      exampleHTML: '<div class="text-box" style="text-indent: none">This sentence has no text indentation.</div>\n<div class="text-box" style="text-indent: 5em">This sentence has <code>5em</code> text indentation.</div>\n<div class="text-box" style="text-indent: -50px">This sentence has <code>-50px</code> text indentation.</div>'
    },
    'text-shadow': {
      description: '<p>A shadow-like styling of element box</p>',
      exampleCSS: 'text-shadow:\n    0 0 .4em hotpink,\n    1em 1em lightgreen',
      exampleCSSSelector: '.text',
      exampleHTML: '<div class="text">Text shadow</div>'
    },
    'text-transform': {
      description: '<p>Typographical styling of <code>text-transform</code></p>',
      exampleHTML: '<div class="text-box" style="text-transform: none">none</div>\n<div class="text-box" style="text-transform: lowercase">lowercase</div>\n<div class="text-box" style="text-transform: uppercase">uppercase</div>\n<div class="text-box" style="text-transform: capitalize">capitalize</div>'
    },
    'letter-spacing': {
      description: '<p>Additional space to the right of each letter of element text</p>',
      exampleHTML: '<div class="text-box" style="letter-spacing: none">none</div>\n<div class="text-box" style="letter-spacing: .05em">.05em</div>\n<div class="text-box" style="letter-spacing: 1em">1em</div>\n<div class="text-box" style="letter-spacing: -2px">-2px</div>'
    },
    'white-space': {
      description: '<p>See <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/white-space">MDN: white-space.</a></p>'
    },
    'white-space: nowrap': 'white-space',
    'line-height': {
      description: 'The height of each line of text',
      exampleHTML: '<div class="text-box" style="line-height: 1em">line-height: 1em</div>\n<div class="text-box" style="line-height: 5em">line-height: 5em</div>'
    },
    'word-spacing': {
      description: 'Additional space to the right of each word of element text',
      exampleHTML: '<div class="text-box" style="word-spacing: none">none none</div>\n<div class="text-box" style="word-spacing: 1em">1em 1em</div>\n<div class="text-box" style="word-spacing: 5em">5em 5em</div>\n<div class="text-box" style="word-spacing: -8px">-8px -8px</div>'
    }
  };

  chapters.init = function() {
    chapters.setupUserAgentDataAttribute();
    chapters.setupContextualCodeExamples();
    chapters.setupSocialFooter();
    return chapters.setupGlobalNavigation();
  };

  chapters.setupUserAgentDataAttribute = function() {
    var _base;
    return typeof (_base = document.documentElement).setAttribute === "function" ? _base.setAttribute('data-user-agent', navigator.userAgent) : void 0;
  };

  chapters.setupContextualCodeExamples = function() {
    var closeContextualDisplay, contextualDisplay, contextualDisplayWrapper, positionContextualDisplay;
    if (!/(Chrome|iPad|iPhone|iPod)/g.test(navigator.userAgent)) {
      return;
    }
    contextualDisplayWrapper = document.createElement('div');
    contextualDisplayWrapper.classList.add('contextual-display-wrapper');
    contextualDisplay = document.createElement('div');
    contextualDisplay.classList.add('contextual-display');
    contextualDisplayWrapper.appendChild(contextualDisplay);
    document.querySelector('.chapter').appendChild(contextualDisplayWrapper);
    document.body.addEventListener('click', function(event) {
      return closeContextualDisplay();
    });
    Array.prototype.slice.call(document.querySelectorAll(':not(pre) > code')).forEach(function(code) {
      var specialTerm, _ref, _ref1;
      for (specialTerm in chapters.specialTerms) {
        if (!(code.textContent === specialTerm)) {
          continue;
        }
        code.classList.add('contextual-code-example');
        return;
      }
      if (((_ref = location.hostname.match(/localhost/)) != null ? _ref.length : void 0) && (((_ref1 = window.console) != null ? _ref1.log : void 0) != null)) {
        return console.log('Could not find special term', code.textContent);
      }
    });
    closeContextualDisplay = function() {
      return Array.prototype.slice.call(document.querySelectorAll('.contextual-open, .contextual-transition, .contextual-open-tree')).forEach(function(element) {
        element.classList.remove('contextual-open');
        element.classList.remove('contextual-open-tree');
        return element.classList.remove('contextual-open-tree-parent');
      });
    };
    Array.prototype.slice.call(document.querySelectorAll('.contextual-code-example')).forEach(function(code) {
      return code.addEventListener('click', function(event) {
        var exampleCSS, exampleHTML, specialTerm, specialTermObj, _ref;
        event.stopPropagation();
        if (event.target.classList.contains('contextual-open-tree')) {
          closeContextualDisplay();
          return;
        }
        specialTermObj = chapters.specialTerms[event.target.textContent];
        specialTerm = event.target.textContent;
        if (typeof specialTermObj === 'string') {
          specialTerm = specialTermObj;
          specialTermObj = chapters.specialTerms[specialTermObj];
        }
        if (specialTermObj != null) {
          closeContextualDisplay();
          exampleCSS = specialTermObj.exampleCSS ? "<pre><code>" + specialTermObj.exampleCSS + "</code></pre>\n<style>\n    .contextual-example " + specialTermObj.exampleCSSSelector + " {\n        " + specialTermObj.exampleCSS + "\n    }\n</style>" : '';
          exampleHTML = specialTermObj.exampleHTML ? "<div class=\"contextual-example\">\n    " + specialTermObj.exampleHTML + "\n</div>" : '';
          contextualDisplay.innerHTML = "<h3>" + (specialTermTitle(specialTerm)) + "</h3>\n<div class=\"contextual-description\">\n    " + specialTermObj.description + "\n</div>\n" + exampleCSS + "\n" + exampleHTML + "\n<a data-contextual-close></a>";
          if ((_ref = contextualDisplay.querySelector('[data-contextual-close]')) != null) {
            _ref.addEventListener('click', function(event) {
              event.stopPropagation();
              return closeContextualDisplay();
            });
          }
          contextualDisplay.clientHeight;
          positionContextualDisplay(code);
          code.parentNode.classList.add('contextual-open-tree-parent');
          contextualDisplay.classList.add('contextual-open');
          applyToParents(code, function(node) {
            return node.classList.add('contextual-open-tree');
          });
          return document.body.classList.add('contextual-open');
        } else {
          return closeContextualDisplay();
        }
      });
    });
    positionContextualDisplay = function(code) {
      var boundingClientRect;
      boundingClientRect = code.getBoundingClientRect();
      contextualDisplay.style.top = (boundingClientRect.top + document.body.scrollTop) + 'px';
      contextualDisplay.clientHeight;
      return contextualDisplayWrapper.style.height = document.body.clientHeight + 'px';
    };
    return window.addEventListener('resize', function() {
      if (document.body.classList.contains('contextual-open')) {
        return positionContextualDisplay(document.querySelector('code.contextual-code-example.contextual-open-tree'));
      }
    });
  };

  chapters.setupSocialFooter = function() {
    var page;
    page = document.querySelector('.page');
    if (!page) {
      return;
    }
    return page.insertAdjacentHTML('beforebegin', "<header class=\"social\">\n    <a class=\"github\"  target=\"_blank\" href=\"http://github.com/adamschwartz/magic-of-css/blob/gh-pages/" + (location.href.split(location.host)[1].replace('/magic-of-css/', '')) + "index.html\">Code on GitHub</a>\n    <a class=\"twitter\" target=\"_blank\" href=\"https://twitter.com/adamfschwartz\"></a>\n</header>");
  };

  chapters.setupGlobalNavigation = function() {
    var html, nav, nextLink, page, previousLink;
    nav = document.querySelector('nav.chapter-navigation');
    page = document.querySelector('.page');
    if (!(nav && page)) {
      return;
    }
    previousLink = nav.querySelector('.previous-chapter');
    nextLink = nav.querySelector('.next-chapter');
    html = '<nav class="chapter-navigation-fullpage">';
    if (previousLink) {
      html += "<a class=\"previous-chapter\" href=\"" + (previousLink.getAttribute('href')) + "\">\n    <span class=\"title\">" + (previousLink.querySelector('.title').textContent) + "</span>\n</a>";
    }
    if (nextLink) {
      html += "<a class=\"next-chapter\" href=\"" + (nextLink.getAttribute('href')) + "\">\n    <span class=\"title\">" + (nextLink.querySelector('.title').textContent) + "</span>\n</a>";
    }
    html += '</nav>';
    return page.insertAdjacentHTML('afterend', html);
  };

  window.chapters = chapters;

  setTimeout(chapters.init);

}).call(this);
