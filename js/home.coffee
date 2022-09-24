document.documentElement.setAttribute? 'data-user-agent', navigator.userAgent

firedScroll = false
window.addEventListener 'scroll', ->
    return if firedScroll
    firedScroll = true
    document.body.className += ' window-has-been-scrolled'

if localStorage.hasBeenHereBefore is true
    document.body.className += ' has-been-here-before'
else
    localStorage.hasBeenHereBefore = true

referrerHostname = document.referrer.match(/:\/\/(.[^/]+)/)?[1].split(':')[0]

unless location.search.match(/animate/)?
    if document.location.hostname is referrerHostname or localStorage.hasBeenHereBefore is true or location.search.match(/fast/)?
        document.body.className += ' has-been-here-before'

document.body.className += ' trigger-pageload-animations'
setTimeout (-> document.body.className += ' trigger-pageload-animations-3s'), 3000
