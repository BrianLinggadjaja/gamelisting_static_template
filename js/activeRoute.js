// Should be placed in a .env; this is just used for sake of ease
const rootDir = 'gamelisting_static_template'

window.addEventListener('load', ()=> {
    const routeName = window.location.pathname.toString().toLowerCase()
    const route = document.querySelector('[data-route="' + rootDir + routeName + '"]')

    route.setAttribute('active', '')
})
