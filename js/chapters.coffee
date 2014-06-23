chapters = {}

applyToParents = (node, apply, count = 0) ->
    if count is 10
        return
    if node.parentNode and node.parentNode.tagName isnt 'BODY'
        applyToParents node.parentNode, apply, count + 1
    apply node

specialTermTitle = (specialTerm) ->
    title = specialTerm.replace(/\-/g, ' ')
    title[0].toUpperCase() + title[1..]

chapters.specialTerms =
    'em':
        description: '<p>A unit of measurement which represents a multiple of the current font-size in pixels</p>'
        exampleCSS: 'font-size: 2em'
        exampleCSSSelector: '.text'
        exampleHTML: '<div class="text">Some text</div>'

    '%':
        description: '<p>A relative unit of measurement</p>'
        exampleCSS: 'width: 80%'
        exampleCSSSelector: '.box'
        exampleHTML: '<div class="box"></div>'

    'box-sizing':
        description: '<p>Controls how element boxes are sized</p>'
        exampleCSS: 'width: 75%;\npadding-left: 25%'
        exampleCSSSelector: '.text-box'
        exampleHTML: '''
            <style>
                .contextual-example .text-box {
                    padding-right: 0;
                    margin-bottom: 1em
                }
                .contextual-example p {
                    text-align: left
                }
            </style>
            <div class="text-box" style="box-sizing: content-box"><code>content-box</code></div>
            <p>The content is sized to <code>75%</code> so the padding is added.</p>
            <div class="text-box" style="box-sizing: border-box"><code>border-box</code></div>
            <p>The border is sized to <code>75%</code> so the padding is absorbed.</p>
        '''

    'border-box': 'box-sizing'
    'content-box': 'box-sizing'
    'padding-box': 'box-sizing'

    'outline':
        description: '<p>A line outside the box</p>'
        exampleCSS: 'outline:\n    1.5em double lightgreen'
        exampleCSSSelector: '.box'
        exampleHTML: '<div class="box" style="margin: 1.5em auto"></div>'

    'border-radius':
        description: '<p>Rounded corners</p>'
        exampleCSS: 'border-radius: 0 1em'
        exampleCSSSelector: '.box'
        exampleHTML: '<div class="box"></div>'

    'box-shadow':
        description: '<p>A shadow-like styling of an element box</p>'
        exampleCSS: 'box-shadow:\n    0 1em 4em pink,\n    0 .1em red,\n    inset 0 .5em #000'
        exampleCSSSelector: '.box'
        exampleHTML: '<div class="box"></div>'

    'inline-block':
        description: '''
            <p>A value for the <code>display</code> property.</p>
            <p>The inside of me is formatted as <code>block</code>, but the element myself is laid into the page as an <code>inline</code> element.</p>
        '''
        exampleCSS: 'display: inline-block'
        exampleCSSSelector: '.text-box'
        exampleHTML: 'Text <div class="text-box">Inline block</div> more text...'

    'block':
        description: '''
            <p>A value for the <code>display</code> property.</p>
            <p>My width is sized by my parent and I can have widths and heights set on me. My height is determined by my content.</p>
        '''
        exampleCSS: 'display: block'
        exampleCSSSelector: '.text-box'
        exampleHTML: 'Text <div class="text-box">Block</div> more text...'

    'inline':
        description: '''
            <p>A value for the <code>display</code> property.</p>
            <p>My width and height are determined by <em>my contents</em> and widths and heights don’t do anything to me. Think of me like a word flowing in a paragraph.</p>
        '''
        exampleCSS: 'display: inline'
        exampleCSSSelector: '.text-box'
        exampleHTML: 'Text <div class="text-box">Inline</div> more text...'

    'top, left, right, bottom':
        description: '<p>Positioning properties</p>'
        exampleCSS: 'position: absolute;\ntop: 1em;\nleft: 3em'
        exampleCSSSelector: '.box .box'
        exampleHTML: '''
            <div class="box" style="position: relative">
                <div class="box" style="background: lightgreen"></div>
            </div>
        '''

    'position': 'top, left, right, bottom'
    'position: absolute': 'top, left, right, bottom'

    'top': 'top, left, right, bottom'
    'left': 'top, left, right, bottom'
    'right': 'top, left, right, bottom'
    'bottom': 'top, left, right, bottom'

    'font-smoothing':
        description: '<p>Determines the type of antialiasing used in rendering text</p>'
        exampleHTML: '''
            <div class="text-box" style="-webkit-font-smoothing: subpixel-antialiased">subpixel-antialiased</div>
            <div class="text-box" style="-webkit-font-smoothing: antialiased">antialiased</div>
            <div class="text-box" style="-webkit-font-smoothing: none">none</div>
        '''

    '-webkit-font-smoothing': 'font-smoothing'
    '-webkit-font-smoothing: antialiased': 'font-smoothing'
    'antialiased': 'font-smoothing'
    '-webkit-font-smoothing: subpixel-antialiased': 'font-smoothing'
    'subpixel-antialiased': 'font-smoothing'

    'font-family':
        description: '<p>Family of fonts to be used for the element text</p>'
        exampleHTML: '<span style="font-family: inherit">inherit</span>, <span style="font-family: serif">serif</span>, <span style="font-family: monospace">monospace</span>'

    'font-size':
        description: '<p>Size of element text. (Also sets the base for <code>em</code> values for child elements.)</p>'
        exampleHTML: '<span style="font-size: inherit">inherit</span>, <span style="font-size: 18px; line-height: 1em">18px</span>, <span style="font-size: 10px">10px</span>'

    'font-weight':
        description: '<p>The weight (or thickness) of element text</p>'
        exampleHTML: '<span style="font-weight: inherit">inherit</span>, <span style="font-weight: bold">bold</span>, <span style="font-weight: 100">100</span>'

    'font-style':
        description: '<p>Used for italic</p>'
        exampleHTML: '<span style="font-style: inherit">inherit</span>, <span style="font-style: italic">italic</span>'

    'font-variant':
        description: '<p>Used for small capitals</p>'
        exampleHTML: '<span style="font-variant: inherit">inherit</span>, <span style="font-variant: small-caps">small-caps</span>'

    'text-align':
        description: '<p>Horizontal alignement of element text</p>'
        exampleHTML: '''
            <div class="text-box" style="text-align: left">left</div>
            <div class="text-box" style="text-align: center">center</div>
            <div class="text-box" style="text-align: right">right</div>
        '''

    'text-decoration':
        description: '<p>Decorate element text with a horizontal line above, below, or through the text</p>'
        exampleHTML: '<span style="text-decoration: inherit">inherit</span>, <span style="text-decoration: underline">underline</span>, <span style="text-decoration: overline">overline</span>, <span style="text-decoration: line-through">line-through</span>'

    'text-indent':
        description: '<p>Indentation of the first line of element text</p>'
        exampleHTML: '''
            <div class="text-box" style="text-indent: none">This sentence has no text indentation.</div>
            <div class="text-box" style="text-indent: 5em">This sentence has <code>5em</code> text indentation.</div>
            <div class="text-box" style="text-indent: -50px">This sentence has <code>-50px</code> text indentation.</div>
        '''

    'text-shadow':
        description: '<p>A shadow-like styling of element box</p>'
        exampleCSS: 'text-shadow:\n    0 0 .4em hotpink,\n    1em 1em lightgreen'
        exampleCSSSelector: '.text'
        exampleHTML: '<div class="text">Text shadow</div>'

    'text-transform':
        description: '<p>Typographical styling of <code>text-transform</code></p>'
        exampleHTML: '''
            <div class="text-box" style="text-transform: none">none</div>
            <div class="text-box" style="text-transform: lowercase">lowercase</div>
            <div class="text-box" style="text-transform: uppercase">uppercase</div>
            <div class="text-box" style="text-transform: capitalize">capitalize</div>
        '''

    'letter-spacing':
        description: '<p>Additional space to the right of each letter of element text</p>'
        exampleHTML: '''
            <div class="text-box" style="letter-spacing: none">none</div>
            <div class="text-box" style="letter-spacing: .05em">.05em</div>
            <div class="text-box" style="letter-spacing: 1em">1em</div>
            <div class="text-box" style="letter-spacing: -2px">-2px</div>
        '''

    'white-space':
        description: '<p>See <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/white-space">MDN: white-space.</a></p>'

    'white-space: nowrap': 'white-space'

    'line-height':
        description: 'The height of each line of text'
        exampleHTML: '''
            <div class="text-box" style="line-height: 1em">line-height: 1em</div>
            <div class="text-box" style="line-height: 5em">line-height: 5em</div>
        '''

    'word-spacing':
        description: 'Additional space to the right of each word of element text'
        exampleHTML: '''
            <div class="text-box" style="word-spacing: none">none none</div>
            <div class="text-box" style="word-spacing: 1em">1em 1em</div>
            <div class="text-box" style="word-spacing: 5em">5em 5em</div>
            <div class="text-box" style="word-spacing: -8px">-8px -8px</div>
        '''

