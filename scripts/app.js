const routes = {
    '/' : home,
    '/about/' : about,
    '/works/' : works,
    '/contact/' : contact
};
    
const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[window.location.pathname];

const onNavigate = (pathname) => {
    window.history.pushState(
        {},
        pathname,
        window.location.origin + pathname
    )
    rootDiv.innerHTML = routes[pathname]
    console.log(pathname)
}
    
window.onpopstate = () => {
    rootDiv.innerHTML = routes[window.location.pathname]
}