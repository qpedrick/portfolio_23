const routes = {
    '/' : home,
    '/about' : about,
    '/works' : works,
    '/contact' : contact
};
    
const rootDiv = document.getElementById('root');
rootDiv.innerHTML = routes[window.location.pathname];

// const onLoad = () => {
//     document.getElementById('root').innerHTML = window.history.pushState({},'', `${window.location.origin}/`)
// }
    
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