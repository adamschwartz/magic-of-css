app = {}

app.init = ->
    $('body').addClass('trigger-pageload-animations')

window.app = app
$ app.init