window.addEventListener('load', () => {
    const routePath = window.location.pathname.split('/')
    const routePathLength = routePath.length
    const routeName = routePath[(routePathLength - 1)].toString().toLowerCase()
    const route = document.querySelector('[data-route="/' + routeName + '"]')

    route.setAttribute('active', '')
})

function toggleMyList() {
    const dialog = document.getElementById('dialogMyList')
    let isActive = (dialog.getAttribute('active') !== null)

    if (isActive) {
        dialog.removeAttribute('active')
    } else {
        dialog.setAttribute('active', '')
    }
}
