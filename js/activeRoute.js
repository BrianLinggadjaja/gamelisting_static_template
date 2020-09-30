window.addEventListener('load', () => {
    const routeName = window.location.pathname.toString().toLowerCase()
    const route = document.querySelector('[data-route="' + routeName + '"]')

    route.setAttribute('active', '')
})
