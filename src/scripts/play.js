const API_BASE_URL = 'http://127.0.0.1:5050';

// Clique du button
document.getElementById('mainButton').addEventListener('click', function () {
    const buttonContainer = document.getElementById('buttonContainer');
    // Vérifie si le conteneur est actuellement caché
    if (buttonContainer.classList.contains('hidden')) {
        // Si caché, on le montre
        buttonContainer.classList.remove('hidden');
    } else {
        // Si visible, on le cache
        buttonContainer.classList.add('hidden');
    }
});

let queueCheckInterval;
let isFirstCheck = true;

function joinQueue(mode) {
    function checkQueue() {
        fetch(`${API_BASE_URL}/join-queue`)
            .then(response => response.json())
            .then(data => {
                if (isFirstCheck) {
                    alert(`${data.message} ${mode}`);
                    isFirstCheck = false;
                }
                // Si un match est trouvé, arrêtez l'intervalle et affichez un message
                if (data.status === 'match_found') {
                    clearInterval(queueCheckInterval);
                    alert(`Match trouvé pour ${mode}!`);
                    isFirstCheck = true;
                    SlickCookies.set('matchToken', data.token);
                    Slick.redirect(data.redirectUrl, reload=false); // redirigez vers la page de match
                } 
                // Si le joueur est déjà dans un match, arrêtez l'intervalle et signaler que le joueur est déjà dans un match
                else if (data.message === 'Vous êtes déjà dans un match') {
                    clearInterval(queueCheckInterval);
                }
            })
            .catch(error => {
                console.error('Erreur:', error);
                if (isFirstCheck) {
                    alert("Erreur pour vérifier la file d'attente");
                    isFirstCheck = false;
                }
            });
    }
    isFirstCheck = true;
    checkQueue();
    queueCheckInterval = setInterval(checkQueue, 5000);
}

document.querySelectorAll('#buttonContainer .fortnite-button').forEach(button => {
    button.addEventListener('click', function () {
        if (queueCheckInterval) {
            clearInterval(queueCheckInterval);
        }
        joinQueue(this.textContent);
    });
});