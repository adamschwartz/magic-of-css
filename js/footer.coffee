setupCarbonAds = ->
    page = document.querySelector('.page')
    return unless page

    el = document.createElement 'carbonads'
    el.innerHTML = '''
        <style>
            /* Carbon Ads styles */

            .carbonads-wrapper {
                position: absolute;
                top: 0;
                left: 0;
                background: #eee;
            }

            #carbonads {
                display: block;
                overflow: hidden;
                line-height: 1.33;
                width: 162px;
                padding: 11px 16px 0;
                max-width: 100%;
                font-size: 12px;
                background: #eee;
                margin: 0 auto;
            }

            #carbonads span {
                position: relative;
                display: block;
                overflow: hidden;
            }

            .carbon-img img {
                display: block;
                margin-bottom: 7px;
            }

            .carbon-text {
                color: inherit;
                display: block;
                float: left;
                text-align: left;
                text-decoration: none;
            }

            .carbon-poweredby {
                color: #b9b9b9;
                text-decoration: none;
                display: block;
                text-align: left;
                font-size: 10px;
                margin-top: 2px;
                margin-bottom: 11px;
            }

            @media (max-width: 700px) {
                .page {
                    padding-top: 22em
                }

                .carbonads-wrapper {
                    width: 100%;
                }
            }

            /* Modifications to support Carbon Ads */

            html.home-page .carbonads-wrapper {
              transition: opacity 800ms 1300ms ease-in-out;
              opacity: 0;
            }

            html.home-page .trigger-pageload-animations .carbonads-wrapper {
                opacity: 1;
            }

            html.home-page .window-has-been-scrolled .carbonads-wrapper, html.home-page .has-been-here-before .carbonads-wrapper {
                transition: none;
            }

            html header.social a.twitter:before {
                opacity: 1;
            }

            html header.social a.github {
                top: 3.5em;
                right: 0;
                left: auto;
                padding: .25em 2em 1em;
            }

            html nav.chapter-navigation-fullpage .previous-chapter {
                display: none !important
            }

            @media (max-width: 700px) {
                .page {
                    padding-top: 16em
                }
            }
        </style>
        <div class="carbonads-wrapper"></div>
    '''
    document.body.appendChild el

    script = document.createElement 'script'
    script.async = true
    script.id = '_carbonads_js'
    script.src = '//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=adamschwartzco'
    document.querySelector('.carbonads-wrapper').appendChild script

setupCarbonAds()
