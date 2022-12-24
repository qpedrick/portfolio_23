const routes = {
    '/' : home,
    '/about' : about,
    '/works' : works,
    '/contact' : contact
};
    
const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[window.location.pathname];

const onLoad = (pathname) => {
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    document.getElementById('root').innerHTML = routes[home]
}
    
const onNavigate = (pathname) => {
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    rootDiv.innerHTML = routes[pathname]
}
    
window.onpopstate = () => {
    rootDiv.innerHTML = routes[window.location.pathname]
}