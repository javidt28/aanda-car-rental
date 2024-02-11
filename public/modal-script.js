// modal-script.js
document.addEventListener('DOMContentLoaded', () => {
    const openModalButton = document.getElementById('openModalButton');
    const closeModalButton = document.getElementById('closeModalButton');
    const registrationModal = document.getElementById('registrationModal');

    openModalButton.addEventListener('click', () => {
        registrationModal.style.display = 'block';
    });

    closeModalButton.addEventListener('click', () => {
        registrationModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === registrationModal) {
            registrationModal.style.display = 'none';
        }
    });
});
