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
      exampleHTML: '<div class="box" style="margin-top: 1.5em"></div>'
    },
    'border-radius': {
      description: '<p>Rounded corners</p>',
      exampleCSS: 'border-radius: 0 1em',
      exampleCSSSelector: '.box',
      exampleHTML: '<div class="box"></div>'
    },
    'box-shadow': {
      description: '<p>A shadow-like styling</p>',
      exampleCSS: 'box-shadow:\n    0 1em 4em pink,\n    0 .1em red,\n    inset 0 .5em #000',
      exampleCSSSelector: '.box',
      exampleHTML: '<div class="box"></div>'
    }
  };

  chapters.init = function() {
    return chapters.setupContextualCodeExamples();
  };

  chapters.setupContextualCodeExamples = function() {
    var closeContextualDisplay, contextualDisplay, contextualDisplayWrapper, positionContextualDisplay;
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
      var specialTerm;
      for (specialTerm in chapters.specialTerms) {
        if (!(code.textContent === specialTerm)) {
          continue;
        }
        code.classList.add('contextual-code-example');
        return;
      }
      return console.log('Could not find special term', code.textContent);
    });
    closeContextualDisplay = function() {
      return Array.prototype.slice.call(document.querySelectorAll('.contextual-open, .contextual-transition, .contextual-open-tree')).forEach(function(element) {
        element.classList.remove('contextual-open');
        return element.classList.remove('contextual-open-tree');
      });
    };
    Array.prototype.slice.call(document.querySelectorAll('.contextual-code-example')).forEach(function(code) {
      return code.addEventListener('click', function(event) {
        var specialTerm, specialTermObj, _ref;
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
          contextualDisplay.innerHTML = "<h3>" + (specialTermTitle(specialTerm)) + "</h3>\n<div class=\"contextual-description\">\n    " + specialTermObj.description + "\n</div>\n<pre><code>" + specialTermObj.exampleCSS + "</code></pre>\n<style>\n    .contextual-example " + specialTermObj.exampleCSSSelector + " {\n        " + specialTermObj.exampleCSS + "\n    }\n</style>\n<div class=\"contextual-example\">\n    " + specialTermObj.exampleHTML + "\n</div>\n<a data-contextual-close></a>";
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

  window.chapters = chapters;

  setTimeout(chapters.init);

}).call(this);
