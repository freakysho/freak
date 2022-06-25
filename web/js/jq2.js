document.addEventListener('DOMContentLoaded', function(){
    let banner = document.getElementById('banner-wrapper');
    let devLayer = banner.querySelector('.dev');
    let delta = 0;
    banner.addEventListener('mousemove', function(e){
        delta = ((e.pageX - banner.getBoundingClientRect().left) - banner.offsetWidth / 2) * 0.5;
        devLayer.style.width = (e.pageX - banner.getBoundingClientRect().left) + 200 + delta + 'px';
    });
})