chapters.init = ->
    chapters.setupUserAgentDataAttribute()
    chapters.setupContextualCodeExamples()
    chapters.setupSocialFooter()
    chapters.setupGlobalNavigation()

chapters.setupUserAgentDataAttribute = ->
    document.documentElement.setAttribute? 'data-user-agent', navigator.userAgent

chapters.setupContextualCodeExamples = ->
    return unless /(Chrome|iPad|iPhone|iPod)/g.test navigator.userAgent

    contextualDisplayWrapper = document.createElement('div')
    contextualDisplayWrapper.classList.add 'contextual-display-wrapper'

    contextualDisplay = document.createElement('div')
    contextualDisplay.classList.add 'contextual-display'

    contextualDisplayWrapper.appendChild contextualDisplay

    document.querySelector('.chapter').appendChild contextualDisplayWrapper

    document.body.addEventListener 'click', (event) ->
        closeContextualDisplay()

    Array::slice.call(document.querySelectorAll(':not(pre) > code')).forEach (code) ->
        for specialTerm of chapters.specialTerms when code.textContent is specialTerm
            code.classList.add 'contextual-code-example'
            return

        if location.hostname.match(/localhost/)?.length and window.console?.log?
            console.log 'Could not find special term', code.textContent

    closeContextualDisplay = ->
        Array::slice.call(document.querySelectorAll('.contextual-open, .contextual-transition, .contextual-open-tree')).forEach (element) ->
            element.classList.remove 'contextual-open'
            element.classList.remove 'contextual-open-tree'
            element.classList.remove 'contextual-open-tree-parent'

    Array::slice.call(document.querySelectorAll('.contextual-code-example')).forEach (code) ->
        code.addEventListener 'click', (event) ->
            event.stopPropagation()

            if event.target.classList.contains 'contextual-open-tree'
                closeContextualDisplay()
                return

            specialTermObj = chapters.specialTerms[event.target.textContent]
            specialTerm = event.target.textContent

            if typeof specialTermObj is 'string'
                specialTerm = specialTermObj
                specialTermObj = chapters.specialTerms[specialTermObj]

            if specialTermObj?
                closeContextualDisplay()

                exampleCSS = if specialTermObj.exampleCSS then """
                    <pre><code>#{ specialTermObj.exampleCSS }</code></pre>
                    <style>
                        .contextual-example #{ specialTermObj.exampleCSSSelector } {
                            #{ specialTermObj.exampleCSS }
                        }
                    </style>
                """ else ''

                exampleHTML = if specialTermObj.exampleHTML then """
                    <div class="contextual-example">
                        #{ specialTermObj.exampleHTML }
                    </div>
                """ else ''

                contextualDisplay.innerHTML = """
                    <h3>#{ specialTermTitle specialTerm }</h3>
                    <div class="contextual-description">
                        #{ specialTermObj.description }
                    </div>
                    #{ exampleCSS }
                    #{ exampleHTML }
                    <a data-contextual-close></a>
                """

                contextualDisplay.querySelector('[data-contextual-close]')?.addEventListener 'click', (event) ->
                    event.stopPropagation()
                    closeContextualDisplay()

                contextualDisplay.clientHeight

                positionContextualDisplay code
                code.parentNode.classList.add 'contextual-open-tree-parent'

                contextualDisplay.classList.add 'contextual-open'
                applyToParents code, (node) -> node.classList.add 'contextual-open-tree'
                document.body.classList.add 'contextual-open'

            else
                closeContextualDisplay()

    positionContextualDisplay = (code) ->
        boundingClientRect = code.getBoundingClientRect()
        contextualDisplay.style.top = (boundingClientRect.top + document.body.scrollTop) + 'px'
        contextualDisplay.clientHeight

        contextualDisplayWrapper.style.height = document.body.clientHeight + 'px'

    window.addEventListener 'resize', ->
        if document.body.classList.contains 'contextual-open'
            positionContextualDisplay document.querySelector('code.contextual-code-example.contextual-open-tree')

