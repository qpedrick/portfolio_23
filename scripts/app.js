const routes = {
    '/' : home,
    '/about/' : about,
    '/works/' : works,
    '/contact/' : contact
};
    
const rootDiv = document.getElementById('root');
//console.log(routes['/'])
rootDiv.innerHTML = routes['/'];

const onNavigate = (pathname) => {
    // console.log(window.location)
    window.history.pushState(
        {},
        pathname,
        window.location.origin + `/portfolio_23` + pathname
    )
    rootDiv.innerHTML = routes[pathname]
}
    
window.onpopstate = () => {
    rootDiv.innerHTML = routes[window.location.pathname]
}