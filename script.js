const hamburger = document.querySelector('.hamburger');

const navigationBar = document.querySelector('.navigation-bar');

const handleClick = () => {
    hamburger.classList.toggle('hamburger-active');
    navigationBar.classList.toggle('navigation-active');
    
}

hamburger.addEventListener('click', handleClick);

window.addEventListener('click', e => {
    if(!hamburger.contains(e.target) && !navigationBar.contains(e.target)){
        hamburger.classList.remove('hamburger-active');
        navigationBar.classList.remove('navigation-active');
    }
})