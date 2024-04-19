document.addEventListener('DOMContentLoaded', function() {
    const content = document.getElementById('content');
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 6 && hour < 12) {
        // Manhã
        content.style.backgroundColor = 'white';
        content.style.color = 'black';
    } else if (hour >= 12 && hour < 18) {
        // Tarde
        content.classList.add('afternoon');
    } else if (hour >= 18 || hour < 6) {
        // Noite ou Madrugada
        if (hour < 6) {
            content.classList.add('dawn');
        } else {
            content.classList.add('night');
        }
    }
});