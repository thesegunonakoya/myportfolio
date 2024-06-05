document.addEventListener('DOMContentLoaded', () => {
    const startTime = Date.now();

    window.addEventListener('load', () => {
        const loadingScreen = document.getElementById('loading-screen');
        const elapsedTime = Date.now() - startTime;
        const minDuration = 3000;

        const remainingTime = minDuration - elapsedTime;

        if (remainingTime > 0) {
            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                loadingScreen.style.transition = 'opacity 0.5s ease-out';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                }, 1000);
            }, remainingTime);
        } else {
            loadingScreen.style.opacity = '0';
            loadingScreen.style.transition = 'opacity 0.5s ease-out';
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 1000);
        }
    });
});
