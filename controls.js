const media = window.matchMedia("(max-width: 1200px)")

const topNavControl = () => {
    let topNav = document.getElementById('nav-links');
    let up = document.getElementById('up');
    let down = document.getElementById('down');

    if (topNav.style.display === 'block' && media) {
        up.style.display = 'none';
        down.style.display = 'block';
        topNav.style.display = 'none';
    } else {
        up.style.display = 'block';
        down.style.display = 'none';
        topNav.style.display = 'block';
    }
}

const sideNavControl = () => {
    let sideNavLinks = document.getElementById('side-nav-links');
    let left = document.getElementById('left');
    let right = document.getElementById('right');

    if (sideNavLinks.style.display === 'block' && media) {
        right.style.display = 'block';
        left.style.display = 'none';
        sideNavLinks.style.display = 'none';
    } else {
        right.style.display = 'none';
        left.style.display = 'block';
        sideNavLinks.style.display = 'block';
        sideNavLinks.style.paddingTop = '80px';
    }
}

