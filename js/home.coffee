home = {}

home.init = ->
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

    if localStorage.hasBeenHereBefore
        document.body.className += ' has-been-here-before'
    else
        localStorage.hasBeenHereBefore = true

window.home = home
setTimeout home.init