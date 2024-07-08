const API_BASE_URL = 'http://127.0.0.1:5050';
document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const matchId = urlParams.get('id');

    if (!matchId) {
        Slick.redirect("/", reload = false);
        return;
    } else {
        fetch(`${API_BASE_URL}/check-match?id=${matchId}`)
            .then(response => response.json())
            .then(data => {
                if (data.valid) {
                    document.querySelector(".button-container button").disabled = false;
                    document.querySelector("h1").textContent = "Match en cours";
                } else {
                    Slick.redirect("/", reload = false);
                }
            })
            .catch(() => {
                Slick.redirect("/", reload = false);
            });
    }

    document.querySelector('#winButton').addEventListener('click', () => {
        submitResult(matchId, 'win', SlickCookies.get('matchToken'));
    });

    document.querySelector('#loseButton').addEventListener('click', () => {
        submitResult(matchId, 'lose', SlickCookies.get('matchToken'));
    });
});

function submitResult(matchId, result, token) {
    fetch('/submit-result', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ matchId, result, token })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Result submitted successfully');
            Slick.redirect("/", reload = false);
        } else {
            console.error('Error submitting result:', data.error);
        }
    })
    .catch(error => console.error('Request error:', error));
}