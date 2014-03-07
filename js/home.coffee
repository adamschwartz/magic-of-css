app = {}

app.init = ->
    document.body.className += ' trigger-pageload-animations'

    firedMouseMove = false
    window.addEventListener 'mousemove', ->
        return if firedMouseMove
        firedMouseMove = true
        document.body.className += ' mouse-has-moved'

    firedScroll = false
    window.addEventListener 'scroll', ->
        return if firedScroll
        firedScroll = true
        document.body.className += ' window-has-been-scrolled'

window.app = app
setTimeout app.init