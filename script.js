// Access Code Validation
document.addEventListener('DOMContentLoaded', function() {
    const accessForm = document.getElementById('accessForm');
    if (accessForm) {
        accessForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const accessCode = document.getElementById('accessCode').value;
            const errorMessage = document.getElementById('errorMessage');
            const inputField = document.getElementById('accessCode');
            
            if (accessCode === 'SN always stay and janjji❗') {
                window.location.href = 'bab1.html';
            } else {
                errorMessage.textContent = 'Hayolo salahh..inget inget lagi bub🤍';
                inputField.classList.add('shake');
                setTimeout(() => {
                    inputField.classList.remove('shake');
                }, 500);
            }
        });
    }
    
    // Falling hearts for end page
    const heartsContainer = document.querySelector('.hearts-container');
    if (heartsContainer) {
        createHearts();
    }
});