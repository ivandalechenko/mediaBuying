const hideLoader = () => {
    document.getElementById('body').style.overflow = 'visible'
    const loader = document.getElementById('loader');
    loader.style.transition = '500ms opacity';
    loader.style.opacity = '0';
    setTimeout(() => {
        loader.style.display = 'none';
    }, 500);
}

export default hideLoader