chapters.setupSocialFooter = ->
    page = document.querySelector('.page')
    return unless page

    page.insertAdjacentHTML 'beforebegin', """
        <header class="social">
            <a class="github"  target="_blank" href="http://github.com/adamschwartz/magic-of-css/blob/gh-pages/#{ location.href.split(location.host)[1].replace('/magic-of-css/', '') }index.html">Code on GitHub</a>
            <a class="twitter" target="_blank" href="https://twitter.com/adamfschwartz"></a>
        </header>
    """

chapters.setupGlobalNavigation = ->
    nav = document.querySelector('nav.chapter-navigation')
    page = document.querySelector('.page')
    return unless nav and page

    previousLink = nav.querySelector('.previous-chapter')
    nextLink = nav.querySelector('.next-chapter')

    html = '<nav class="chapter-navigation-fullpage">'

    if previousLink
        html += """
            <a class="previous-chapter" href="#{ previousLink.getAttribute('href') }">
                <span class="title">#{ previousLink.querySelector('.title').textContent }</span>
            </a>
        """

    if nextLink
        html += """
            <a class="next-chapter" href="#{ nextLink.getAttribute('href') }">
                <span class="title">#{ nextLink.querySelector('.title').textContent }</span>
            </a>
        """

    html += '</nav>'

    page.insertAdjacentHTML 'afterend', html

window.chapters = chapters
setTimeout chapters.init