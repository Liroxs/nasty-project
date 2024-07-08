const API_BASE_URL = 'http://127.0.0.1:5050';
$(document).ready(function() {
    // filtre XSS
    function escapeHtml(text) {
        return $('<div>').text(text).html();
    }

    function chargerJoueurs() {
        fetch(`${API_BASE_URL}/fetch-players`)
            .then(response => response.json())
            .then(data => {
                console.log('Joueurs chargés:', data);
                var tbody = $('#rankTable tbody');
                tbody.empty();
                data.forEach((joueur, index) => {
                    var row = `<tr><td>${escapeHtml(index + 1)}</td><td>${escapeHtml(joueur.nom)}</td><td>${escapeHtml(joueur.rank)}</td><td>${escapeHtml(joueur.points)}</td></tr>`;
                    tbody.append(row);
                });
            })
            .catch(error => console.error('Erreur lors du chargement des joueurs:', error));
    }

    chargerJoueurs();

    // Ajouter un nouveau joueur
    $('#createAccountForm').submit(function(event) {
        event.preventDefault();
        var pseudo = $('#pseudo').val();
        
        fetch(`${API_BASE_URL}/create-player`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ pseudo: pseudo })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Réponse de création de joueur:', data);
            if (data.error) {
                $('#message').text(data.error);
            } else {
                $('#pseudo').val('');
                $('#message').text('Compte créé avec succès!');
                chargerJoueurs();
            }
        })
        .catch(error => {
            $('#message').text('Erreur lors de la création du compte.');
            console.error('Erreur lors de la création du compte:', error);
        });
    });
/*
Faut je mettes le chat après sur la page 

    function fetchMessages() {
        fetch(`${API_BASE_URL}/fetch-messages`)
            .then(response => response.json())
            .then(data => {
                var chatBox = $('#chatMessages');
                chatBox.empty();
                if (data.messages && data.messages.length > 0) {
                    data.messages.forEach(user => {
                        var sender = user.sender;
                        var messages = user.messages;
                        messages.forEach(message => {
                            var msg = `<p><strong>${escapeHtml(sender)}:</strong> ${escapeHtml(message.content)}</p>`;
                            chatBox.append(msg);
                        });
                    });
                } else {
                    console.log('Aucun message trouvé.');
                }
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des messages:', error);
            });
    }

    fetchMessages();

    $('#sendMessageForm').submit(function(event) {
        event.preventDefault();
        var username = $('#username').val();
        var message = $('#messageInput').val();
        
        fetch(`${API_BASE_URL}/send-message`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username: username, message: message })
        })
        .then(response => response.json())
        .then(data => {
            fetchMessages();
            $('#messageInput').val('');
        })
        .catch(error => {
            console.error('Erreur lors de l\'envoi du message:', error);
            $('#messageStatus').text('Erreur: Ce nom d\'utilisateur est déjà pris. Veuillez choisir un autre nom.');
        });
    });

    setInterval(fetchMessages, 5000);
*/
});
