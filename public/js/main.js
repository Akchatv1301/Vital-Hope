document.addEventListener('DOMContentLoaded', () => {
    const emergencyButton = document.getElementById('emergencyButton');
    let pressTimer;
    let pressStartTime;
    let isPressed = false;

    function startPress() {
        isPressed = true;
        pressStartTime = Date.now();
        emergencyButton.style.backgroundColor = '#ff4444';
        
        pressTimer = setInterval(() => {
            const elapsedTime = Math.floor((Date.now() - pressStartTime) / 1000);
            if (elapsedTime >= 3) {
                triggerEmergency();
                clearInterval(pressTimer);
            }
        }, 100);
    }

    function endPress() {
        if (!isPressed) return;
        
        isPressed = false;
        clearInterval(pressTimer);
        emergencyButton.style.backgroundColor = '#ff6b6b';
    }

    function triggerEmergency() {
        alert('Emergency services have been notified!');
        endPress();
    }

    // Touch events for mobile
    emergencyButton.addEventListener('touchstart', (e) => {
        e.preventDefault();
        startPress();
    });

    emergencyButton.addEventListener('touchend', (e) => {
        e.preventDefault();
        endPress();
    });

    // Mouse events for desktop
    emergencyButton.addEventListener('mousedown', startPress);
    emergencyButton.addEventListener('mouseup', endPress);
    emergencyButton.addEventListener('mouseleave', endPress);

    // Category button clicks
    const categoryButtons = document.querySelectorAll('.category-button');
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.querySelector('span:last-child').textContent;
            alert(`Selected emergency category: ${category}`);
        });
    });

    // Navigation button clicks
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
});