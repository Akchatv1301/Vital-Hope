document.addEventListener('DOMContentLoaded', () => {
    // Handle back button
    const backButton = document.querySelector('.back-button');
    backButton.addEventListener('click', () => {
        window.history.back();
    });

    // Handle view buttons for doctors
    const viewButtons = document.querySelectorAll('.view-button');
    viewButtons.forEach(button => {
        button.addEventListener('click', () => {
            const doctorId = button.getAttribute('data-id');
            // Handle viewing doctor details
            console.log(`Viewing doctor with ID: ${doctorId}`);
        });
    });

    // Handle navigation buttons
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    // Handle notifications
    const notificationButton = document.querySelector('.notification-button');
    notificationButton.addEventListener('click', () => {
        console.log('Opening notifications');
    });
});