chapters = {}

applyToParents = (node, apply, count = 0) ->
    if count is 10
        return
    if node.parentNode and node.parentNode.tagName isnt 'BODY'
        applyToParents node.parentNode, apply, count+1
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
        exampleCSS: 'box-sizing: border-box;\nwidth: 100%;\npadding-left: 50%'
        exampleCSSSelector: '.box'
        exampleHTML: '<div class="box light" style="padding-top: 1.5em">Some text</div>'

    'border-box': 'box-sizing'
    'content-box': 'box-sizing'
    # padding-box ?

    'outline':
        description: '<p>A line outside the box</p>'
        exampleCSS: 'outline:\n    1.5em double lightgreen'
        exampleCSSSelector: '.box'
        exampleHTML: '<div class="box" style="margin-top: 1.5em"></div>'

    'border-radius':
        description: '<p>Rounded corners</p>'
        exampleCSS: 'border-radius: 0 1em'
        exampleCSSSelector: '.box'
        exampleHTML: '<div class="box"></div>'

    'box-shadow':
        description: '<p>A shadow-like styling</p>'
        exampleCSS: 'box-shadow:\n    0 1em 4em pink,\n    0 .1em red,\n    inset 0 .5em #000'
        exampleCSSSelector: '.box'
        exampleHTML: '<div class="box"></div>'

    # padding
    # width
    # height

chapters.init = ->
    chapters.setupContextualCodeExamples()

chapters.setupContextualCodeExamples = ->
    document.querySelector('.chapter').insertAdjacentHTML('afterend', '<div class="contextual-display"></div>')

    contextualDisplay = document.querySelector('.contextual-display')

    document.body.addEventListener 'click', (event) ->
        closeContextualDisplay()

    Array::slice.call(document.querySelectorAll(':not(pre) > code')).forEach (code) ->
        found = false
        for specialTerm of chapters.specialTerms
            if code.textContent is specialTerm
                code.classList.add 'contextual-code-example'
                found = true
        if found is false
            console.log 'Could not find special term', code.textContent

    closeContextualDisplay = ->
        Array::slice.call(document.querySelectorAll('.contextual-open, .contextual-transition, .contextual-open-tree')).forEach (element) ->
            element.classList.remove 'contextual-open'
            element.classList.remove 'contextual-transition'
            element.classList.remove 'contextual-open-tree'

    Array::slice.call(document.querySelectorAll('.contextual-code-example')).forEach (code) ->
        code.addEventListener 'click', (event) ->
            event.stopPropagation()

            specialTermObj = chapters.specialTerms[event.target.textContent]
            specialTerm = event.target.textContent

            if typeof specialTermObj is 'string'
                specialTerm = specialTermObj
                specialTermObj = chapters.specialTerms[specialTermObj]

            if specialTermObj?
                closeContextualDisplay()

                contextualDisplay.innerHTML = """
                    <h3>#{ specialTermTitle specialTerm }</h3>
                    <div class="contextual-description">
                        #{ specialTermObj.description }
                    </div>
                    <pre><code>#{ specialTermObj.exampleCSS }</code></pre>
                    <style>
                        .contextual-example #{ specialTermObj.exampleCSSSelector } {
                            #{ specialTermObj.exampleCSS }
                        }
                    </style>
                    <div class="contextual-example">
                        #{ specialTermObj.exampleHTML }
                    </div>
                    <a data-contextual-close></a>
                """

                contextualDisplay.querySelector('[data-contextual-close]')?.addEventListener 'click', (event) ->
                    event.stopPropagation()
                    closeContextualDisplay()

                contextualDisplay.classList.add 'contextual-transition'
                contextualDisplay.clientHeight

                boundingClientRect = code.getBoundingClientRect()
                contextualDisplay.style.top = (boundingClientRect.top + document.body.scrollTop) + 'px'
                contextualDisplay.clientHeight

                contextualDisplay.classList.add 'contextual-open'
                applyToParents code, (node) -> node.classList.add 'contextual-open-tree'
                document.body.classList.add 'contextual-open'

            else
                closeContextualDisplay()

window.chapters = chapters
setTimeout chapters.init